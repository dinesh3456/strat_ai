"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Line from "@/public/images/banner/banner-line.png";
import One from "@/public/images/banner/banner-two-left-line.png";
import Two from "@/public/images/banner/banner-two-solid-right-down.png";
import Three from "@/public/images/banner/banner-two-solid-right-up.png";
import Four from "@/public/images/banner/banner-two-right-shape.png";
import Five from "@/public/images/banner/banner-two-circle-solid.png";
import Six from "@/public/images/banner/banner-two-circle-regular.png";

const BannerTwo = () => {
  return (
    <section className="banner-two-area">
      <div className="banner-two__line">
        <Image className="sway_Y__animation" src={Line} alt="shape" priority />
      </div>
      <div className="swiper banner__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          freeMode={true}
          speed={3000}
          effect={"fade"}
          loop={true}
          roundLengths={true}
          modules={[Autoplay, EffectFade, Pagination]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".banner__dot",
            clickable: true,
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <div>
              <div
                className="banner-two__line-left"
                data-animation="slideInLeft"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                className="banner-two__shape2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div
                className="banner-two__shape1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={Three} alt="shape" priority />
              </div>
              <div
                className="banner-two__right-shape "
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <Image
                  className="sway_Y__animation"
                  src={Four}
                  alt="shape"
                  priority
                />
              </div>
              <div className="banner-two__circle-solid">
                <Image
                  className="animation__rotate"
                  src={Five}
                  alt="shape"
                  priority
                />
              </div>
              <div className="banner-two__circle-regular">
                <Image
                  className="animation__rotateY"
                  src={Six}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: "url(/images/banner/banner-two-image1.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="banner-two__content text-center">
                  <h4
                    data-animation="fadeInUp"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    UNLOCKING GROWTH POTENTIAL
                  </h4>
                  <h1
                    data-animation="fadeInUp"
                    data-delay=".5s"
                    className="text-white"
                    style={{ fontSize: "4.5rem", lineHeight: "1.2" }}
                  >
                    Thrive in a World of
                    <br />
                    Constant Change
                  </h1>
                  <p
                    data-animation="fadeInUp"
                    data-delay=".7s"
                    className="mt-20"
                    style={{ maxWidth: "800px", margin: "0 auto" }}
                  >
                    By fusing advanced cloud technologies with transformative AI
                    strategies, we unlock new dimensions of growth tailored to
                    your vision. At Start1 Consulting, we help you redefine
                    what's possible in today's dynamic business landscape.
                  </p>
                  <Link
                    data-animation="fadeInUp"
                    data-delay="1s"
                    href="about"
                    className="btn-one mt-50"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                className="banner-two__line-left"
                data-animation="slideInLeft"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                className="banner-two__shape2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div
                className="banner-two__shape1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={Three} alt="shape" priority />
              </div>
              <div
                className="banner-two__right-shape "
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <Image
                  className="sway_Y__animation"
                  src={Four}
                  alt="shape"
                  priority
                />
              </div>
              <div className="banner-two__circle-solid">
                <Image
                  className="animation__rotate"
                  src={Five}
                  alt="shape"
                  priority
                />
              </div>
              <div className="banner-two__circle-regular">
                <Image
                  className="animation__rotateY"
                  src={Six}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: "url(/images/banner/banner-two-image2.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="banner-two__content text-center">
                  <h4
                    data-animation="fadeInUp"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    INTELLIGENT TRANSFORMATION EXPERTS
                  </h4>
                  <h1
                    data-animation="fadeInUp"
                    data-delay=".5s"
                    className="text-white"
                    style={{ fontSize: "4.5rem", lineHeight: "1.2" }}
                  >
                    Shaping the Future Through
                    <br />
                    Intelligent Transformation
                  </h1>
                  <p
                    data-animation="fadeInUp"
                    data-delay=".7s"
                    className="mt-20"
                    style={{ maxWidth: "800px", margin: "0 auto" }}
                  >
                    At Start1 Consulting, we don't just support your digital
                    evolution—we help you redefine what's possible. By fusing
                    advanced cloud technologies with transformative AI
                    strategies, we unlock new dimensions of growth tailored to
                    your vision.
                  </p>
                  <Link
                    data-animation="fadeInUp"
                    data-delay="1s"
                    href="about"
                    className="btn-one mt-50"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                className="banner-two__line-left"
                data-animation="slideInLeft"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                className="banner-two__shape2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div
                className="banner-two__shape1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={Three} alt="shape" priority />
              </div>
              <div
                className="banner-two__right-shape "
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <Image
                  className="sway_Y__animation"
                  src={Four}
                  alt="shape"
                  priority
                />
              </div>
              <div className="banner-two__circle-solid">
                <Image
                  className="animation__rotate"
                  src={Five}
                  alt="shape"
                  priority
                />
              </div>
              <div className="banner-two__circle-regular">
                <Image
                  className="animation__rotateY"
                  src={Six}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: "url(/images/banner/banner-two-image3.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="banner-two__content text-center">
                  <h4
                    data-animation="fadeInUp"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    FUTURE-READY INNOVATION
                  </h4>
                  <h1
                    data-animation="fadeInUp"
                    data-delay=".5s"
                    className="text-white"
                    style={{ fontSize: "4.5rem", lineHeight: "1.2" }}
                  >
                    Lead with Confidence,
                    <br />
                    Disrupt with Purpose
                  </h1>
                  <p
                    data-animation="fadeInUp"
                    data-delay=".7s"
                    className="mt-20"
                    style={{ maxWidth: "800px", margin: "0 auto" }}
                  >
                    Our commitment is to future-ready innovation that empowers
                    you to lead with confidence, disrupt with purpose, and
                    thrive in a world of constant change. We fuse advanced cloud
                    technologies with transformative AI strategies tailored to
                    your vision.
                  </p>
                  <Link
                    data-animation="fadeInUp"
                    data-delay="1s"
                    href="about"
                    className="btn-one mt-50"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="banner__dot-wrp banner-two__dot-wrp">
        <div className="dot-light banner__dot"></div>
      </div>
    </section>
  );
};

export default BannerTwo;
