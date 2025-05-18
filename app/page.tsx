import HeaderTwo from "@/components/layout/header/HeaderTwo";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import Brand from "@/components/containers/HomeOne/Brand";
import AboutTwo from "@/components/containers/HomeTwo/AboutTwo";
import ServiceTwo from "@/components/containers/HomeTwo/ServiceTwo";
import ChooseArea from "@/components/containers/HomeTwo/ChooseArea";
import Team from "@/components/containers/HomeTwo/Team";
import Faq from "@/components/containers/HomeTwo/Faq";
import CaseTwo from "@/components/containers/HomeTwo/CaseTwo";
import TestimonialTwo from "@/components/containers/HomeTwo/TestimonialTwo";
import BlogTwo from "@/components/containers/HomeTwo/BlogTwo";
import Quote from "@/components/containers/HomeTwo/Quote";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import CounterSection from "@/components/containers/HomeTwo/CounterSection";
import Process from "@/components/containers/HomeTwo/Process";

const page = () => {
  return (
    <>
      <HeaderTwo />
      <BannerTwo />

      <ServiceTwo />
      <AboutTwo />
      <CounterSection />
      {/* <TestimonialTwo /> */}
      <Process />
      <Brand />
      {/* <Quote /> */}
      <FooterTwo />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
