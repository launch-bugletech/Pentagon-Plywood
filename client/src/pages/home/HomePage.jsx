/* Pentagon Plywood homepage */

import React, { useEffect } from 'react';
import {
  Hero, Trust, Products, FindProduct, Brands, Why,
  Manufacturing, Quality, Applications, Projects, Dealer,
  Testimonials, Resources, Enquiry, WhatsappFloat,
} from './components.jsx';

function HomePage() {
  useEffect(() => {
    document.title = 'Pentagon Plywood | Crafting Excellence Since 1997';
  }, []);

  return (
    <>
      <Hero/>
      <Trust/>
      <Products/>
      <FindProduct/>
      <Brands/>
      <Why/>
      <Manufacturing/>
      <Quality/>
      <Applications/>
      <Projects/>
      <Dealer/>
      <Testimonials/>
      <Resources/>
      <Enquiry/>
      <WhatsappFloat/>
    </>
  );
}

export default HomePage;
