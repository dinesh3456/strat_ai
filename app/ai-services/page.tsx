import Header from "@/components/layout/header/HeaderTwo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import AIServiceSingle from "@/components/containers/service/AIServiceSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const AIServicesPage = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="AI as a Service" />
      <AIServiceSingle />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default AIServicesPage;
