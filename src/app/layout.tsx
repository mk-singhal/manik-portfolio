// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://maniksinghal.in"),

  title: "Manik Singhal | Software Engineer",
  description: "Full-stack software engineer building scalable, production-grade systems.",

  appleWebApp: {
    title: "Manik",
    capable: true,
  },
  
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon/favicon.ico"],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/favicon/site.webmanifest",

  openGraph: {
    title: "Manik Singhal | Software Engineer",
    description:
      "Full-stack software engineer building scalable, production-grade systems.",
    url: "https://maniksinghal.in",
    siteName: "Manik Singhal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manik Singhal | Software Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
