// Brand details data for modal popups in BrandsPage
// You can customize details for each specific brand by adding an entry in BRAND_DETAILS_MAP.

export const DEFAULT_BRAND_DETAIL = {
  categorySubtitle: "PENTAGON PLYWOOD",
  title: "Marine & BWP Plywood",
  description:
    "Engineered for moisture-prone environments, Pentagon Marine & BWP plywood offers superior durability, strength and bonding performance for long-lasting applications.",
  highlights: [
    "IS 710 Certified",
    "Boiling Water Proof",
    "Termite Resistant",
    "High Load Bearing Strength",
  ],
  bestSuitedFor: [
    { iconName: "Utensils", label: "Kitchens" },
    { iconName: "Droplets", label: "Bathrooms" },
    { iconName: "Sun", label: "Exterior Furniture" },
    { iconName: "Anchor", label: "Marine Applications" },
  ],
  availableGrades: [
    "BWR Grade",
    "BWP Grade",
    "Marine Grade",
    "Fire Retardant",
  ],
  availableThickness: [
    "6mm",
    "9mm",
    "12mm",
    "15mm",
    "18mm",
    "19mm",
    "25mm",
  ],
  thicknessNote: "Other thicknesses available on request.",
};

// Map specific brand names to custom data if needed in future.
// If a brand is not listed here, DEFAULT_BRAND_DETAIL will be used.
export const BRAND_DETAILS_MAP = {
  // Example for future customization:
  // "SAFARI": { ...DEFAULT_BRAND_DETAIL, title: "Safari Commercial Plywood" },
};

export function getBrandDetail(brandName) {
  if (!brandName) return DEFAULT_BRAND_DETAIL;
  return BRAND_DETAILS_MAP[brandName] || {
    ...DEFAULT_BRAND_DETAIL,
    categorySubtitle: `${brandName} · PENTAGON`,
  };
}
