// Inline SVG data-URIs used as fallbacks when a product or supplier image
// is missing / 404s. No files needed in /public for these to work.

export const PRODUCT_IMAGE_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
  <rect width="220" height="220" fill="#F3F4F6"/>
  <g fill="none" stroke="#C7CBD4" stroke-width="4">
    <rect x="34" y="44" width="152" height="132" rx="6"/>
    <circle cx="76" cy="86" r="14"/>
    <path d="M34 150l44-44 30 30 26-26 42 42" />
  </g>
</svg>`);

export const SUPPLIER_IMAGE_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="32" fill="#E9EDFB"/>
  <circle cx="32" cy="25" r="11" fill="#9FB1F0"/>
  <path d="M12 54c3-13 12-19 20-19s17 6 20 19" fill="#9FB1F0"/>
</svg>`);
