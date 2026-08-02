import kitchenImg from "../../assets/product/Applications/Modern kitchen with cabinets and island.png";
import livingImg from "../../assets/product/Applications/Contemporary living room with furniture.png";
import officeImg from "../../assets/product/Applications/Modern office with desks and partitions.png";
import wardrobeImg from "../../assets/product/Applications/Modern wardrobe with sliding doors.png";
export const PHONE_DISPLAY = "+91 72061 04340";
export const PHONE_LINK = "tel:+917206104340";
export const EMAIL = "pentagonplywood@gmail.com";
export const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hello Pentagon Plywood, I would like to enquire about a product. My required quantity is and the delivery location is."
);
export const WHATSAPP_LINK = `https://wa.me/917206104340?text=${WHATSAPP_MESSAGE}`;
export const enquiryTypes = [
    {
        value: "product",
        number: "01",
        title: "Product Enquiry",
        copy: "Ask about product grade, size, thickness, application, quantity or current availability.",
        action: "Ask About a Product",
        iconName: "Package",
    },
    {
        value: "dealer",
        number: "02",
        title: "Dealer or Distributor",
        copy: "Tell us about your business, current product categories and the territory you serve.",
        action: "Discuss Dealership",
        iconName: "Store",
    },
    {
        value: "project",
        number: "03",
        title: "Project or Bulk Requirement",
        copy: "Share a requirement for a residential, commercial, hospitality or institutional project.",
        action: "Share Project Details",
        iconName: "Building2",
    },
    {
        value: "export",
        number: "04",
        title: "Export Enquiry",
        copy: "Share the destination, required products, estimated quantity and delivery expectations.",
        action: "Start an Export Enquiry",
        iconName: "Globe",
    },
    {
        value: "general",
        number: "05",
        title: "General Enquiry",
        copy: "For company information, documentation or anything not covered by the other options.",
        action: "Contact Our Team",
        iconName: "HelpCircle",
    },
];
export const customerTypes = [
    "Homeowner",
    "Carpenter or Furniture Maker",
    "Interior Designer",
    "Architect",
    "Builder or Contractor",
    "Dealer or Distributor",
    "Commercial Buyer",
    "Institutional Buyer",
    "Export Buyer",
    "Other",
];
export const productCategories = [
    "Plywood",
    "Blockboard",
    "Membrane Door",
    "Laminated Door",
    "Flush Door",
    "Multiple Products",
    "Not Sure Yet",
];
export const directContacts = [
    {
        type: "Call",
        detail: PHONE_DISPLAY,
        copy: "For product, price, availability and business enquiries.",
        href: PHONE_LINK,
        action: "Call Pentagon",
        iconName: "PhoneCall",
    },
    {
        type: "WhatsApp",
        detail: PHONE_DISPLAY,
        copy: "Send the product, quantity and delivery city, with a reference image if useful.",
        href: WHATSAPP_LINK,
        action: "Start WhatsApp Chat",
        iconName: "MessageSquare",
    },
    {
        type: "Email",
        detail: EMAIL,
        copy: "For detailed specifications, BOQs, business proposals and export requirements.",
        href: `mailto:${EMAIL}`,
        action: "Email Your Requirement",
        iconName: "Mail",
    },
    {
        type: "Visit",
        detail: "Yamunanagar, Haryana",
        copy: "Village Raipur, Khajuri Road, Yamunanagar, Haryana 135001, India.",
        href: "#location",
        action: "Get Directions",
        iconName: "MapPin",
    },
];
export const nextSteps = [
    {
        number: "01",
        title: "We Review the Requirement",
        copy: "We review the product, application, quantity, specifications and delivery location.",
        iconName: "FileText",
    },
    {
        number: "02",
        title: "We Clarify the Details",
        copy: "If information is missing, we contact you to understand the grade, size, thickness, finish or project need.",
        iconName: "Compass",
    },
    {
        number: "03",
        title: "We Discuss the Next Step",
        copy: "Once the requirement is clear, we can discuss suitable available options and the appropriate commercial step.",
        iconName: "Sparkles",
    },
];
export const productDirections = [
    {
        title: "Furniture and Interior Work",
        copy: "Explore MR Grade Plywood and Blockboard according to the application, panel length, moisture conditions and finish.",
        action: "Discuss Interior Requirement",
        type: "product",
        image: livingImg,
        tag: "LIVING & BEDROOM",
    },
    {
        title: "Moisture-Prone Applications",
        copy: "Tell us where the material will be installed and the exposure expected so the appropriate grade can be discussed.",
        action: "Ask About Water Resistance",
        type: "product",
        image: kitchenImg,
        tag: "KITCHENS & UTILITY",
    },
    {
        title: "Doors and Shutters",
        copy: "Share the opening size, door type, thickness, preferred finish, quantity and internal or external use.",
        action: "Discuss Door Options",
        type: "product",
        image: wardrobeImg,
        tag: "WARDROBES & DOORS",
    },
    {
        title: "Dealer and Bulk Supply",
        copy: "Provide your market, product categories, estimated volume and delivery location.",
        action: "Start a Business Enquiry",
        type: "dealer",
        image: officeImg,
        tag: "OFFICE & COMMERCIAL",
    },
];
export const faqs = [
    {
        question: "How can I request a product quotation?",
        answer: "Select Product Enquiry or Project or Bulk Requirement and share the product, size, thickness, quantity and delivery location. If you do not know every specification, describe the intended application.",
    },
    {
        question: "Can I send my requirement on WhatsApp?",
        answer: `Yes. The currently published WhatsApp number is ${PHONE_DISPLAY}. Include the product, quantity and delivery city, and attach any useful reference image or document.`,
    },
    {
        question: "Can I enquire about becoming a dealer or distributor?",
        answer: "Yes. Select Dealer or Distributor and provide your business name, market location, current product categories and territory.",
    },
    {
        question: "Can architects, builders and interior designers submit a BOQ?",
        answer: "Yes. The form accepts a specification, drawing, BOQ or reference document. Confirm the final file-size requirements with our team if the document is large.",
    },
    {
        question: "Can I visit the Pentagon manufacturing location?",
        answer: "The published address is Village Raipur, Khajuri Road, Yamunanagar, Haryana 135001. Contact the team before visiting so the timing and appropriate representative can be confirmed.",
    },
    {
        question: "Does Pentagon accept export enquiries?",
        answer: "You may submit an export enquiry for review. Current export availability, markets and delivery terms will be confirmed by the Pentagon team for the specific requirement.",
    },
    {
        question: "What information should I include?",
        answer: "Where possible, include the product, grade, size, thickness, quantity, application, delivery location and required-by date.",
    },
    {
        question: "When will I receive a response?",
        answer: "Our team will review your requirement and contact you using your preferred method.",
    },
];