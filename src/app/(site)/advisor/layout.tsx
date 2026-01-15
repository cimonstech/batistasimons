import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Project Advisor | Batista Simons – Web Developer Ghana",
  description:
    "Describe your website idea and get expert guidance on the right technology stack, hosting solutions, timeline estimates, and development approach from Batista Simons, a web developer and designer in Ghana. Free project planning tool for WordPress, e-commerce, React.js, and custom web applications.",
  keywords: [
    "website project advisor",
    "website planning tool Ghana",
    "web development guidance Ghana",
    "WordPress advice Ghana",
    "Batista Simons advisor",
    "website planning Ghana",
    "web development consultation Ghana",
    "e-commerce planning tool",
    "website technology advisor",
    "project planning Ghana",
  ],
  openGraph: {
    title: "Website Project Advisor | Batista Simons – Web Developer Ghana",
    description:
      "Describe your website idea and get guidance on the right technology, hosting, and timeline from a web developer and designer in Ghana.",
    type: "website",
  },
};

export default function AdvisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
