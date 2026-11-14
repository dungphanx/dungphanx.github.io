import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dung Phan — Technical Lead, Cloud Expense at Money Forward",
  description:
    "Dung Phan is a technical lead at Money Forward Vietnam. He built the Account Payable team from zero and now leads the Product VN team for Cloud Expense.",
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
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
