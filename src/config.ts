// Site Configuration
// Aiman's Fashion - Luxury South Asian Clothing Brand

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Aiman's Fashion | Luxury South Asian Couture",
  siteDescription: "Discover exquisite South Asian fashion at Aiman's Fashion. Premium bridal wear, elegant evening gowns, and bespoke menswear crafted with timeless artistry.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "AIMAN",
  heroImage: "/hero-model.png",
  heroImageAlt: "Elegant model wearing Aiman's Fashion burgundy velvet gown with gold embroidery",
  overlayText: "Crafted by Aiman's Fashion",
  brandName: "Aiman's Fashion",
  navLinks: [
    { label: "Collections", href: "#collections" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Where Tradition",
  titleLine2: "Meets Elegance",
  description: "At Aiman's Fashion, we celebrate the rich heritage of South Asian craftsmanship while embracing contemporary design. Each piece is a masterpiece, meticulously crafted with the finest fabrics and adorned with intricate embroidery that tells a story of timeless beauty.",
  portfolioImages: [
    { src: "/portfolio-1.jpg", alt: "Champagne gold silk saree with intricate embroidery" },
    { src: "/portfolio-2.jpg", alt: "Groom in tailored black tuxedo with gold boutonniere" },
    { src: "/portfolio-3.jpg", alt: "Bridal lehenga flat lay with jewelry accessories" },
    { src: "/portfolio-4.jpg", alt: "Emerald green anarkali gown with gold zari work" },
    { src: "/portfolio-5.jpg", alt: "Groom in cream sherwani with gold embroidery" },
  ],
  accentText: "Curated Collections - Est. 2015",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Collections",
  titleRegular: "Signature",
  titleItalic: "Collections",
  viewAllText: "View All Collections",
  viewAllHref: "#collections",
  viewProjectText: "Explore Collection",
  projects: [
    {
      id: 1,
      title: "Royal Bridal",
      category: "Bridal Wear",
      year: "2024",
      image: "/collection-1.jpg",
      description: "Opulent bridal ensembles featuring intricate zardozi work, Swarovski crystals, and the finest silk fabrics for your special day.",
    },
    {
      id: 2,
      title: "Midnight Glamour",
      category: "Evening Wear",
      year: "2024",
      image: "/collection-2.jpg",
      description: "Sophisticated evening gowns that blend Western silhouettes with Eastern embellishments for the modern woman.",
    },
    {
      id: 3,
      title: "Regal Groom",
      category: "Menswear",
      year: "2024",
      image: "/collection-3.jpg",
      description: "Distinguished sherwanis and bandhgalas crafted from premium velvet and silk, perfect for the modern groom.",
    },
    {
      id: 4,
      title: "Blush & Gold",
      category: "Fusion Wear",
      year: "2024",
      image: "/collection-4.jpg",
      description: "Contemporary fusion pieces that seamlessly blend traditional craftsmanship with modern aesthetics.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What We Offer",
  titleLine1: "Bespoke",
  titleLine2Italic: "Services",
  description: "From custom bridal designs to personal styling consultations, we offer a range of premium services to make your fashion journey extraordinary.",
  services: [
    {
      iconName: "Sparkles",
      title: "Custom Bridal Design",
      description: "Work directly with our master designers to create your dream bridal ensemble, from initial sketch to final fitting.",
    },
    {
      iconName: "Diamond",
      title: "Premium Alterations",
      description: "Expert tailoring services to ensure every garment fits you perfectly, with attention to every detail.",
    },
    {
      iconName: "Users",
      title: "Personal Styling",
      description: "One-on-one styling sessions with our fashion experts to curate looks for any occasion.",
    },
    {
      iconName: "Camera",
      title: "Wardrobe Consultation",
      description: "Complete wardrobe planning services for weddings, events, and seasonal updates.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Why Choose Us",
  titleRegular: "The Aiman's",
  titleItalic: "Difference",
  statsLabel: "By The Numbers",
  stats: [
    { value: 9, suffix: "+", label: "Years of Excellence" },
    { value: 5000, suffix: "+", label: "Happy Clients" },
    { value: 50, suffix: "+", label: "Master Artisans" },
    { value: 100, suffix: "%", label: "Handcrafted" },
  ],
  featureCards: [
    {
      image: "/feature-1.jpg",
      imageAlt: "Fashion designer working in luxury atelier",
      title: "Master Craftsmanship",
      description: "Our atelier brings together master artisans with decades of experience in traditional embroidery techniques.",
    },
    {
      image: "/feature-2.jpg",
      imageAlt: "Intricate gold embroidery work",
      title: "Heritage Techniques",
      description: "We preserve ancient embroidery methods like zardozi, gota patti, and aari work in every creation.",
    },
  ],
  wideImage: "/feature-wide.jpg",
  wideImageAlt: "Luxury fashion boutique interior",
  wideTitle: "Experience Luxury",
  wideDescription: "Visit our flagship boutique for an immersive journey into the world of haute couture South Asian fashion.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Client Stories",
  titleRegular: "Words of",
  titleItalic: "Appreciation",
  testimonials: [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Bride",
      image: "/avatar-1.jpg",
      quote: "Aiman's Fashion made my wedding day truly magical. My bridal lehenga was beyond anything I could have imagined. The attention to detail and the quality of craftsmanship was exceptional.",
    },
    {
      id: 2,
      name: "Omar Khan",
      role: "Groom",
      image: "/avatar-2.jpg",
      quote: "The team at Aiman's understood exactly what I wanted for my big day. My sherwani was perfectly tailored and the embroidery work was absolutely stunning. Highly recommended!",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Fashion Enthusiast",
      image: "/avatar-3.jpg",
      quote: "I've been a loyal customer for years. Every piece I've purchased has been a work of art. Their fusion collection perfectly blends tradition with modern style.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked",
  ctaText: "Still have questions?",
  ctaButtonText: "Get in Touch",
  ctaHref: "#contact",
  faqs: [
    {
      id: "1",
      question: "How far in advance should I order my bridal outfit?",
      answer: "We recommend booking your bridal consultation at least 4-6 months before your wedding date. Custom bridal ensembles require time for design, craftsmanship, and multiple fittings to ensure perfection.",
    },
    {
      id: "2",
      question: "Do you offer customization services?",
      answer: "Yes, customization is at the heart of what we do. From color modifications to design alterations, our team works closely with you to create a piece that reflects your personal style and vision.",
    },
    {
      id: "3",
      question: "What is your price range?",
      answer: "Our collections range from premium ready-to-wear starting at $500 to bespoke bridal couture. We offer options across various price points while maintaining our commitment to quality and craftsmanship.",
    },
    {
      id: "4",
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. International orders are carefully packaged and shipped via trusted courier services. We also offer virtual consultations for our international clients.",
    },
    {
      id: "5",
      question: "Can I book a private appointment?",
      answer: "Absolutely! We offer private appointments at our flagship boutique where you can explore our collections with personalized attention from our styling team. Bookings can be made through our website or by calling us directly.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "AIMAN",
  contactLabel: "Get in Touch",
  email: "shadikaiman2@gmail.com",
  locationText: "123 Fashion Avenue\nNew York, NY 10001",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Collections", href: "#collections" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  socialLabel: "Follow Us",
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:hello@aimansfashion.com", label: "Email" },
  ],
  tagline: "Crafting elegance since 2015\nWhere tradition meets contemporary luxury",
  copyright: "© 2024 Aiman's Fashion. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
