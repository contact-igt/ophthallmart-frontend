export const CATEGORIES = [
  { id: 1, name: "Diagnostic / Surgical", icon: "Activity", desc: "Slit lamps, OCT, Fundus Cameras" },
  { id: 2, name: "Consumables / Disposables", icon: "Stethoscope", desc: "IOLs, Fluids, Blades, Sutures" },
  { id: 3, name: "Pre-Owned Equipments", icon: "Settings", desc: "Certified refurbished devices" },
  { id: 4, name: "Optical Products", icon: "Eye", desc: "Frames, Lenses, Displays" },
  { id: 5, name: "Hospital Establishment", icon: "Briefcase", desc: "Furniture, OT Lights, Sterilizers" },
  { id: 6, name: "General Products", icon: "CheckCircle", desc: "Accessories & Others" },
];

export const PRODUCTS = [
  // Best Selling
  { id: 101, name: "Oertli CR3 Phaco Machine", category: "Surgical", price: "Enquire", rating: 5, image: "/assets/selling_product_img1.jpg", tag: "Best Seller", section: "bestselling" },
  { id: 102, name: "Ophthall ClearView Imaging", category: "Diagnostic", price: "Enquire", rating: 4.5, image: "/assets/selling_product_img2.jpg", tag: "Trending", section: "bestselling" },
  { id: 103, name: "Slit Lamp 3000 LED", category: "Diagnostic", price: "Enquire", rating: 5, image: "/assets/selling_product_img3.jpg", tag: "New", section: "bestselling" },
  { id: 104, name: "Applanation Tonometer", category: "Diagnostic", price: "Enquire", rating: 4, image: "/assets/shop_img1.png", tag: null, section: "bestselling" },
  // Featured
  { id: 201, name: "Zeiss Humphrey Field Analyzer", category: "Diagnostic", price: "Enquire", rating: 5, image: "/assets/featured_product_img1.jpg", tag: "Featured", section: "featured" },
  { id: 202, name: "Leica Operating Microscope", category: "Surgical", price: "Enquire", rating: 5, image: "/assets/featured_product_img1.jpg", tag: null, section: "featured" },
  { id: 203, name: "Auto Refractometer Keratometer", category: "Diagnostic", price: "Enquire", rating: 4.5, image: "/assets/featured_product_img1.jpg", tag: null, section: "featured" },
  { id: 204, name: "A-Scan Biometer", category: "Diagnostic", price: "Enquire", rating: 4, image: "/assets/featured_product_img1.jpg", tag: null, section: "featured" },
  // Trending
  { id: 301, name: "Digital Acuity Chart", category: "Optical", price: "Enquire", rating: 4, image: "/assets/featured_product_img1.jpg", tag: "Hot", section: "trending" },
  { id: 302, name: "Portable Fundus Camera", category: "Diagnostic", price: "Enquire", rating: 4.5, image: "/assets/featured_product_img1.jpg", tag: null, section: "trending" },
  { id: 303, name: "Ophthalmic Chair Unit", category: "Hospital Setup", price: "Enquire", rating: 5, image: "/assets/featured_product_img1.jpg", tag: null, section: "trending" },
  { id: 304, name: "Trial Lens Set", category: "Optical", price: "Enquire", rating: 5, image: "/assets/featured_product_img1.jpg", tag: null, section: "trending" },
];

export const HERO_SLIDES = [
  {
    title: "IMAGING",
    subtitle: "SYSTEMS",
    desc: "Convert your existing slit lamp into a High-Resolution digital documentation system.",
    image: "/assets/Imaging_system_1.png",
    subHead: "Advanced Ophthalmic"
  },
  {
    title: "SURGICAL",
    subtitle: "PRECISION",
    desc: "State-of-the-art Phaco machines and Microscopes for superior surgical outcomes.",
    image: "/assets/clear_view_1.jpeg",
    subHead: "Next Gen"
  },
  {
    title: "PRE-OWNED",
    subtitle: "VALUE",
    desc: "Certified refurbished equipment at unbeatable prices with warranty.",
    image: "/assets/clear_view_1.jpeg",
    subHead: "Guaranteed"
  }
];
