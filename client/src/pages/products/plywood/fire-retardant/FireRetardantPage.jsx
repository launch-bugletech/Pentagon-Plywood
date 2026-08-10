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
import { fireRetardantProductData } from "../../../../data/fireRetardantData.jsx";

function FireRetardantPage() {
  useEffect(() => {
    document.title = "Fire Retardant Plywood (IS 5509:2021) | Pentagon Plywood";
  }, []);

  return (
    <div className="overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <ProductHeroSection hero={fireRetardantProductData.hero} breadcrumbs={fireRetardantProductData.breadcrumbs} />
      <ProductQuickFactsSection quickFacts={fireRetardantProductData.quickFacts} />
      <ProductOverviewSection overview={fireRetardantProductData.overview} />
      <ProductInHouseResinSection />
      <ProductBenefitsSection benefits={fireRetardantProductData.benefits} />
      <ProductApplicationsSection applications={fireRetardantProductData.applications} />
      <ProductLimitationsSection limitations={fireRetardantProductData.limitations} />
      <ProductSpecificationsSection specifications={fireRetardantProductData.specifications} />
      <ProductThicknessGuideSection thicknessGuide={fireRetardantProductData.thicknessGuide} />
      <ProductComparisonSection comparison={fireRetardantProductData.comparison} />
      <ProductFinishesSection finishes={fireRetardantProductData.finishes} />
      <ProductQualitySection quality={fireRetardantProductData.quality} />
      <ProductWhyPentagonSection whyPentagon={fireRetardantProductData.whyPentagon} />
      <ProductBulkSection bulkSection={fireRetardantProductData.bulkSection} />
      <ProductFaqsSection faqs={fireRetardantProductData.faqs} />
      <ProductEnquirySection enquiry={fireRetardantProductData.enquiry} />
    </div>
  );
}

export default FireRetardantPage;
