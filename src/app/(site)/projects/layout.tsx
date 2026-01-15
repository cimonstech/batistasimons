import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Web Development & Creative Design by Batista Simons",
  description:
    "Explore web development, e-commerce, and creative design projects by Batista Simons, a web developer and designer based in Ghana. View WordPress websites, React.js applications, e-commerce platforms, and UI/UX design projects.",
  keywords: [
    "web development projects Ghana",
    "creative design portfolio Ghana",
    "WordPress projects Ghana",
    "e-commerce developer Ghana",
    "Batista Simons projects",
    "React.js projects Ghana",
    "Next.js projects Ghana",
    "website portfolio Ghana",
    "UI design projects Ghana",
    "WooCommerce projects Ghana",
  ],
  openGraph: {
    title: "Projects | Web Development & Creative Design by Batista Simons",
    description:
      "Explore web development, e-commerce, and creative design projects by Batista Simons, a web developer and designer based in Ghana.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
