"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Three from "@/public/images/shape/service-item-shape.png";
import Four from "@/public/images/icon/service-icon1.png";
import Seven from "@/public/images/icon/service-icon4.jpg"; // AI Service Icon
import Eight from "@/public/images/icon/service-icon5.png"; // Managed IT Services Icon
import Nine from "@/public/images/icon/service-icon6.png"; // BI Analytics Icon (you'll need to add this image)

const ServiceTwo = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(0);

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
          {/* Four services in a row - adjusted for better layout */}
          <div
            className="col-lg-3 col-md-6 "
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
            className="col-lg-3 col-md-6 "
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
                <Image src={Seven} alt="icon" priority />
              </div>
              <h4>
                <Link href="/ai-services">AI as a Service</Link>
              </h4>
              <p className="flex-grow-1">
                Future-ready AI capabilities to keep you ahead in the digital
                surge. We empower your business with AI-driven culture that
                drives long-term, sustainable growth through responsible AI
                solutions.
              </p>
              <div className="service-features mt-3">
                <small className="d-block mb-1">
                  • GenAI & LLM Development
                </small>
                <small className="d-block mb-1">
                  • AI/ML Consulting & Strategy
                </small>
                <small className="d-block">• Intelligent AI Agents</small>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 "
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
                <Image src={Eight} alt="icon" priority />
              </div>
              <h4>
                <Link href="/managed-it-services">Managed IT Services</Link>
              </h4>
              <p className="flex-grow-1">
                Scalable, flexible and fully managed IT solutions across
                cybersecurity, risk, network, cloud, and support. Simplify your
                IT environment while focusing on growth and customer
                acquisition.
              </p>
              <div className="service-features mt-3">
                <small className="d-block mb-1">
                  • 24/7 IT Support & Monitoring
                </small>
                <small className="d-block mb-1">
                  • Network & Security Management
                </small>
                <small className="d-block">• Cloud & Device Management</small>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item d-flex flex-column h-100 " +
                (isOverviewOpen === 3 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(3)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Nine} alt="icon" priority />
              </div>
              <h4>
                <Link href="/analytics-bi-services">
                  Advanced Analytics & BI
                </Link>
              </h4>
              <p className="flex-grow-1">
                Power your strategy with high-volume, accurate, and compliant
                data. Transform raw data into actionable insights with advanced
                analytics, predictive modeling, and interactive dashboards that
                drive strategic decision-making.
              </p>
              <div className="service-features mt-3">
                <small className="d-block mb-1">
                  • Custom Dashboard Development
                </small>
                <small className="d-block mb-1">
                  • Predictive Analytics & ML
                </small>
                <small className="d-block">• Data Warehousing & ETL</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;
