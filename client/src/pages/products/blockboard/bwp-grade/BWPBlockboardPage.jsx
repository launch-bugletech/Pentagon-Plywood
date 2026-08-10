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
import { bwpBlockboardProductData } from "../../../../data/bwpBlockboardData.jsx";

function BWPBlockboardPage() {
  useEffect(() => {
    document.title = "BWP Grade Blockboard (IS 1659 BWP) | Pentagon Plywood";
  }, []);

  return (
    <div className="overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <ProductHeroSection hero={bwpBlockboardProductData.hero} breadcrumbs={bwpBlockboardProductData.breadcrumbs} />
      <ProductQuickFactsSection quickFacts={bwpBlockboardProductData.quickFacts} />
      <ProductOverviewSection overview={bwpBlockboardProductData.overview} />
      <ProductInHouseResinSection />
      <ProductBenefitsSection benefits={bwpBlockboardProductData.benefits} />
      <ProductApplicationsSection applications={bwpBlockboardProductData.applications} />
      <ProductLimitationsSection limitations={bwpBlockboardProductData.limitations} />
      <ProductSpecificationsSection specifications={bwpBlockboardProductData.specifications} />
      <ProductThicknessGuideSection thicknessGuide={bwpBlockboardProductData.thicknessGuide} />
      <ProductComparisonSection comparison={bwpBlockboardProductData.comparison} />
      <ProductFinishesSection finishes={bwpBlockboardProductData.finishes} />
      <ProductQualitySection quality={bwpBlockboardProductData.quality} />
      <ProductWhyPentagonSection whyPentagon={bwpBlockboardProductData.whyPentagon} />
      <ProductBulkSection bulkSection={bwpBlockboardProductData.bulkSection} />
      <ProductFaqsSection faqs={bwpBlockboardProductData.faqs} />
      <ProductEnquirySection enquiry={bwpBlockboardProductData.enquiry} />
    </div>
  );
}

export default BWPBlockboardPage;
