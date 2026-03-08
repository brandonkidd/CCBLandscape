// CCB Landscape Services - Data Engine
// This file powers all 96 programmatic SEO pages

export const company = {
  name: "CCB Landscape Services",
  legalName: "CCB Landscape Services, Inc.",
  phone: "(888) 416-0840",
  email: "contact@ccblandscape.com",
  address: {
    street: "17071 Imperial Highway, Unit A4",
    city: "Yorba Linda",
    state: "CA",
    zip: "92886"
  },
  founded: 2012,
  licenses: ["#981154", "#1087655", "#771033"],
  insurance: "$1,000,000",
  bbbRating: "A+",
  buildZoomScore: 99,
  owner: "Christian Burke",
  serviceArea: "Orange County and Inland Empire",
  tagline: "Orange County's owner-operated commercial landscape partner"
};

export const services = [
  {
    slug: "commercial-landscape-maintenance",
    name: "Commercial Landscape Maintenance",
    shortName: "Landscape Maintenance",
    icon: "🌳",
    heroDescription: "Professional landscape maintenance for office parks, industrial facilities, and commercial properties throughout Orange County.",
    description: "Comprehensive weekly maintenance including mowing, trimming, pruning, debris removal, and professional chemical application with our Qualified Applicator Licenses. Owner-operated attention that corporate chains cannot match.",
    features: [
      "Weekly mowing, edging, and blowing",
      "Monthly pruning and bed maintenance",
      "Professional chemical application (licensed)",
      "24-hour emergency response",
      "Flexible service agreements"
    ],
    seoKeywords: [
      "commercial landscape maintenance",
      "commercial landscaping",
      "landscape contractor",
      "commercial property maintenance"
    ]
  },
  {
    slug: "hoa-landscape-maintenance",
    name: "HOA Landscape Maintenance",
    shortName: "HOA Services",
    icon: "🏘️",
    heroDescription: "Dedicated landscape management for homeowners associations with board meeting support, budget planning, and owner-operated responsiveness.",
    description: "Direct board access to owner Christian Burke eliminates the communication frustration HOAs experience with corporate landscape companies. Proactive problem identification, transparent pricing, and consistent crew assignments.",
    features: [
      "Board meeting attendance",
      "Budget planning and transparent pricing",
      "Resident communication support",
      "Seasonal enhancement programs",
      "Emergency response protocols"
    ],
    seoKeywords: [
      "HOA landscape maintenance",
      "HOA landscaping",
      "homeowners association landscaping",
      "HOA landscape contractor"
    ]
  },
  {
    slug: "water-management-irrigation",
    name: "Water Management & Irrigation",
    shortName: "Irrigation",
    icon: "💧",
    heroDescription: "Expert irrigation system design, installation, repair, and water efficiency optimization with AB 1572 compliance assistance and water district rebate management.",
    description: "Over $1.5 million in water district rebates secured for Orange County clients since 2012. Smart controller retrofits, AB 1572 compliance planning, and comprehensive irrigation audits reduce water costs 70-90%.",
    features: [
      "Smart controller retrofits",
      "AB 1572 turf ban compliance",
      "Water district rebate management (98% approval rate)",
      "Irrigation system design and installation",
      "24-hour emergency repair"
    ],
    seoKeywords: [
      "irrigation repair",
      "irrigation installation",
      "water management",
      "smart irrigation controllers",
      "AB 1572 compliance"
    ]
  },
  {
    slug: "tree-care-services",
    name: "Tree Care Services",
    shortName: "Tree Service",
    icon: "🌲",
    heroDescription: "Professional tree trimming, pruning, removal, and 24-hour emergency storm response through our dedicated tree service division.",
    description: "CCB Tree Services LLC (License #1087655) provides comprehensive tree care from the same trusted team managing your landscape maintenance. 24-hour emergency response for storm damage and fallen trees.",
    features: [
      "Tree trimming and pruning",
      "Tree removal and stump grinding",
      "24-hour emergency storm response",
      "Fire fuel modification clearing",
      "Health assessments"
    ],
    seoKeywords: [
      "tree service",
      "tree trimming",
      "tree removal",
      "emergency tree service",
      "tree pruning"
    ]
  },
  {
    slug: "landscape-enhancements",
    name: "Landscape Enhancements & Renovation",
    shortName: "Renovations",
    icon: "✨",
    heroDescription: "Transform dated commercial landscapes into modern, water-efficient properties that enhance tenant satisfaction and property values.",
    description: "Photo mapping and digital enhancement mock-ups allow property managers to visualize transformations before committing renovation budgets. Phased implementation spreads costs across multiple budget cycles.",
    features: [
      "Complete landscape renovation",
      "Plant material upgrades",
      "Photo mapping and digital mock-ups",
      "Irrigation system modernization",
      "Slope renovation and erosion control"
    ],
    seoKeywords: [
      "landscape renovation",
      "landscape enhancement",
      "commercial landscape design",
      "landscape upgrade"
    ]
  },
  {
    slug: "drought-tolerant-conversions",
    name: "Drought-Tolerant Conversions",
    shortName: "Turf Conversion",
    icon: "🏜️",
    heroDescription: "AB 1572 compliance specialists helping Orange County commercial properties convert decorative turf to beautiful, water-efficient landscapes.",
    description: "Over 150 commercial turf conversions completed with 98% rebate approval rate and average $10,000-$15,000 rebates secured per project. Complete rebate application management from pre-approval through final payment.",
    features: [
      "AB 1572 compliance planning",
      "Water district rebate management",
      "Professional drought-tolerant design",
      "12-month establishment warranty",
      "70-90% water cost reduction"
    ],
    seoKeywords: [
      "drought tolerant landscaping",
      "turf removal",
      "AB 1572 compliance",
      "water efficient landscaping",
      "turf conversion"
    ]
  },
  {
    slug: "fuel-modification-weed-abatement",
    name: "Fuel Modification & Weed Abatement",
    shortName: "Fire Safety",
    icon: "🔥",
    heroDescription: "Wildfire risk reduction and regulatory compliance for hillside properties in high-fire-hazard zones throughout Orange County.",
    description: "Orange County Fire Authority compliance specialists for Zone 1 and Zone 2 defensible space requirements. Annual weed abatement and brush clearing prevent citations while protecting properties from wildfire exposure.",
    features: [
      "Zone 1 and Zone 2 clearing",
      "Annual weed abatement",
      "Fire Authority compliance documentation",
      "Slope clearing and erosion control",
      "Emergency response"
    ],
    seoKeywords: [
      "fuel modification",
      "weed abatement",
      "defensible space",
      "fire clearing",
      "brush removal"
    ]
  },
  {
    slug: "landscape-lighting",
    name: "Commercial Landscape Lighting",
    shortName: "Lighting",
    icon: "💡",
    heroDescription: "Security lighting, aesthetic enhancement, and energy-efficient LED systems for Orange County commercial properties.",
    description: "Modern LED technology delivers superior illumination while reducing energy consumption 75-90% compared to traditional systems. Strategic lighting balances security requirements with aesthetic enhancement.",
    features: [
      "Security and safety lighting",
      "Energy-efficient LED systems",
      "Smart controls and automation",
      "Architectural feature lighting",
      "75-90% energy savings"
    ],
    seoKeywords: [
      "landscape lighting",
      "commercial lighting",
      "LED landscape lights",
      "security lighting",
      "outdoor lighting"
    ]
  }
];

export const cities = [
  // Orange County - Primary Service Area
  {
    slug: "yorba-linda",
    name: "Yorba Linda",
    county: "Orange County",
    region: "North Orange County",
    zip: "92886",
    description: "CCB's headquarters location since 2012. Same-day emergency response and deep local knowledge of Yorba Linda's hillside properties, water districts, and soil conditions.",
    landmarks: "Nixon Presidential Library, Yorba Linda Town Center",
    propertyTypes: "Hillside HOAs, commercial properties, office parks",
    waterDistrict: "Yorba Linda Water District"
  },
  {
    slug: "anaheim-hills",
    name: "Anaheim Hills",
    county: "Orange County",
    region: "North Orange County",
    zip: "92807",
    description: "Extensive hillside property experience with slope management, fuel modification requirements, and the specific landscape challenges Anaheim Hills commercial properties face.",
    landmarks: "The Shoppes at Anaheim Hills, Oak Canyon Nature Center",
    propertyTypes: "Master-planned communities, retail centers, hillside HOAs",
    waterDistrict: "Anaheim Public Utilities"
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    county: "Orange County",
    region: "North Orange County",
    zip: "92832",
    description: "Commercial landscape maintenance for Fullerton business parks, retail centers, and industrial facilities along the 91 corridor with reliable service property managers trust.",
    landmarks: "Fullerton Downtown Historic District, Cal State Fullerton",
    propertyTypes: "Business parks, industrial facilities, retail centers",
    waterDistrict: "Fullerton Water System"
  },
  {
    slug: "brea",
    name: "Brea",
    county: "Orange County",
    region: "North Orange County",
    zip: "92821",
    description: "Professional landscape care for Brea's commercial corridor along Imperial Highway and throughout the city with consistent quality property managers depend on.",
    landmarks: "Brea Mall, Downtown Brea",
    propertyTypes: "Retail properties, office buildings, commercial developments",
    waterDistrict: "Brea Water Division"
  },
  {
    slug: "placentia",
    name: "Placentia",
    county: "Orange County",
    region: "North Orange County",
    zip: "92870",
    description: "Comprehensive commercial landscape services for Placentia properties requiring experienced local contractors with proven reliability.",
    landmarks: "Tri-City Park, Old Town Placentia",
    propertyTypes: "Commercial properties, HOAs, retail centers",
    waterDistrict: "Placentia Water System"
  },
  {
    slug: "villa-park",
    name: "Villa Park",
    county: "Orange County",
    region: "North Orange County",
    zip: "92861",
    description: "Boutique landscape services for Villa Park's unique mix of commercial and high-end residential properties requiring premium attention.",
    landmarks: "Villa Park Orchards Association",
    propertyTypes: "High-end commercial, small office buildings, professional services",
    waterDistrict: "Villa Park Water Services"
  },
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    region: "Central Orange County",
    zip: "92866",
    description: "Fast response commercial landscape maintenance throughout the City of Orange with rapid service from our nearby Yorba Linda headquarters.",
    landmarks: "Old Towne Orange, Chapman University",
    propertyTypes: "Historic commercial, business districts, office properties",
    waterDistrict: "City of Orange Water Division"
  },
  {
    slug: "tustin",
    name: "Tustin",
    county: "Orange County",
    region: "Central Orange County",
    zip: "92780",
    description: "Professional commercial landscaping for Tustin business parks and retail properties with responsive service and competitive pricing.",
    landmarks: "Tustin Legacy, The District at Tustin Legacy",
    propertyTypes: "Business parks, retail centers, mixed-use developments",
    waterDistrict: "Irvine Ranch Water District"
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    county: "Orange County",
    region: "Central Orange County",
    zip: "92701",
    description: "Comprehensive landscape services for Santa Ana's diverse commercial properties from downtown offices to industrial facilities.",
    landmarks: "Downtown Santa Ana, South Coast Plaza vicinity",
    propertyTypes: "Office buildings, industrial properties, retail centers",
    waterDistrict: "Santa Ana Water Resources"
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    region: "North Orange County",
    zip: "92805",
    description: "Commercial landscape maintenance for Anaheim's business districts, industrial areas, and commercial developments throughout the city.",
    landmarks: "Anaheim Convention Center, Stadium District",
    propertyTypes: "Industrial facilities, commercial properties, business parks",
    waterDistrict: "Anaheim Public Utilities"
  },
  
  // Inland Empire - Secondary Service Area
  {
    slug: "corona",
    name: "Corona",
    county: "Riverside County",
    region: "Inland Empire",
    zip: "92879",
    description: "Expanding service area covering Corona's growing commercial and industrial properties with the same owner-operated quality as our Orange County clients.",
    landmarks: "Corona Auto Center, Downtown Corona",
    propertyTypes: "Industrial facilities, business parks, retail centers",
    waterDistrict: "Corona Water Utility"
  },
  {
    slug: "chino",
    name: "Chino",
    county: "San Bernardino County",
    region: "Inland Empire",
    zip: "91710",
    description: "Commercial landscape services for Chino's industrial corridor and business parks with reliable maintenance property managers trust.",
    landmarks: "Chino Commercial District, Chino Airport",
    propertyTypes: "Industrial parks, warehouses, commercial developments",
    waterDistrict: "City of Chino Water Production Department"
  },
  {
    slug: "chino-hills",
    name: "Chino Hills",
    county: "San Bernardino County",
    region: "Inland Empire",
    zip: "91709",
    description: "Professional services for Chino Hills commercial properties and HOA communities requiring high-quality landscape management.",
    landmarks: "The Shoppes at Chino Hills, Chino Hills State Park",
    propertyTypes: "Retail centers, HOA communities, office parks",
    waterDistrict: "Chino Hills Water District"
  },
  {
    slug: "ontario",
    name: "Ontario",
    county: "San Bernardino County",
    region: "Inland Empire",
    zip: "91764",
    description: "Comprehensive commercial landscaping for Ontario's extensive business parks and industrial facilities throughout the region.",
    landmarks: "Ontario Mills, Ontario International Airport",
    propertyTypes: "Industrial facilities, business parks, retail centers",
    waterDistrict: "City of Ontario Municipal Utilities Company"
  },
  {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    county: "San Bernardino County",
    region: "Inland Empire",
    zip: "91730",
    description: "Professional landscape maintenance for Rancho Cucamonga's commercial developments and business districts with responsive service.",
    landmarks: "Victoria Gardens, Rancho Cucamonga Epicenter",
    propertyTypes: "Retail centers, business parks, commercial developments",
    waterDistrict: "Cucamonga Valley Water District"
  },
  {
    slug: "riverside",
    name: "Riverside",
    county: "Riverside County",
    region: "Inland Empire",
    zip: "92501",
    description: "Expanding services to Riverside's commercial properties with owner-operated attention and professional execution.",
    landmarks: "Downtown Riverside, UCR",
    propertyTypes: "Commercial properties, office buildings, retail centers",
    waterDistrict: "Riverside Public Utilities"
  },
  {
    slug: "eastvale",
    name: "Eastvale",
    county: "Riverside County",
    region: "Inland Empire",
    zip: "92880",
    description: "Professional landscape services for Eastvale's growing commercial corridor and business developments.",
    landmarks: "Eastvale Gateway, Hamner Avenue Commercial Corridor",
    propertyTypes: "Commercial developments, retail centers, business parks",
    waterDistrict: "Eastvale Water District"
  },
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    region: "South Orange County",
    zip: "92618",
    description: "Professional commercial landscaping for Irvine's extensive business parks and master-planned developments with premium service standards.",
    landmarks: "Irvine Spectrum, UCI",
    propertyTypes: "Business parks, office complexes, master-planned communities",
    waterDistrict: "Irvine Ranch Water District"
  }
];

// Helper function to get nearby cities for internal linking
export function getNearbyCities(currentCitySlug, limit = 3) {
  const currentCity = cities.find(c => c.slug === currentCitySlug);
  if (!currentCity) return [];
  
  // Find cities in the same region
  return cities
    .filter(c => c.slug !== currentCitySlug && c.region === currentCity.region)
    .slice(0, limit);
}

// Helper function to generate page metadata
export function generateServiceCityMeta(service, city) {
  return {
    title: `${service.name} ${city.name} CA | ${company.name}`,
    description: `Professional ${service.shortName.toLowerCase()} for commercial properties in ${city.name}, ${city.county}. ${service.heroDescription.substring(0, 120)}...`,
    keywords: service.seoKeywords.map(k => `${k} ${city.name}`).join(', ')
  };
}
