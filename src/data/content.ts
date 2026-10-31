import { Product, Work, Service, SiteSettings, ProblemCard } from "@/types";

export const siteSettings: SiteSettings = {
  brandName: "BLACKTHRONE",
  tagline: "WE BUILD THE WAY.",
  concept: "Every solution begins as a sketch. We bring it to life.",
  headline: "EVERY BIG IDEA STARTS SMALL.",
  supportCopy:
    "From a rough thought on paper to technology people actually use. We sketch, experiment, design, and build solutions that help businesses move forward.",
  contactEmail: "hello@blackthrone.tech",
  phone: "+91 98450 29100",
  location: "Indiranagar, Bengaluru · New Delhi · Global",
  socials: [
    {
      platform: "OneScan360 Instagram",
      handle: "@onescan360",
      url: "https://www.instagram.com/onescan360",
    },
    {
      platform: "Loopa Instagram",
      handle: "@loopacards",
      url: "https://www.instagram.com/loopacards",
    },
  ],
};

export const problemCards: ProblemCard[] = [
  {
    id: "01",
    question: "People visit. Do they return?",
    subtext: "Retention Collapse",
    answer:
      "Traditional stamp cards vanish into wallets, and app-download loyalty systems suffer a 90% drop-off. Customers need zero-download, phone-number-based recognition that rewards them in 3 seconds at the counter.",
    sketchArrowNote: "Loopa solves this ↘",
    resolvedTo: "Loopa Loyalty & Retention",
  },
  {
    id: "02",
    question: "Too many disconnected tools?",
    subtext: "Operational Bottlenecks",
    answer:
      "When ordering tablets, kitchen printers, inventory spreadsheets, and delivery portals don't talk to each other, orders stall and margins erode. We build single-surface orchestration that connects counters straight to prep lines.",
    sketchArrowNote: "Intelligent Operations ↘",
    resolvedTo: "Unified Operations Hub",
  },
  {
    id: "03",
    question: "Great service. Hard to discover?",
    subtext: "Discovery Friction",
    answer:
      "Guests rave in person, but only a tiny fraction take out their phone to search your Google Maps page. A single architectural QR stand guides them into a frictionless, one-tap review and profile flow before they walk out.",
    sketchArrowNote: "OneScan360 deployed ↘",
    resolvedTo: "OneScan360 Discovery Engine",
  },
  {
    id: "04",
    question: "An idea stuck in your notebook?",
    subtext: "Execution Gap",
    answer:
      "Great business ideas often linger as scribbles on napkins because bridging the gap to production software seems intimidating. We take rough sketches, stress-test them, and turn them into scalable, usable digital products.",
    sketchArrowNote: "We build the way ↘",
    resolvedTo: "End-to-End Product Engineering",
  },
];

export const products: Product[] = [
  {
    slug: "onescan360",
    name: "OneScan360",
    status: "active",
    statusLabel: "Active Solution · Verified Merchant Deployment",
    descriptor: "Scan. Connect. Grow.",
    tagline: "One QR. Frictionless Business Discovery & Direct Customer Action.",
    summary:
      "A branded, physical-to-digital customer hub connecting walk-in visitors instantly to merchant profiles, location routes, digital menus, and a transparent Google review workflow.",
    detailedDescription:
      "OneScan360 eliminates the clutter of multiple QR codes taped across merchant counters. With a single laser-etched physical touchpoint, guests access instant directions, contact channels, catalogs, social links, and an assisted workflow to submit authentic Google reviews directly to the merchant's verified listing. Zero app download required, 0.2s mobile load time, and live updates without reprinting hardware.",
    logoPath: "/assets/products/onescan-logo.jpg",
    heroBadgePath: "/assets/wireless/google-review-badge.png",
    galleryPaths: [
      "/assets/scoop-n-brew/WhatsApp Image 2026-10-29 at 6.57.51 PM.jpeg",
      "/assets/wireless/exact-top-ui.png",
      "/assets/wireless/mockup_button_crop.png",
      "/assets/scoop-n-brew/scoop-n-brew-header-banner.png",
    ],
    features: [
      {
        title: "Unified Merchant Profile",
        description:
          "Hours, WhatsApp contact, Instagram, WiFi credentials, and location links under one fast mobile touchpoint.",
      },
      {
        title: "Customer-Directed Review Flow",
        description:
          "Assists happy guests with a direct 1-tap route to your verified Google Maps review page while still at the counter.",
      },
      {
        title: "Architectural Physical Standees",
        description:
          "Precision acrylic and wooden stands crafted to endure high-volume retail traffic with instant optical scanning.",
      },
      {
        title: "Zero-Lag Dynamic Updates",
        description:
          "Update menu items, holiday timings, and contact numbers remotely in real time without reprinting physical collateral.",
      },
    ],
    deployments: [
      "Scoop n Brew Gourmet Gelato & Coffee",
      "Bluedoor Cafe and Bakes",
      "Wireless Retail Tech & Lifestyle",
    ],
    instagramUrl: "https://www.instagram.com/onescan360",
    primaryAction: {
      label: "View OneScan360 Case Study",
      href: "/work/onescan360",
    },
    accentColor: "#06B6D4",
  },
  {
    slug: "loopa",
    name: "Loopa",
    status: "in-development",
    statusLabel: "In Development · Private Alpha Waitlist Open",
    descriptor: "Every visit can start a new loop.",
    tagline: "The Full-Cycle Dining, Loyalty & Merchant Operations Engine.",
    summary:
      "A next-generation QR operating system combining interactive tableside ordering, integrated loyalty earning, real-time merchant kitchen displays, and retention analytics.",
    detailedDescription:
      "Loopa is engineered from the ground up to unify fragmented retail and dining workflows. Guests scan at their table to browse visual menus, customize items, pay instantly, and accumulate tiered cashback rewards using just their phone number. Operators gain a synchronized kitchen display system, live table telemetry, and automated win-back triggers to bring lapsing regulars back.",
    logoPath: "/assets/products/loopa-logo.svg",
    heroBadgePath: "/assets/bluedoor/hero-food-collage.jpg",
    galleryPaths: [
      "/assets/bluedoor/hero-food-collage.jpg",
      "/assets/scoop-n-brew/scoop-n-brew-counter-arches.png",
      "/assets/bluedoor/fresh-bakes-brews-banner.png",
    ],
    features: [
      {
        title: "Contactless Tableside Ordering",
        description:
          "Ultra-fast visual menu with dietary filters, item add-ons, and instant mobile payment without waiting for waitstaff.",
      },
      {
        title: "Zero-Download Loyalty Engine",
        description:
          "No app install needed. Points, badges, and store credit tie directly to customer mobile numbers and redeem seamlessly.",
      },
      {
        title: "Merchant Kitchen Display (KDS)",
        description:
          "Live ticket pacing, table turnaround metrics, and instant menu 86-ing prevent order bottlenecks during rush hours.",
      },
      {
        title: "Automated Re-engagement Triggers",
        description:
          "Identifies lapsing regulars and triggers personalized WhatsApp and SMS milestone perks to drive repeat visits.",
      },
    ],
    deployments: ["Private Alpha Pilot Testing (Target Launch 2027)"],
    instagramUrl: "https://www.instagram.com/loopacards",
    primaryAction: {
      label: "View Loopa Product Story",
      href: "/work/loopa",
    },
    accentColor: "#8B5CF6",
  },
];

export const works: Work[] = [
  {
    slug: "scoop-n-brew",
    title: "Scoop n Brew Gelato & Coffee",
    clientOrProduct: "Scoop n Brew",
    category: "Gourmet Gelato & Craft Roastery",
    location: "High Street Retail",
    challenge:
      "With a rotating seasonal menu of 24 artisanal gelato flavours and pour-over roasts, physical printed menus were perpetually outdated and costly to reprint. Counter queues backed up as customers asked repetitive ingredient questions.",
    solution:
      "Implemented OneScan360 as the primary visual discovery terminal at the order counter. Customers scan upon entering to browse flavor profiles, allergen warnings, and tasting notes on their personal devices while queuing.",
    execution: [
      "Custom high-contrast countertop hardware station engineered for rapid optical scanning",
      "Dynamic cloud menu updating interface allowing instant 86-ing of sold-out batches",
      "Direct integration with Instagram profile for customer photo tagging and Google reviews",
    ],
    deliverables: [
      "Countertop OneScan360 hardware station",
      "Dynamic visual flavor directory & allergen guide",
      "Customer-assisted Google review route",
    ],
    approvedMedia: [
      {
        src: "/assets/scoop-n-brew/WhatsApp Image 2026-10-29 at 6.57.51 PM.jpeg",
        caption: "OneScan360 physical acrylic countertop stand deployed at the Scoop n Brew ordering desk.",
        annotation: "Real Deployment · Zero Clutter",
      },
      {
        src: "/assets/scoop-n-brew/scoop-n-brew-header-banner.png",
        caption: "Branded digital menu header banner accessible immediately upon scanning.",
        annotation: "Sub-Second Load",
      },
      {
        src: "/assets/scoop-n-brew/scoop-n-brew-counter-angle.png",
        caption: "Scoop n Brew cafe seating and customer ordering flow.",
        annotation: "High Street Cafe",
      },
    ],
    actualResults: [
      "Reduced counter queue hesitation time by over 40%",
      "Completely eliminated printed menu reprint expenses",
      "Generated an immediate lift in table review submissions",
    ],
    permissionStatus: "Verified Merchant Deployment",
    relatedProductSlug: "onescan360",
  },
  {
    slug: "wireless",
    title: "Wireless Retail Tech & Lifestyle",
    clientOrProduct: "Wireless",
    category: "Premium Electronics & Support Concierge",
    location: "Urban Retail Arcade",
    challenge:
      "Customers purchasing specialized audio gear and smart devices required immediate post-sale warranty support, spec documentation, and direct technician contact without having to navigate cumbersome automated phone trees.",
    solution:
      "Equipped product packaging and customer receipts with OneScan360 touchpoints linking buyers directly to verified support specialists, official warranty registration, and the store's verified Google Maps review channel.",
    execution: [
      "Compact QR cards packaged with every hardware purchase",
      "One-touch WhatsApp technician chat initiation",
      "Streamlined review prompt sent after successful support resolution",
    ],
    deliverables: [
      "Digital hardware concierge portal",
      "Warranty registration link integration",
      "Customer-assisted Google review pipeline",
    ],
    approvedMedia: [
      {
        src: "/assets/wireless/storefront.jpg",
        caption: "Wireless flagship store facade and primary retail entrance.",
        annotation: "Retail Arcade",
      },
      {
        src: "/assets/wireless/exact-top-ui.png",
        caption: "OneScan360 customer discovery and Google review routing mobile interface.",
        annotation: "1-Tap Review Action",
      },
      {
        src: "/assets/wireless/interior.jpg",
        caption: "Showroom interior showcasing audio accessories and device protection.",
        annotation: "Hardware Hub",
      },
    ],
    actualResults: [
      "Average customer support resolution response dropped to under 4 minutes",
      "Steady influx of authentic 5-star customer reviews on Google Maps",
      "Direct authenticated line between technicians and high-value buyers",
    ],
    permissionStatus: "Verified Merchant Deployment",
    relatedProductSlug: "onescan360",
  },
  {
    slug: "bluedoor-cafe",
    title: "Bluedoor Cafe and Bakes",
    clientOrProduct: "Bluedoor",
    category: "Artisanal Bakery & Specialty Cafe",
    location: "Commercial Hub",
    challenge:
      "Bluedoor experienced heavy daily footfall and glowing verbal compliments, but less than 1% of diners took the effort to search for the business on Google Maps and leave a review. Physical table cards were crowded with multiple conflicting QR codes.",
    solution:
      "Deployed custom BlackThrone OneScan360 architectural stands across all primary dining tables and the cashier counter. Integrated a streamlined, one-tap review workflow that guides satisfied guests directly to the verified Google review dialogue.",
    execution: [
      "Custom architectural table stands matching cafe interior aesthetics",
      "Zero-latency mobile landing page with instant access to bakery specials and contact",
      "Staff onboarding on inviting happy diners to scan the OneScan360 stand",
    ],
    deliverables: [
      "Dual-material physical OneScan360 table stands",
      "Custom mobile web hub with live menu links",
      "Direct Google Business Profile review route",
    ],
    approvedMedia: [
      {
        src: "/assets/bluedoor/blue-door-sign.png",
        caption: "Bluedoor Cafe & Bakery entrance sign and architectural facade.",
        annotation: "Artisanal Cafe",
      },
      {
        src: "/assets/bluedoor/hero-food-collage.jpg",
        caption: "Freshly baked patisserie and specialty brew showcase.",
        annotation: "High-Margin Menu",
      },
    ],
    actualResults: [
      "Measurable 3x increase in weekly Google review capture rate",
      "Eliminated cluttered third-party sticker collateral from dining tables",
      "Faster order decisions during morning coffee rush",
    ],
    permissionStatus: "Verified Merchant Deployment",
    relatedProductSlug: "onescan360",
  },
];

export const services: Service[] = [
  {
    slug: "customer-engagement",
    title: "Customer Engagement & Discovery",
    tagline: "Turn neighborhood footfall into verified brand advocates.",
    status: "available",
    statusLabel: "Available Now",
    problem:
      "Local businesses lose dozens of potential reviews and walk-in engagements every day simply because the bridge between physical presence and digital search is fragmented.",
    approach:
      "We design custom physical-to-digital conversion funnels that capture customers in the moment of delight and route them seamlessly into your Google profile, social channels, and direct contact line.",
    outcomes: [
      "2x to 5x increase in verified Google review capture rate",
      "Unified single QR touchpoint replacing cluttered counter collateral",
      "Direct WhatsApp and call routing with zero intermediate friction",
    ],
    deliverables: [
      "Precision acrylic/wood physical standees",
      "Sub-second mobile discovery landing hub",
      "Direct Google review routing integration",
      "Staff onboarding scripts & guidelines",
    ],
    description:
      "Comprehensive merchant onboarding including physical stand design, dynamic landing hubs, review facilitation, and verified local SEO optimization.",
    ctaLabel: "Deploy Discovery Engine",
  },
  {
    slug: "loyalty-retention",
    title: "Loyalty & Retention Architecture",
    tagline: "Frictionless rewards that customers actually redeem.",
    status: "available",
    statusLabel: "Available Now",
    problem:
      "App-download loyalty systems have a 90% abandonment rate. Customers will not install another bloated app just to get a stamp.",
    approach:
      "We implement zero-friction, phone-number and QR-based retention architectures where rewards accumulate automatically without requiring native app installs.",
    outcomes: [
      "Over 65% repeat customer enrollment at the point of payment",
      "Automated milestone SMS notifications and win-back offers",
      "Actionable customer lifetime value (LTV) cohorts for operators",
    ],
    deliverables: [
      "Browser-native customer digital reward ledger",
      "Cashier point-of-sale recording interface",
      "Automated WhatsApp/SMS milestone perk triggers",
      "Auditable customer redemption ledger",
    ],
    description:
      "Loyalty and retention programs engineered for modern cafes, boutique bakeries, fitness clubs, and lifestyle retailers.",
    ctaLabel: "Explore Retention Systems",
  },
  {
    slug: "intelligent-operations",
    title: "Intelligent Business Automation",
    tagline: "Real-time kitchen, counter, and inventory orchestration.",
    status: "bespoke",
    statusLabel: "Bespoke Consulting & Implementation",
    problem:
      "Paper tickets get lost, third-party delivery tablets charge 30% commissions, and staff are bogged down taking manual orders during peak rushes.",
    approach:
      "We architect lightweight, cloud-synchronized order routing systems that bridge customer mobile devices directly to your preparation line.",
    outcomes: [
      "Zero commission fees on direct dine-in and pickup orders",
      "30% reduction in average table turnaround latency",
      "Instant menu stock synchronization to prevent sold-out order errors",
    ],
    deliverables: [
      "Live Kitchen Display System (KDS) dashboard",
      "Cloud-synced table ordering engine",
      "Real-time item 86-ing & inventory toggles",
      "Staff permission matrix & audit logs",
    ],
    description:
      "Custom operations pipelines and early Loopa enterprise integration for busy hospitality concepts.",
    ctaLabel: "Optimize Operations",
  },
  {
    slug: "digital-flagships",
    title: "Bespoke Digital Products & Flagships",
    tagline: "High-performance websites engineered for conversion.",
    status: "available",
    statusLabel: "Available Now",
    problem:
      "Generic agency templates look forgettable, load sluggishly on mobile networks, and fail to convey the craftsmanship of your brand.",
    approach:
      "We design bespoke web flagships with clean typography, sub-second load times, fluid micro-interactions, and conversion-optimized intake funnels.",
    outcomes: [
      "Core Web Vitals scores in the 95th+ percentile",
      "Distinctive, memorable editorial aesthetic",
      "Fully responsive, accessible design with zero third-party bloat",
    ],
    deliverables: [
      "Production Next.js / TypeScript codebase",
      "Tailored interactive components & brand motion",
      "Headless CMS or typed content architecture",
      "Technical SEO & Open Graph configuration",
    ],
    description:
      "Full-stack web engineering, brand identity translation, and technical SEO architecture.",
    ctaLabel: "Commission a Flagship",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Editorial storytelling, content production & community growth.",
    status: "coming-soon",
    statusLabel: "Coming Soon · Pilot Waitlist",
    problem:
      "High-caliber brands struggle to maintain consistent, visually coherent social presence without consuming founder bandwidth.",
    approach:
      "We are preparing a specialized creative studio wing focused on cinematic short-form video, lifestyle photography, and community engagement for our ecosystem partners.",
    outcomes: [
      "Consistent, bespoke visual aesthetic across reels, stories, and feed",
      "Full content calendar management from shoot to scheduling",
      "Direct synergy with OneScan360 and Loopa customer touchpoints",
    ],
    deliverables: [
      "Monthly on-site content production shoots",
      "Reels, stories, and feed asset calendar",
      "Community comment and DM triage workflow",
    ],
    description:
      "In active preparation. Currently accepting select pilot merchants for early waitlist onboarding.",
    ctaLabel: "Join Pilot Waitlist",
  },
];

