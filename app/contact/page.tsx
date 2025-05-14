import Header from "@/components/layout/header/HeaderTwo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactContent from "@/components/containers/contact/ContactContent";
import ContactMap from "@/components/containers/contact/ContactMap";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="Contact Us" />
      <ContactContent />
      <ContactMap />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
