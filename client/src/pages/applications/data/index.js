import homeFurniture from "./homeFurniture.js";
import modularKitchens from "./modularKitchens.js";
import wardrobesStorage from "./wardrobesStorage.js";
import wallPanelling from "./wallPanelling.js";
import officeCommercial from "./officeCommercial.js";
import retailHospitality from "./retailHospitality.js";
import furnitureFabrication from "./furnitureFabrication.js";
import dealerBulkSupply from "./dealerBulkSupply.js";

export const applicationPages = [
  homeFurniture,
  modularKitchens,
  wardrobesStorage,
  wallPanelling,
  officeCommercial,
  retailHospitality,
  furnitureFabrication,
  dealerBulkSupply,
];

export const applicationPagesByPath = Object.fromEntries(
  applicationPages.map((page) => [page.path, page]),
);
