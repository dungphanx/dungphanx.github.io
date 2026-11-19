// Prints the CV pages (/resume/, /vi/resume/) of the static export (out/) to PDF with headless Chrome.
// (/cv/ would clash with the dungphanx/cv repo, whose Pages site owns that path.)
// Runs after `next build`; fails the build when a PDF cannot be made, so the
// "Download CV" button never points at a missing file. No npm dependencies.
// The PDFs exist only in out/, so the button returns 404 under `next dev`.
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const OUT = path.resolve("out");
const PAGES = [
  { url: "/resume/", file: "dung-phan-cv.pdf" },
  { url: "/vi/resume/", file: "dung-phan-cv-vi.pdf" },
];
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".txt": "text/plain",
};

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  ];
  const found = candidates.find((p) => p && existsSync(p));
  if (!found) throw new Error("Chrome not found. Install Chrome or set CHROME_PATH.");
  return found;
}

// Serve out/ the way GitHub Pages does, so absolute /_next/... asset paths resolve.
function serve() {
  const server = createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, "http://x").pathname);
      let file = path.join(OUT, pathname);
      if (!file.startsWith(OUT + path.sep)) throw new Error("outside out/");
      if (pathname.endsWith("/")) file = path.join(file, "index.html");
      const body = await readFile(file);
      res.writeHead(200, { "content-type": TYPES[path.extname(file)] ?? "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

const chrome = findChrome();
const server = await serve();
const origin = `http://127.0.0.1:${server.address().port}`;
// a throwaway profile, so a Chrome the user already has open does not get in the way
const profile = await mkdtemp(path.join(tmpdir(), "cv-pdf-"));

try {
  for (const page of PAGES) {
    const target = path.join(OUT, page.file);
    await run(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        // GitHub's Ubuntu runners block Chrome's sandbox; we only load our own local pages
        ...(process.platform === "linux" ? ["--no-sandbox"] : []),
        `--user-data-dir=${profile}`,
        "--no-pdf-header-footer",
        // gives the web font time to load before printing
        "--virtual-time-budget=10000",
        `--print-to-pdf=${target}`,
        origin + page.url,
      ],
      { timeout: 120_000 },
    );
    const { size } = await stat(target);
    if (size < 10_000) throw new Error(`${page.file} is only ${size} bytes`);
    console.log(`CV: out/${page.file} (${Math.round(size / 1024)} KB)`);
  }
} finally {
  server.close();
  await rm(profile, { recursive: true, force: true });
}
