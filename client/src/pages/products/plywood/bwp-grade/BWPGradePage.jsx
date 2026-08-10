import {
  ProductApplicationsSection,
  ProductBenefitsSection,
  ProductBulkSection,
  ProductComparisonSection,
  ProductEnquirySection,
  ProductEnvironmentSection,
  ProductFaqSection,
  ProductFinishesSection,
  ProductHeroSection,
  ProductLimitationsSection,
  ProductOverviewSection,
  ProductPageMetadata,
  ProductQualitySection,
  ProductSpecificationsSection,
  ProductThicknessGuideSection,
  ProductWhyPentagonSection,
} from "@/components/product/PlywoodSubProductPage.jsx";
import { bwpGradeProductData } from "@/data/bwpGradeData.jsx";

function BWPGradePage() {
  return (
    <>
      <ProductPageMetadata pageTitle={bwpGradeProductData.pageTitle} />
      <ProductHeroSection
        breadcrumbs={bwpGradeProductData.breadcrumbs}
        content={bwpGradeProductData.hero}
        quickFacts={bwpGradeProductData.quickFacts}
      />
      <ProductOverviewSection content={bwpGradeProductData.overview} />
      <ProductBenefitsSection content={bwpGradeProductData.benefits} />
      <ProductApplicationsSection content={bwpGradeProductData.applications} />
      <ProductEnvironmentSection content={bwpGradeProductData.environment} />
      <ProductLimitationsSection content={bwpGradeProductData.limitations} />
      <ProductSpecificationsSection content={bwpGradeProductData.specifications} />
      <ProductThicknessGuideSection content={bwpGradeProductData.thicknessGuide} />
      <ProductComparisonSection content={bwpGradeProductData.comparison} />
      <ProductFinishesSection content={bwpGradeProductData.finishes} />
      <ProductQualitySection content={bwpGradeProductData.quality} />
      <ProductWhyPentagonSection content={bwpGradeProductData.whyPentagon} />
      <ProductBulkSection content={bwpGradeProductData.bulkSection} />
      <ProductFaqSection content={bwpGradeProductData.faqs} />
      <ProductEnquirySection content={bwpGradeProductData.enquiry} />
    </>
  );
}

export default BWPGradePage;
