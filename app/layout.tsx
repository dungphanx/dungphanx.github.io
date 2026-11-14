import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dung Phan — Technical Lead, Ho Chi Minh City",
  description:
    "Dung Phan is a technical lead with ten years shipping Ruby on Rails and React systems that move money, now leading an Account Payable product at Money Forward.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
