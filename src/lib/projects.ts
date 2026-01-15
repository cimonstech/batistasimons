export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  listDescription: string;
  imageUrl: string;
  imageUrls?: string[];
  websiteUrl?: string;
  category: "web" | "ui" | "creative";
  tags: string[];
  overview: string;
  servicesProvided: string[];
  techStack?: string[];
  toolsUsed?: string[];
  caseStudy?: {
    projectOverview: string;
    challenge: string;
    solution: string;
    keyFeatures: string[];
    results: string[];
    cta: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "maxking-gyan-services",
    title: "MaxKing Gyan Services",
    subtitle: "Corporate Website",
    listDescription:
      "A modern corporate website for an industrial services company, built with React.js and Next.js, featuring product listings and seamless customer engagement.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://maxkingservices.com&dimension=1024x768&delay=4000",
    websiteUrl: "https://maxkingservices.com",
    category: "web",
    tags: ["Next.js", "React.js", "PostgreSQL", "JavaScript", "TailwindCSS"],
    overview:
      "A modern corporate website for an industrial services company, built with React.js and Next.js, featuring product listings and seamless customer engagement.",
    servicesProvided: [
      "Website development",
      "Product presentation",
      "Database integration",
      "Responsive design",
    ],
    techStack: ["Next.js", "React.js", "PostgreSQL", "JavaScript", "TailwindCSS"],
    caseStudy: {
      projectOverview:
        "MaxKing Gyan Services needed a modern, scalable website to showcase their industrial services and products. The goal was to create a fast, responsive platform with efficient data management.",
      challenge:
        "The client required a modern web application that could handle product listings, customer inquiries, and provide a seamless user experience across all devices.",
      solution:
        "I developed a full-stack web application using Next.js and React.js with PostgreSQL for data management, styled with TailwindCSS for a modern, responsive design.",
      keyFeatures: [
        "Server-side rendering for optimal performance",
        "PostgreSQL database integration",
        "Responsive design with TailwindCSS",
        "Fast page loads and SEO optimization",
      ],
      results: [
        "Improved website performance and user experience",
        "Better product visibility and engagement",
        "Scalable architecture for future growth",
      ],
      cta: "Contact Me for Similar Projects",
    },
    featured: true,
  },
  {
    slug: "juicelux-international",
    title: "JuiceLux International",
    subtitle: "E-commerce Website",
    listDescription:
      "An e-commerce platform for juice products, built with WordPress and WooCommerce, featuring product catalog and online ordering capabilities.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://juiceluxinternational.com&dimension=1024x768&delay=4000",
    websiteUrl: "https://juiceluxinternational.com",
    category: "web",
    tags: ["WordPress", "CMS", "WooCommerce"],
    overview:
      "An e-commerce website for JuiceLux International, enabling online sales of juice products with a modern, user-friendly interface.",
    servicesProvided: [
      "E-commerce development",
      "WooCommerce integration",
      "Product catalog design",
      "Shopping cart functionality",
    ],
    techStack: ["WordPress", "CMS", "WooCommerce"],
  },
  {
    slug: "volta-market-ui",
    title: "Volta Market UI",
    subtitle: "UI Design",
    listDescription:
      "UI design for a digital marketplace platform connecting local vendors and consumers in the Volta Region, featuring a modern and intuitive multi-vendor e-commerce interface.",
    imageUrl: "/voltamarketui1.png",
    imageUrls: ["/voltamarketui1.png", "/voltamarketui2.png", "/voltamarketui3.png"],
    websiteUrl: "https://voltamarket-ui.vercel.app/",
    category: "ui",
    tags: ["UI Design", "Figma", "E-commerce", "Marketplace"],
    overview:
      "UI design for Volta Market, a digital marketplace platform designed to connect local vendors, small businesses, and consumers. The design focuses on creating an intuitive, mobile-first experience that bridges traditional physical markets with modern e-commerce.",
    servicesProvided: [
      "UI/UX design",
      "User interface design",
      "Design system",
      "Mobile-first design",
      "E-commerce interface design",
    ],
    toolsUsed: ["Figma", "Photoshop", "Illustrator"],
    caseStudy: {
      projectOverview:
        "Volta Market is a digital marketplace platform designed to connect local vendors, small businesses, and consumers within the Volta Region and beyond. The platform aims to digitize local commerce by providing an easy-to-use system for discovering products, placing orders, and managing deliveries, while empowering vendors with digital tools to grow their businesses. The solution bridges the gap between traditional physical markets and modern e-commerce, making local trade more accessible, organized, and scalable.",
      challenge:
        "The challenge was to design a user interface that could accommodate multiple user types (customers, vendors, and admins) while maintaining simplicity and accessibility. The design needed to work seamlessly on mobile devices, support a multi-vendor marketplace structure, and integrate features like payment on delivery, order tracking, and WhatsApp/SMS notifications. The interface had to feel familiar to users accustomed to traditional markets while providing modern e-commerce functionality.",
      solution:
        "I designed a comprehensive UI system with separate interfaces for customers, vendors, and administrators. The customer-facing design features intuitive product browsing, category navigation, cart management, and order tracking. The vendor dashboard focuses on product listing, inventory management, and order notifications. The admin interface provides full control over marketplace operations. All interfaces follow a mobile-first approach with clean, modern aesthetics that prioritize usability and accessibility.",
      keyFeatures: [
        "Multi-vendor marketplace interface design",
        "Customer-facing product browsing and cart system",
        "Vendor dashboard for product and order management",
        "Admin control panel for marketplace oversight",
        "Mobile-first responsive design",
        "Order tracking and notification system UI",
        "Payment on delivery workflow design",
        "Category and product management interfaces",
      ],
      results: [
        "Created a cohesive design system for all user types",
        "Improved user experience with intuitive navigation and workflows",
        "Enhanced mobile accessibility for local market users",
        "Established scalable design patterns for future features",
      ],
      cta: "Contact Me for Similar Projects",
    },
    featured: true,
  },
  {
    slug: "impact-logistics",
    title: "Impact Logistics",
    subtitle: "UI Design",
    listDescription:
      "UI design for a medical courier service website, creating a professional and trustworthy interface that makes service inquiries simple for hospitals and clinics.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://impactlogisticsservices.com&dimension=1024x768&delay=4000",
    websiteUrl: "https://impactlogisticsservices.com",
    category: "ui",
    tags: ["UI Design", "Figma", "WordPress"],
    overview:
      "UI design work for Impact Logistics, a medical courier service website, focusing on creating an intuitive and professional user interface.",
    servicesProvided: [
      "UI design",
      "User experience design",
      "Visual design",
      "Design system",
    ],
    toolsUsed: ["Figma", "Photoshop", "Illustrator"],
    caseStudy: {
      projectOverview:
        "Impact Logistics is a medical courier service working with hospitals and healthcare providers. I was tasked with designing the user interface for their website to create a professional and trustworthy online presence.",
      challenge:
        "The client needed a UI design that clearly communicated their services and allowed hospitals to request information quickly, with a focus on trust and professionalism in the healthcare sector.",
      solution:
        "I designed a clean, modern UI with clear service sections, intuitive inquiry flows, and a responsive layout that works seamlessly across all devices. The design emphasizes trust and professionalism through careful use of color, typography, and spacing.",
      keyFeatures: [
        "Responsive and mobile-friendly UI design",
        "Clean interface aligned with brand identity",
        "Intuitive user flows for service inquiries",
        "Professional design system",
      ],
      results: [
        "Improved visual appeal and user experience",
        "Better user engagement with clear CTAs",
        "Professional appearance that builds trust",
      ],
      cta: "Contact Me for Similar Projects",
    },
    featured: true,
  },
  {
    slug: "talk2me-foundation",
    title: "Talk2me Foundation",
    subtitle: "Nonprofit Website",
    listDescription:
      "A professional website for a nonprofit foundation, designed to raise awareness and facilitate community engagement through a clean, accessible platform.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://talk2mefoundationgh.org&dimension=1024x768&delay=4000",
    websiteUrl: "https://talk2mefoundationgh.org",
    category: "web",
    tags: ["WordPress", "PHP", "CMS"],
    overview:
      "A professional website for Talk2me Foundation, built to showcase their mission, programs, and impact in the community.",
    servicesProvided: [
      "Website development",
      "Content management system",
      "UI design",
      "SEO optimization",
    ],
    techStack: ["WordPress", "PHP", "CMS"],
    caseStudy: {
      projectOverview:
        "Talk2me Foundation needed a professional website to communicate their mission and programs effectively to donors, volunteers, and the community.",
      challenge:
        "The foundation required an easy-to-manage website that could be updated regularly by non-technical staff while maintaining a professional appearance.",
      solution:
        "I developed a WordPress website with a custom PHP backend, providing a user-friendly CMS for easy content management and updates.",
      keyFeatures: [
        "Easy content management system",
        "Responsive and accessible design",
        "Program and impact showcase",
        "Donation and contact integration",
      ],
      results: [
        "Improved online presence and visibility",
        "Easier content management for staff",
        "Better engagement with stakeholders",
      ],
      cta: "Contact Me for Similar Projects",
    },
  },
  {
    slug: "japhson-institute",
    title: "Japhson Institute",
    subtitle: "School Website",
    listDescription:
      "A comprehensive educational institution website featuring course listings, student resources, and administrative information for a Ghana-based school.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://japhsoninstitute.edu.gh&dimension=1024x768&delay=4000",
    websiteUrl: "https://japhsoninstitute.edu.gh",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    overview:
      "A comprehensive school website for Japhson Institute, providing information about courses, admissions, and student resources.",
    servicesProvided: [
      "Website development",
      "Database integration",
      "Student portal features",
      "Content management",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    caseStudy: {
      projectOverview:
        "Japhson Institute required a professional school website to showcase their educational programs, facilitate admissions, and provide resources for students and parents.",
      challenge:
        "The school needed a website with database functionality for managing student information, course listings, and administrative features.",
      solution:
        "I developed a custom website using HTML, CSS, JavaScript, PHP, and MySQL to create a robust platform with database-driven content and student management features.",
      keyFeatures: [
        "MySQL database for data management",
        "Dynamic content with PHP",
        "Responsive design with HTML/CSS",
        "Interactive features with JavaScript",
      ],
      results: [
        "Improved communication with students and parents",
        "Efficient information management",
        "Professional online presence",
      ],
      cta: "Contact Me for Similar Projects",
    },
  },
  {
    slug: "edriche-limited",
    title: "Edriche Limited",
    subtitle: "Business Website",
    listDescription:
      "A professional business website for Edriche Limited, showcasing services and facilitating client engagement through a modern, responsive platform.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://edrichelimited.com.gh&dimension=1024x768&delay=4000",
    websiteUrl: "https://edrichelimited.com.gh",
    category: "web",
    tags: ["WordPress", "PHP", "CMS"],
    overview:
      "A professional business website for Edriche Limited, built to showcase their services and facilitate client communication.",
    servicesProvided: [
      "Website development",
      "Content management system",
      "Service presentation",
      "Contact integration",
    ],
    techStack: ["WordPress", "PHP", "CMS"],
  },
  {
    slug: "ventech-gadgets",
    title: "Ventech Gadgets",
    subtitle: "E-commerce Website",
    listDescription:
      "A modern e-commerce platform for electronics and gadgets, built with Next.js and React.js, featuring product catalog, shopping cart, and secure checkout.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://ventechgadgets.com&dimension=1024x768&delay=4000",
    websiteUrl: "https://ventechgadgets.com",
    category: "web",
    tags: ["Next.js", "React.js", "PostgreSQL", "JavaScript", "E-commerce"],
    overview:
      "A modern e-commerce platform for Ventech Gadgets, enabling online sales of electronics and gadgets with a seamless shopping experience.",
    servicesProvided: [
      "E-commerce development",
      "Product catalog management",
      "Shopping cart functionality",
      "Database integration",
    ],
    techStack: ["Next.js", "React.js", "PostgreSQL", "JavaScript"],
    caseStudy: {
      projectOverview:
        "Ventech Gadgets needed a modern e-commerce platform to sell electronics and gadgets online, with efficient product management and secure transactions.",
      challenge:
        "The client required a scalable e-commerce solution with product catalog management, shopping cart functionality, and secure checkout processes.",
      solution:
        "I developed a full-stack e-commerce platform using Next.js and React.js with PostgreSQL for product and order management, ensuring fast performance and scalability.",
      keyFeatures: [
        "Product catalog with search and filters",
        "Shopping cart and checkout system",
        "PostgreSQL database for inventory",
        "Responsive design for all devices",
      ],
      results: [
        "Increased online sales and customer engagement",
        "Efficient product and order management",
        "Improved user experience and conversion rates",
      ],
      cta: "Contact Me for Similar Projects",
    },
    featured: true,
  },
  {
    slug: "gl-premium-honey",
    title: "GL Premium Honey",
    subtitle: "E-commerce Website",
    listDescription:
      "An e-commerce website for premium honey products, built with WordPress and WooCommerce, featuring product listings and online ordering.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://glpremiumhoney.com&dimension=1024x768&delay=4000",
    websiteUrl: "https://glpremiumhoney.com",
    category: "web",
    tags: ["WordPress", "CMS", "WooCommerce"],
    overview:
      "An e-commerce website for GL Premium Honey, enabling online sales of premium honey products through a user-friendly platform.",
    servicesProvided: [
      "E-commerce development",
      "WooCommerce integration",
      "Product management",
      "Payment gateway setup",
    ],
    techStack: ["WordPress", "CMS", "WooCommerce"],
  },
  {
    slug: "la-divine-cleaner-solutions",
    title: "L.A. Divine Cleaner Solutions",
    subtitle: "E-commerce Website",
    listDescription:
      "An e-commerce platform for cleaning products and solutions, built with WordPress and WooCommerce, featuring product listings and online sales.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://ladivinecleanersolutions.com&dimension=1024x768&delay=4000",
    websiteUrl: "https://ladivinecleanersolutions.com",
    category: "web",
    tags: ["WordPress", "CMS", "WooCommerce"],
    overview:
      "An e-commerce website for L.A. Divine Cleaner Solutions, enabling online sales of cleaning products and solutions.",
    servicesProvided: [
      "E-commerce development",
      "WooCommerce integration",
      "Product management system",
      "Payment processing setup",
    ],
    techStack: ["WordPress", "CMS", "WooCommerce"],
  },
  {
    slug: "ekot-nurturing",
    title: "EKOT Nurturing",
    subtitle: "Nonprofit Website",
    listDescription:
      "A professional website for EKOT Nurturing, a nonprofit organization, designed to showcase their mission and programs with a clean, accessible platform.",
    imageUrl:
      "https://api.screenshotmachine.com?key=64fa03&url=https://ekotnurturing.org&dimension=1024x768&delay=4000",
    websiteUrl: "https://ekotnurturing.org",
    category: "web",
    tags: ["WordPress", "CMS"],
    overview:
      "A professional website for EKOT Nurturing, built to communicate their mission and impact to supporters and the community.",
    servicesProvided: [
      "Website development",
      "Content management system",
      "Program showcase",
      "SEO optimization",
    ],
    techStack: ["WordPress", "CMS"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

