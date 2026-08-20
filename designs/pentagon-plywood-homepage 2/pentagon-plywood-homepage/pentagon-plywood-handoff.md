# Pentagon Plywood Website Handoff

## Design concept

The homepage uses a warm, architectural editorial system rather than a generic construction template. Deep forest sections establish trust, natural cream surfaces keep the experience approachable, walnut accents connect the interface to wood materiality, and thin rules provide structure without relying on heavy cards or shadows.

## Colour and typography

- Soft linen: `#F4EFE7`
- Layered beige: `#E2D5C4`
- Deep charcoal: `#292825`
- Charcoal anchor: `#302E2A`
- Clay brown: `#8C684F`
- Warm sand: `#C7AA80`
- Heading stack: Manrope / Avenir Next / Segoe UI
- Body stack: Inter / Helvetica Neue / Arial
- Restrained serif accents: Georgia for selected phrases only

## Homepage structure

1. Sticky accessible navigation
2. Brand hero with layered plywood material study and trust highlights
3. Experience and company introduction
4. Click-driven product range
5. Pentagon Promise
6. Manufacturing journey
7. Quality and document placeholders
8. Tap- and hover-driven application explorer
9. Demo project connection section
10. Dealer partnership invitation
11. Keyboard-accessible testimonials
12. Knowledge and resources
13. Contact details and validated enquiry form
14. Structured footer

## Product pages

- `products.html` is the main product overview for Commercial Plywood, Marine Plywood, Blockboards and Flush Doors.
- `plywood.html` is the detailed sub-product page for MR Grade and Marine Plywood.
- `products.css` contains the product-page layouts, responsive comparison table and CSS product visuals.
- `products.js` controls the mobile navigation, reveal states, thickness selector, application explorer, FAQ accordion, grade-prefilled enquiry actions and form validation.
- The homepage header, product calls to action and footer are linked to the new pages. The new pages link back to all homepage sections.
- Grade and Indian Standard references are deliberately qualified as subject to current certificate verification.

## Image assets required

Prepare verified WebP or AVIF files with descriptive alternative text:

- Factory exterior or production-floor portrait image, approximately 1200 × 1500
- Manufacturing-line landscape image, approximately 1800 × 1000
- Seven application images: kitchens, wardrobes, living spaces, offices, retail, hospitality, and doors/partitions
- Four promise-section images: team/factory heritage, product range, manufacturing attention, and enquiry support
- Three verified project images if the demo projects are approved
- Real certification logos, licences, technical data sheets, and product-grade documents
- Optional verified product photography for commercial plywood, marine plywood, blockboards, and flush doors

## Replacing placeholders

Search `index.html` for `media-placeholder`. Replace each placeholder `<div>` with a responsive `<picture>` containing AVIF, WebP, and fallback sources. Preserve the existing container class, set explicit `width` and `height`, add useful `alt` text, and use `loading="lazy"` for every below-the-fold image.

The three project entries are marked “Demo project content confirmation required” and include a CMS comment. Do not remove those notices until Pentagon Plywood confirms the names, locations, brands, quantities, and project descriptions.

## Form connection

The enquiry form validates required fields, email format, and Indian mobile numbers. It intentionally does not transmit data. Connect the submit handler in `script.js` to a secure WordPress, CRM, or form endpoint before launch. Keep server-side validation, CSRF protection, spam controls, and a privacy-policy link in the production integration.

## Local use

Keep all HTML, CSS, JavaScript, `favicon.svg` and `og.png` files in one directory. Asset paths are relative, so the site can be opened directly by double-clicking `index.html` or served through any local static server.

## QA checklist

- Desktop: verify sticky navigation, all anchor links, product switching, application switching, testimonial controls, and form states.
- Tablet: confirm two-column layouts collapse cleanly and touch targets remain at least 44px.
- Mobile: verify menu focus/escape behaviour, no horizontal scrolling, readable headings, vertical manufacturing steps, and tap-driven application changes.
- Accessibility: test keyboard-only navigation, visible focus, form errors, heading order, colour contrast, and reduced-motion mode.
- Content: replace all image/document placeholders and verify every demo project, testimonial, standard, certification, brand range, and company claim.
- Performance: compress imagery, keep explicit dimensions, lazy-load below-the-fold assets, and avoid adding animation libraries.
- SEO: replace placeholder links, add the final canonical URL, verify social preview, and confirm Organization contact information.
