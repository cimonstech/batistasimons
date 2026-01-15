import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Batista Simons | Web Developer & Designer in Ghana",
  description:
    "Contact Batista Simons, a web developer and creative designer in Ghana, for website development, e-commerce solutions, WordPress websites, React.js applications, and digital design projects. Available for hire in Accra, Ghana.",
  keywords: [
    "contact web developer Ghana",
    "hire web developer Accra",
    "creative designer Ghana contact",
    "Batista Simons contact",
    "web developer Ghana hire",
    "WordPress developer contact Ghana",
    "React.js developer contact Ghana",
    "website developer Ghana contact",
    "e-commerce developer contact Ghana",
  ],
  openGraph: {
    title: "Contact Batista Simons | Web Developer & Designer in Ghana",
    description:
      "Contact Batista Simons, a web developer and creative designer in Ghana, for website development, e-commerce, and digital design projects.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
