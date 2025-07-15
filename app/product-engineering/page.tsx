// app/product-engineering/page.tsx
import Header from "@/components/layout/header/HeaderTwo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProductEngineeringSingle from "@/components/containers/service/ProductEngineeringSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const ProductEngineeringPage = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="Product Engineering Services" />
      <ProductEngineeringSingle />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default ProductEngineeringPage;
