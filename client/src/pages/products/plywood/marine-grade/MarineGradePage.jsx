import { useEffect } from "react";
import {
  ProductHeroSection,
  ProductQuickFactsSection,
  ProductOverviewSection,
  ProductInHouseResinSection,
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
import { marineGradeProductData } from "../../../../data/marineGradeData.jsx";

function MarineGradePage() {
  useEffect(() => {
    document.title = "Marine Grade Plywood (IS 710:2024) | Pentagon Plywood";
  }, []);

  return (
    <div className="overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <ProductHeroSection hero={marineGradeProductData.hero} breadcrumbs={marineGradeProductData.breadcrumbs} />
      <ProductQuickFactsSection quickFacts={marineGradeProductData.quickFacts} />
      <ProductOverviewSection overview={marineGradeProductData.overview} />
      <ProductInHouseResinSection />
      <ProductBenefitsSection benefits={marineGradeProductData.benefits} />
      <ProductApplicationsSection applications={marineGradeProductData.applications} />
      <ProductLimitationsSection limitations={marineGradeProductData.limitations} />
      <ProductSpecificationsSection specifications={marineGradeProductData.specifications} />
      <ProductThicknessGuideSection thicknessGuide={marineGradeProductData.thicknessGuide} />
      <ProductComparisonSection comparison={marineGradeProductData.comparison} />
      <ProductFinishesSection finishes={marineGradeProductData.finishes} />
      <ProductQualitySection quality={marineGradeProductData.quality} />
      <ProductWhyPentagonSection whyPentagon={marineGradeProductData.whyPentagon} />
      <ProductBulkSection bulkSection={marineGradeProductData.bulkSection} />
      <ProductFaqsSection faqs={marineGradeProductData.faqs} />
      <ProductEnquirySection enquiry={marineGradeProductData.enquiry} />
    </div>
  );
}

export default MarineGradePage;
