import Header from "@/components/layout/header/HeaderTwo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Faq from "@/components/containers/HomeTwo/Faq";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="FAQ" />
      <Faq />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
