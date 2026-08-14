import React from "react";
import ChemicalSubProductPage from "@/components/product/ChemicalSubProductPage.jsx";
import { formaldehydeProductData } from "@/data/products/formaldehydeData.js";

export default function FormaldehydePage() {
  return <ChemicalSubProductPage productData={formaldehydeProductData} />;
}
