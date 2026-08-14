import React from "react";
import FlushSubProductPage from "@/components/product/FlushSubProductPage.jsx";
import { mrFlushDoorProductData } from "@/data/products/mrFlushDoorData.js";

export default function MRFlushDoorPage() {
  return <FlushSubProductPage productData={mrFlushDoorProductData} />;
}
