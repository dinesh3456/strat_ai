import Header from "@/components/layout/header/HeaderTwo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CloudMigrationSingle from "@/components/containers/service/CloudMigrationSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const CloudMigrationPage = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="Cloud & Data Transformation" />
      <CloudMigrationSingle />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default CloudMigrationPage;
