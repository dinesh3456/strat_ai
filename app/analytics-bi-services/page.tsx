import Header from "@/components/layout/header/HeaderTwo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import AnalyticsBISingle from "@/components/containers/service/AnalyticsBISingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const AnalyticsBIServicesPage = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="Advanced Analytics & Business Intelligence" />
      <AnalyticsBISingle />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default AnalyticsBIServicesPage;
