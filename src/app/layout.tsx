import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Batista Simons | Web Developer & Creative Designer",
    template: "%s | Batista Simons",
  },
  description:
    "Web Developer & Creative Designer specializing in WordPress, PHP, WooCommerce, and modern visual design.",
  icons: {
    icon: [
      { url: "/batista.simons.logo.white.webp", type: "image/webp" },
    ],
    shortcut: "/batista.simons.logo.white.webp",
    apple: "/batista.simons.logo.white.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/batista.simons.logo.white.webp" type="image/webp" />
        <link rel="shortcut icon" href="/batista.simons.logo.white.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/batista.simons.logo.white.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${fontBody.variable} ${fontDisplay.variable} antialiased font-[var(--font-body)]`}
      >
        {children}
      </body>
    </html>
  );
}
