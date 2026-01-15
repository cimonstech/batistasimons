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
    default: "Batista Simons | Web Developer & Creative Designer in Ghana",
    template: "%s | Batista Simons",
  },
  description:
    "Batista Simons is a web developer and creative designer in Ghana, building modern websites, e-commerce platforms, and digital solutions for businesses and organizations. Specializing in WordPress, PHP, JavaScript, React.js, MySQL, WooCommerce, and modern visual design with Figma, Photoshop, and Illustrator.",
  keywords: [
    "Batista Simons",
    "web developer Ghana",
    "creative designer Ghana",
    "website developer Accra",
    "WordPress developer Ghana",
    "frontend developer Ghana",
    "backend developer Ghana",
    "software developer Ghana",
    "e-commerce developer Ghana",
    "React.js developer Ghana",
    "Next.js developer Ghana",
    "PHP developer Ghana",
    "UI/UX designer Ghana",
    "Figma designer Ghana",
  ],
  authors: [{ name: "Batista Simons" }],
  creator: "Batista Simons",
  publisher: "Batista Simons",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://batistasimons.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://batistasimons.com",
    siteName: "Batista Simons Portfolio",
    title: "Batista Simons | Web Developer & Creative Designer in Ghana",
    description:
      "Web developer and creative designer in Ghana, building modern websites, e-commerce platforms, and digital solutions for businesses and organizations.",
    images: [
      {
        url: "/batista.simons.logo.white.webp",
        width: 1200,
        height: 630,
        alt: "Batista Simons - Web Developer & Creative Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Batista Simons | Web Developer & Creative Designer in Ghana",
    description:
      "Web developer and creative designer in Ghana, building modern websites, e-commerce platforms, and digital solutions.",
    images: ["/batista.simons.logo.white.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
