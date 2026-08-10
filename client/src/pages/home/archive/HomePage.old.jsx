/* Pentagon Plywood homepage (old version) */

import React, { useEffect } from "react";
import {
  Hero,
  Trust,
  Products,
  FindProduct,
  Brands,
  Why,
  Manufacturing,
  Quality,
  Applications,
  Projects,
  Dealer,
  Testimonials,
  Resources,
  Enquiry,
  WhatsappFloat,
} from "../components.jsx";

function HomePageOld() {
  useEffect(() => {
    document.title = "Pentagon Plywood | Crafting Excellence Since 1986 (v1)";
  }, []);

  return (
    <>
      <Hero />
      <Trust />
      <Products />
      <FindProduct />
      <Brands />
      <Why />
      <Manufacturing />
      <Quality />
      <Applications />
      <Projects />
      <Dealer />
      <Testimonials />
      <Resources />
      <Enquiry />
      <WhatsappFloat />
    </>
  );
}

export default HomePageOld;
