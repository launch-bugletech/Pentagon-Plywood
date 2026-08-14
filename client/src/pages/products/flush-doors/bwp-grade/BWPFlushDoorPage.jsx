import React from "react";
import FlushSubProductPage from "@/components/product/FlushSubProductPage.jsx";
import { bwpFlushDoorProductData } from "@/data/products/bwpFlushDoorData.js";

export default function BWPFlushDoorPage() {
  return <FlushSubProductPage productData={bwpFlushDoorProductData} />;
}
