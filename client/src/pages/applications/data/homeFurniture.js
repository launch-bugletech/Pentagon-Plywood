const image = {
  url: "https://images.unsplash.com/photo-1774716925810-e923c8206ed5?auto=format&fit=crop&w=1800&q=80",
  source: "https://unsplash.com/photos/NqIScyTd3NQ",
  alt: "Modern living room with television unit, shelves and furniture",
  label: "One room. Different furniture. Different material decisions.",
};

export default {
  path: "/applications/home-furniture",
  title: "Home Furniture",
  eyebrow: "Materials for Everyday Living",
  heroTitle: "Furniture Is More Than the Finish You See.",
  intro: ["Beds, TV units, tables, cabinets and shelves may share one home, but they do not necessarily need the same board, thickness or surface.", "Start with the component, then choose around its load, span, hardware, room conditions and finish."],
  metaDescription: "Explore plywood, blockboard, MDF and decorative surfaces for beds, TV units, tables, cabinets, shelving and home furniture.",
  heroImage: image,
  primaryCta: { label: "Find Materials for Furniture", href: "/contact-us?type=product#contact-form" },
  secondaryCta: { label: "Share Furniture Requirement", href: "/contact-us?type=project#contact-form" },
  quickGuide: { title: "Start with what the panel must do.", copy: "Load, span, fixing, moisture and finish should be considered together.", items: ["Furniture component", "Expected load", "Unsupported span", "Hardware fixing", "Room condition", "Final surface"], materials: ["Plywood", "Blockboard", "MDF", "Laminates", "Teak Ply"] },
  sections: [
    { type: "cards", id: "furniture-components", eyebrow: "Component Before Product", title: "A Bed, Shelf and TV Unit Do Different Jobs.", copy: "Break the furniture into the role each component performs before selecting one material for everything.", items: [
      { title: "Structural Components", copy: "Beds, cabinet bodies and frames need dependable construction, joinery and fixing." },
      { title: "Long Panels", copy: "Shelves and tabletops need attention to span, stiffness, supports and expected load." },
      { title: "Shutters & Drawers", copy: "Moving components need material, dimensions and hardware to work as one system." },
      { title: "Decorative Fronts", copy: "Routing, paint, veneer and laminate each create different substrate requirements." },
      { title: "Back Panels", copy: "Backs may have a different structural, thickness and wall-condition role." },
      { title: "Visible Surfaces", copy: "The finish should suit the interior, cleaning routine and expected maintenance." },
    ]},
    { type: "feature", id: "inside-out", eyebrow: "Design from the Inside Out", title: "Start With Performance. Finish With Appearance.", copy: "The same furniture can use more than one material where each component has a different job.", image, reverse: true, points: ["Define what the component must carry", "Check panel size and unsupported span", "Plan hinges, channels and screw fixing", "Choose the surface only after the core requirement"], callout: "Structure underneath. Interior character on the surface." },
    { type: "matrix", id: "material-guide", eyebrow: "Material Starting Guide", title: "Match the Material to the Furniture Component.", columns: ["Material", "Possible applications", "Confirm before selection"], rows: [
      ["Plywood", "Carcasses, beds, cabinets, shelves", "Grade, thickness, span and fixing"],
      ["Blockboard", "Selected long panels and shelves", "Core, support and hardware"],
      ["MDF", "Routed fronts and painted furniture", "Routing depth, environment and fixing"],
      ["Laminates", "Finished visible and internal surfaces", "Substrate, balancing and edges"],
      ["Teak Ply / Veneer", "Premium visible furniture surfaces", "Natural variation and finishing"],
    ], note: "This is a starting guide. Confirm the exact grade, dimensions, construction and installation conditions." },
    { type: "process", id: "planning-process", eyebrow: "From Material to Furniture", title: "Plan Before the First Sheet Is Cut.", steps: [
      { title: "Define the piece", copy: "Identify the furniture type and how it will be used." },
      { title: "Break into components", copy: "Separate carcass, shelves, shutters, backs and decorative fronts." },
      { title: "Select the system", copy: "Choose material, thickness, surface, edges and hardware together." },
      { title: "Share the requirement", copy: "Send dimensions, quantity, drawing and delivery location." },
    ]},
  ],
  faqs: [["Which materials can be considered for home furniture?", "Plywood, Blockboard, MDF and compatible decorative surfaces are practical starting families. Final suitability depends on the component."], ["Can I use one board for the whole furniture unit?", "Not always. Carcasses, shelves, shutters, backs and routed fronts may need different materials or thicknesses."], ["Does thicker always mean better?", "No. Material type, span, support and complete construction matter alongside thickness."], ["Can I send a furniture drawing?", "Yes. A drawing, cut list or reference image is the best starting point for a material discussion."], ["Do I need Marine Plywood for every furniture item?", "No. Select the grade around actual moisture exposure and application requirements." ]],
  finalCta: { eyebrow: "Planning Home Furniture?", title: "Start With the Piece, Not the Product Name.", copy: "Share the component, dimensions, finish, quantity and delivery location.", label: "Share My Requirement", href: "/contact-us?type=project#contact-form" },
};
