import Header from "@/components/layout/header/HeaderTwo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ManagedITServicesSingle from "@/components/containers/service/ManagedITServicesSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const ManagedITServicesPage = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="Managed IT Services" />
      <ManagedITServicesSingle />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default ManagedITServicesPage;
