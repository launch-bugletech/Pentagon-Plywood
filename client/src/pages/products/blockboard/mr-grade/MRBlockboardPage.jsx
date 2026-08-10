import { useEffect } from "react";
import {
  ProductHeroSection,
  ProductQuickFactsSection,
  ProductOverviewSection,
  ProductTimberGrainInspectorSection,
  ProductBenefitsSection,
  ProductApplicationsSection,
  ProductLimitationsSection,
  ProductSpecificationsSection,
  ProductThicknessGuideSection,
  ProductComparisonSection,
  ProductFinishesSection,
  ProductQualitySection,
  ProductWhyPentagonSection,
  ProductBulkSection,
  ProductFaqsSection,
  ProductEnquirySection,
} from "../../../../components/product/PlywoodSubProductPage.jsx";
import { mrBlockboardProductData } from "../../../../data/mrBlockboardData.jsx";

function MRBlockboardPage() {
  useEffect(() => {
    document.title = "MR Grade Blockboard (IS 1659:2004) | Pentagon Plywood";
  }, []);

  return (
    <div className="overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <ProductHeroSection hero={mrBlockboardProductData.hero} breadcrumbs={mrBlockboardProductData.breadcrumbs} />
      <ProductQuickFactsSection quickFacts={mrBlockboardProductData.quickFacts} />
      <ProductOverviewSection overview={mrBlockboardProductData.overview} />
      <ProductTimberGrainInspectorSection />
      <ProductBenefitsSection benefits={mrBlockboardProductData.benefits} />
      <ProductApplicationsSection applications={mrBlockboardProductData.applications} />
      <ProductLimitationsSection limitations={mrBlockboardProductData.limitations} />
      <ProductSpecificationsSection specifications={mrBlockboardProductData.specifications} />
      <ProductThicknessGuideSection thicknessGuide={mrBlockboardProductData.thicknessGuide} />
      <ProductComparisonSection comparison={mrBlockboardProductData.comparison} />
      <ProductFinishesSection finishes={mrBlockboardProductData.finishes} />
      <ProductQualitySection quality={mrBlockboardProductData.quality} />
      <ProductWhyPentagonSection whyPentagon={mrBlockboardProductData.whyPentagon} />
      <ProductBulkSection bulkSection={mrBlockboardProductData.bulkSection} />
      <ProductFaqsSection faqs={mrBlockboardProductData.faqs} />
      <ProductEnquirySection enquiry={mrBlockboardProductData.enquiry} />
    </div>
  );
}

export default MRBlockboardPage;
