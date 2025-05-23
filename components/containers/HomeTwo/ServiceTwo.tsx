"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Three from "@/public/images/shape/service-item-shape.png";
import Four from "@/public/images/icon/service-icon1.png";
import Five from "@/public/images/icon/service-icon2.png";
import Six from "@/public/images/icon/service-icon3.png";

const ServiceTwo = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(1);

  return (
    <section className="service-area pt-120 pb-120" id="service-section">
      <div className="service__shape " data-aos="fade-right">
        <Image className="sway_Y__animation" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="section-header text-center mb-60">
          <h5
            className=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <svg
              className="me-1"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.75"
                y="0.75"
                width="18.5"
                height="10.5"
                rx="5.25"
                stroke="#3C72FC"
                strokeWidth="1.5"
              />
              <mask id="path-2-inside-1_1120_300" fill="white">
                <path d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
              </mask>
              <path
                d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                fill="#3C72FC"
                mask="url(#path-2-inside-1_1120_300)"
              />
            </svg>
            OUR SERVICES
          </h5>
          <h2
            className=""
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Empowering Your Digital Transformation
          </h2>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item d-flex flex-column h-100 " +
                (isOverviewOpen === 0 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(0)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Four} alt="icon" priority />
              </div>
              <h4>
                <Link href="/cloud-migration">Cloud & Data Transformation</Link>
              </h4>
              <p className="flex-grow-1">
                Seamlessly migrate your infrastructure to the cloud and harness
                the power of data with engineered solutions that unlock agility
                and insight. From assessment to optimization, we ensure your
                cloud journey is secure and efficient.
              </p>
              <div className="service-features mt-3">
                <small className="d-block mb-1">
                  • Cloud Strategy & Migration
                </small>
                <small className="d-block mb-1">• Data Analytics & AI</small>
                <small className="d-block">• Security & Compliance</small>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item d-flex flex-column h-100 " +
                (isOverviewOpen === 1 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Five} alt="icon" priority />
              </div>
              <h4>
                <Link href="/product-engineering">
                  Product & Engineering Services
                </Link>
              </h4>
              <p className="flex-grow-1">
                Design, build, and scale innovative products and frameworks
                tailored to your unique business challenges and growth goals.
                Our engineering excellence drives digital innovation.
              </p>
              <div className="service-features mt-3">
                <small className="d-block mb-1">
                  • Custom Software Development
                </small>
                <small className="d-block mb-1">
                  • API & Platform Engineering
                </small>
                <small className="d-block">• Quality Assurance & Testing</small>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item d-flex flex-column h-100 " +
                (isOverviewOpen === 2 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Six} alt="icon" priority />
              </div>
              <h4>
                <Link href="/strategic-consulting">
                  Strategic Consulting & Professional Services
                </Link>
              </h4>
              <p className="flex-grow-1">
                Delivering expert guidance and specialized services to optimize
                talent, manage events, and lead business program
                management—driving success with tailored strategies.
              </p>
              <div className="service-features mt-3">
                <small className="d-block mb-1">
                  • Business Strategy & Planning
                </small>
                <small className="d-block mb-1">
                  • Event Management Solutions
                </small>
                <small className="d-block">• Talent Optimization</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;
