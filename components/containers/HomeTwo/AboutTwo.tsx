"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Line from "@/public/images/shape/about-line.png";
import One from "@/public/images/about/about-two-image1.jpg";
import Two from "@/public/images/about/about-two-image2.png";
import Circle from "@/public/images/shape/about-circle.png";
import Three from "@/public/images/icon/section-title.png";
import Four from "@/public/images/icon/about-icon1.png";
import Five from "@/public/images/icon/about-icon2.png";
import Six from "@/public/images/about/about-info.png";

const AboutTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="about-area sub-bg pt-120" id="about-section">
        <div
          className="about__shape "
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          <Image src={Line} alt="shape" priority />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-6 "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about__left-item">
                <div className="image big-image">
                  <Image src={One} alt="Image" priority />
                </div>
                <div className="image sm-image">
                  <Image src={Two} alt="Image" priority />
                </div>
                <div className="circle-shape">
                  <Image src={Circle} alt="shape" priority />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-header mb-40">
                <h5
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  <Image className="me-1" src={Three} alt="icon" priority />
                  ABOUT STRAT1
                </h5>
                <h2
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Spearheading progress through advanced solutions and
                  commitment to excellence
                </h2>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  We're dedicated to pushing the boundaries of what's possible
                  in the world of software solutions. With a focus on
                  cutting-edge technology and a passion for excellence.
                </p>
              </div>
              <div
                className="row g-4 "
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Four} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">Best Services</h4>
                      <p>
                        Enabling Tomorrow’s Possibilities with Smart, Scalable
                        Solutions Today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Five} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">24/7 Call Support</h4>
                      <p>Always On, Always Here —You Can Count On.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="about__info mt-50 "
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <Link href="about" className="btn-one">
                  Explore More{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
