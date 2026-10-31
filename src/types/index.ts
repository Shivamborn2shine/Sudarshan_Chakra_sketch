export type ProductStatus = 'active' | 'in-development' | 'coming-soon';

export interface ProductFeature {
  title: string;
  description: string;
  sketchIcon?: string;
}

export interface Product {
  slug: string;
  name: string;
  status: ProductStatus;
  statusLabel: string;
  tagline: string;
  descriptor: string;
  summary: string;
  detailedDescription: string;
  logoPath: string;
  heroBadgePath?: string;
  galleryPaths: string[];
  features: ProductFeature[];
  deployments?: string[];
  instagramUrl: string;
  primaryAction: {
    label: string;
    href: string;
  };
  accentColor: string;
}

export interface Work {
  slug: string;
  title: string;
  clientOrProduct: string;
  category: string;
  location?: string;
  challenge: string;
  solution: string;
  execution: string[];
  deliverables: string[];
  approvedMedia: {
    src: string;
    caption: string;
    annotation?: string;
  }[];
  actualResults?: string[];
  permissionStatus: string;
  relatedProductSlug?: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  status: 'available' | 'bespoke' | 'coming-soon';
  statusLabel: string;
  problem: string;
  approach: string;
  outcomes: string[];
  description: string;
  deliverables: string[];
  ctaLabel: string;
}

export interface SiteSettings {
  brandName: string;
  tagline: string; // WE BUILD THE WAY.
  concept: string; // Every solution begins as a sketch. We bring it to life.
  headline: string; // EVERY BIG IDEA STARTS SMALL.
  supportCopy: string;
  contactEmail: string;
  phone: string;
  location: string;
  socials: {
    platform: string;
    handle: string;
    url: string;
  }[];
}

export interface ProblemCard {
  id: string;
  question: string;
  subtext: string;
  answer: string;
  sketchArrowNote: string;
  resolvedTo: string;
}

