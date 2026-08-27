import { PRODUCT_ROUTES } from '../app/routes.js';

export const manufacturedNavigation = [
  {
    id: 'plywood',
    label: 'Plywood',
    href: PRODUCT_ROUTES.plywood,
    children: [
      ['Plywood Overview', PRODUCT_ROUTES.plywood],
      ['MR Grade Plywood', PRODUCT_ROUTES.mrGradePlywood],
      ['BWP Grade Plywood', PRODUCT_ROUTES.bwpGradePlywood],
      ['Marine Grade Plywood', PRODUCT_ROUTES.marineGradePlywood],
      ['Fire Retardant Plywood', PRODUCT_ROUTES.fireRetardantPlywood],
    ],
  },
  {
    id: 'blockboard',
    label: 'Blockboard',
    href: PRODUCT_ROUTES.blockboard,
    children: [
      ['Blockboard Overview', PRODUCT_ROUTES.blockboard],
      ['MR Grade Blockboard', PRODUCT_ROUTES.mrGradeBlockboard],
      ['BWP Grade Blockboard', PRODUCT_ROUTES.bwpGradeBlockboard],
    ],
  },
  {
    id: 'flush-doors',
    label: 'Flush Doors',
    href: PRODUCT_ROUTES.flushDoors,
    children: [
      ['Flush Doors Overview', PRODUCT_ROUTES.flushDoors],
      ['MR Grade Flush Doors', PRODUCT_ROUTES.mrGradeFlushDoor],
      ['BWP Grade Flush Doors', PRODUCT_ROUTES.bwpGradeFlushDoor],
    ],
  },
  {
    id: 'industrial-chemicals',
    label: 'Industrial Chemicals',
    href: PRODUCT_ROUTES.formaldehyde,
    children: [['Formaldehyde', PRODUCT_ROUTES.formaldehyde]],
  },
];

export const sourcedNavigation = [
  {
    id: 'decorative-materials',
    label: 'Decorative Materials',
    href: PRODUCT_ROUTES.decorativeMaterials,
    children: [
      ['Laminates', PRODUCT_ROUTES.laminates],
      ['Teak Ply', PRODUCT_ROUTES.teakPly],
    ],
  },
  {
    id: 'engineered-boards',
    label: 'Engineered Boards',
    href: PRODUCT_ROUTES.engineeredBoards,
    children: [
      ['Particle Board', PRODUCT_ROUTES.particleBoard],
      ['WPC Board', PRODUCT_ROUTES.wpcBoard],
      ['MDF Board', PRODUCT_ROUTES.mdfBoard],
      ['HDHMR Board', PRODUCT_ROUTES.hdhmrBoard],
    ],
  },
  {
    id: 'laminated-products',
    label: 'Laminated Products',
    href: PRODUCT_ROUTES.laminatedProducts,
    children: [
      ['Laminated Plywood', PRODUCT_ROUTES.laminatedPlywood],
      ['Laminated Blockboard', PRODUCT_ROUTES.laminatedBlockboard],
      ['Laminated Flush Doors', PRODUCT_ROUTES.laminatedFlushDoors],
    ],
  },
];

export const manufacturedCategories = [
  {
    id: 'plywood',
    label: 'Manufactured Wood Panel',
    title: 'Plywood for interiors, moisture-prone conditions and specialised requirements.',
    description: 'Explore Pentagon’s manufactured plywood range according to the installation environment, expected moisture exposure and required performance.',
    products: ['MR Grade Plywood', 'BWP Grade Plywood', 'Marine Grade Plywood', 'Fire Retardant Plywood'],
    applications: ['Home furniture', 'Wardrobes and storage', 'Kitchen cabinetry', 'Office furniture'],
    href: PRODUCT_ROUTES.plywood,
    secondaryHref: `${PRODUCT_ROUTES.plywood}#compare-grades`,
  },
  {
    id: 'blockboard',
    label: 'Manufactured Core Panel',
    title: 'A solid-core panel for doors, shelves and long furniture components.',
    description: 'Pentagon Blockboard is intended for furniture and interior components where panel length, rigidity and practical fabrication are important considerations.',
    products: ['MR Grade Blockboard', 'BWP Grade Blockboard'],
    applications: ['Long shelves', 'Doors and shutters', 'Wardrobes', 'Interior fabrication'],
    href: PRODUCT_ROUTES.blockboard,
    secondaryHref: PRODUCT_ROUTES.mrGradeBlockboard,
  },
  {
    id: 'flush-doors',
    label: 'Manufactured Door Solutions',
    title: 'Strong, clean door foundations for residential and commercial interiors.',
    description: 'Explore Pentagon’s plain flush-door range according to the installation environment and expected moisture conditions.',
    products: ['MR Grade Flush Doors', 'BWP Grade Flush Doors'],
    applications: ['Bedroom doors', 'Office doors', 'Commercial interiors', 'Institutional spaces'],
    href: PRODUCT_ROUTES.flushDoors,
    secondaryHref: '/contact-us?type=product#contact-form',
  },
];

export const sourcedGroups = [
  {
    id: 'decorative',
    title: 'Decorative Materials',
    description: 'Surface-led options for visible furniture, cabinetry, doors and interior applications.',
    products: [
      ['Laminates', 'Decorative surface sheets for cabinetry, doors and wall features.', PRODUCT_ROUTES.laminates],
      ['Teak Ply', 'A natural teak-led appearance for visible furniture and interior surfaces.', PRODUCT_ROUTES.teakPly],
    ],
  },
  {
    id: 'engineered',
    title: 'Engineered Boards',
    description: 'Board choices for modular fabrication, routed designs and moisture-conscious requirements.',
    products: [
      ['Particle Board', 'For modular furniture, shelving and cost-conscious interiors.', PRODUCT_ROUTES.particleBoard],
      ['WPC Board', 'Raw composite board for selected moisture-conscious applications.', PRODUCT_ROUTES.wpcBoard],
      ['MDF Board', 'A smooth fibre board for routed and painted interior work.', PRODUCT_ROUTES.mdfBoard],
      ['HDHMR Board', 'A higher-density option for demanding cabinetry and interiors.', PRODUCT_ROUTES.hdhmrBoard],
    ],
  },
  {
    id: 'laminated',
    title: 'Surface-Finished Panels & Doors',
    description: 'Core boards and doors supplied with decorative laminate surfaces.',
    products: [
      ['Laminated Plywood', 'Plywood with a decorative laminate surface.', PRODUCT_ROUTES.laminatedPlywood],
      ['Laminated Blockboard', 'A finished option for shutters, furniture and long panels.', PRODUCT_ROUTES.laminatedBlockboard],
      ['Laminated Flush Doors', 'Ready-surfaced doors matched to project dimensions.', PRODUCT_ROUTES.laminatedFlushDoors],
    ],
  },
];

export const applicationProducts = [
  ['Home Furniture', 'MR Plywood, Blockboard, MDF, Particle Board, Teak Ply and laminates.', '/applications#home-furniture'],
  ['Modular Kitchens', 'BWP or Marine Plywood, WPC, HDHMR and compatible surfaces.', '/applications#modular-kitchens'],
  ['Wardrobes & Storage', 'MR Plywood, Blockboard, MDF and laminated panels.', '/applications#wardrobes-storage'],
  ['Doors', 'MR or BWP Flush Doors, laminated doors and blockboard solutions.', '/applications#doors-shutters'],
  ['Commercial Interiors', 'Plywood, MDF, HDHMR, Particle Board and finished panels.', '/applications#commercial-interiors'],
  ['Fire-Conscious Applications', 'Fire Retardant Plywood discussed against project requirements.', PRODUCT_ROUTES.fireRetardantPlywood],
  ['Industrial Production', 'Formaldehyde specifications, volume and delivery discussions.', PRODUCT_ROUTES.formaldehyde],
];
