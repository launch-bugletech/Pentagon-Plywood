import { useEffect } from "react";
import {
  ProductHeroSection,
  ProductQuickFactsSection,
  ProductOverviewSection,
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
  ProductTimberGrainInspectorSection,
} from "../../../../components/product/PlywoodSubProductPage.jsx";
import { mrGradeProductData } from "../../../../data/mrGradeData.jsx";

function MRGradePage() {
  useEffect(() => {
    document.title = "MR Grade Plywood | Pentagon Plywood";
  }, []);

  return (
    <div className="overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <ProductHeroSection hero={mrGradeProductData.hero} breadcrumbs={mrGradeProductData.breadcrumbs} />
      <ProductQuickFactsSection quickFacts={mrGradeProductData.quickFacts} />
      <ProductOverviewSection overview={mrGradeProductData.overview} />
      <ProductTimberGrainInspectorSection />
      <ProductBenefitsSection benefits={mrGradeProductData.benefits} />
      <ProductApplicationsSection applications={mrGradeProductData.applications} />
      <ProductLimitationsSection limitations={mrGradeProductData.limitations} />
      <ProductSpecificationsSection specifications={mrGradeProductData.specifications} />
      <ProductThicknessGuideSection thicknessGuide={mrGradeProductData.thicknessGuide} />
      <ProductComparisonSection comparison={mrGradeProductData.comparison} />
      <ProductFinishesSection finishes={mrGradeProductData.finishes} />
      <ProductQualitySection quality={mrGradeProductData.quality} />
      <ProductWhyPentagonSection whyPentagon={mrGradeProductData.whyPentagon} />
      <ProductBulkSection bulkSection={mrGradeProductData.bulkSection} />
      <ProductFaqsSection faqs={mrGradeProductData.faqs} />
      <ProductEnquirySection enquiry={mrGradeProductData.enquiry} />
    </div>
  );
}

export default MRGradePage;
