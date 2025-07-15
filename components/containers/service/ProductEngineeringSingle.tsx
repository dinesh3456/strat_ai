// components/containers/service/ProductEngineeringSingle.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Two from "@/public/images/service/service-single-details.jpg";

const ProductEngineeringSingle = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="service-single pt-120 pb-120">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="service-single__left-item">
              <div className="image mb-40">
                <Image src={Two} alt="Product Engineering" priority />
              </div>

              <h3 className="title mb-30">
                Transforming Software Portfolios with Product Engineering
                Services
              </h3>
              <p className="mb-30">
                In an era defined by rapid transformation, software product
                companies must remain agile in responding to evolving client
                expectations. Success in this landscape necessitates the
                adoption of cutting-edge technologies, agile methodologies, and
                user-centered design principles to bring innovative products to
                market.
              </p>

              <p className="mb-40">
                Strat1 Consulting stands at the vanguard of technological
                innovation. We offer a comprehensive portfolio of services
                tailored to support organizations in building market-leading
                solutions. Whether you seek to develop a pioneering product or
                enhance an existing solution, our proficiency in Digital Product
                Engineering positions us to help you create resilient,
                future-ready offerings.
              </p>

              {/* Core Capabilities Section */}
              <div className="mb-50">
                <h3 className="title mb-30">Core Capabilities</h3>
                <p className="mb-30">
                  At Strat1 Consulting, our Product Engineering services bridge
                  the gap between creative ideation and engineering precision.
                  We enable faster go-to-market, optimize costs, and enhance
                  design quality using a mix of digital technologies,
                  simulation, and PLM expertise.
                </p>

                <div className="row g-4 mb-40">
                  <div className="col-md-6">
                    <div
                      className="service-feature-card p-4"
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-10px)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px rgba(60, 114, 252, 0.1)";
                        e.currentTarget.style.borderColor = "#3C72FC";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "#e9ecef";
                      }}
                    >
                      <div className="feature-icon mb-3">
                        <i
                          className="fa-solid fa-lightbulb"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5>Product Design & Prototyping</h5>
                      <p className="small text-muted">
                        Transform your ideas into user-friendly designs that are
                        ready for the market. Using thoughtful and iterative
                        design approaches to validate concepts early.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="service-feature-card p-4"
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-10px)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px rgba(60, 114, 252, 0.1)";
                        e.currentTarget.style.borderColor = "#3C72FC";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "#e9ecef";
                      }}
                    >
                      <div className="feature-icon mb-3">
                        <i
                          className="fa-solid fa-rocket"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5>Product Development</h5>
                      <p className="small text-muted">
                        Built for Growth, Speed, and Reliability. We use agile
                        methods and cloud-based tools to create strong, scalable
                        products with flexible architecture.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row g-4 mb-40">
                  <div className="col-md-6">
                    <div
                      className="service-feature-card p-4"
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-10px)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px rgba(60, 114, 252, 0.1)";
                        e.currentTarget.style.borderColor = "#3C72FC";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "#e9ecef";
                      }}
                    >
                      <div className="feature-icon mb-3">
                        <i
                          className="fa-solid fa-shield-alt"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5>Testing & Validation</h5>
                      <p className="small text-muted">
                        Quality You Can Count On. Automated tests for
                        performance and security, with real-world checks through
                        user acceptance testing.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="service-feature-card p-4"
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-10px)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px rgba(60, 114, 252, 0.1)";
                        e.currentTarget.style.borderColor = "#3C72FC";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "#e9ecef";
                      }}
                    >
                      <div className="feature-icon mb-3">
                        <i
                          className="fa-solid fa-cogs"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5>Product Lifecycle Management</h5>
                      <p className="small text-muted">
                        Keep Your Product Growing and Future-Ready. Support from
                        launch to end-of-life, ensuring your product stays
                        relevant and competitive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-md-12">
                    <div
                      className="service-feature-card p-4"
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-10px)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px rgba(60, 114, 252, 0.1)";
                        e.currentTarget.style.borderColor = "#3C72FC";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "#e9ecef";
                      }}
                    >
                      <div className="feature-icon mb-3">
                        <i
                          className="fa-solid fa-headset"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5>Support & Maintenance</h5>
                      <p className="small text-muted">
                        Stay Up and Running, All the Time. 24/7 monitoring,
                        regular updates, security fixes, and smooth End-of-Life
                        (EOL) support when needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="row g-5 mt-40 mb-40 align-items-center">
                <div className="col-lg-6">
                  <h4 className="mb-20">Key Business Benefits</h4>
                  <ul>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>Faster Time-To-Market
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>Cost Optimization
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>Enhanced Design
                      Quality
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>Scalable Architecture
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>Agile Development
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>Future-Ready
                      Solutions
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div
                    className="stats-card p-4"
                    style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
                  >
                    <h5 className="mb-20">Our Track Record</h5>
                    <div className="row text-center">
                      <div className="col-6 mb-3">
                        <h3 className="text-primary">100+</h3>
                        <small>Successful Launches</small>
                      </div>
                      <div className="col-6 mb-3">
                        <h3 className="text-primary">30%</h3>
                        <small>Faster Time-to-Market</small>
                      </div>
                      <div className="col-6">
                        <h3 className="text-primary">24/7</h3>
                        <small>Support & Monitoring</small>
                      </div>
                      <div className="col-6">
                        <h3 className="text-primary">99.9%</h3>
                        <small>Uptime Guarantee</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-40">
                Our experienced team ensures smooth product development
                lifecycle from initial concept to post-launch support. We
                provide end-to-end support from assessment to optimization,
                ensuring your organization realizes the full benefits of modern
                product engineering methodologies.
              </p>

              {/* FAQ Section */}
              <h3 className="title mb-30">Frequently Asked Questions</h3>
              <p className="mb-30">
                Get answers to common questions about our product engineering
                services.
              </p>

              <div className="faq-area">
                <div className="accordion" id="accordionExample">
                  <div
                    className="accordion-item shadow border-none"
                    data-aos="fade-down"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={
                          (imgTab === 0 ? "" : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How is product engineering different from traditional
                        software development?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className={`accordion-collapse collapse${
                        imgTab === 0 ? " show " : ""
                      }`}
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Product engineering encompasses a broader approach,
                          covering the entire product lifecycle—from
                          conceptualization to post-launch support, while
                          traditional software development typically focuses on
                          building the software itself. We integrate design
                          thinking, user experience, scalability planning, and
                          long-term maintenance strategies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item shadow border-none"
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                  >
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className={
                          (imgTab === 1 ? "" : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How do product engineering services accelerate digital
                        transformation?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className={`accordion-collapse collapse${
                        imgTab === 1 ? " show " : ""
                      }`}
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Product engineering services provide the agility,
                          security, and innovation needed to build software
                          solutions that adapt to market changes and drive
                          business growth in the digital age. We implement
                          cloud-native architectures, CI/CD pipelines, and
                          modern development practices that enable rapid
                          iteration and deployment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item shadow border-none"
                    data-aos="fade-down"
                    data-aos-delay="400"
                    data-aos-duration="1500"
                  >
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className={
                          (imgTab === 2 ? "" : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What industries benefit most from software product
                        engineering services?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className={`accordion-collapse collapse${
                        imgTab === 2 ? " show " : ""
                      }`}
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Industries such as healthcare, fintech, manufacturing,
                          and retail benefit greatly from software product
                          engineering services, as they require powerful,
                          compliant, and innovative software solutions to stay
                          competitive. We also serve SaaS companies, e-commerce
                          platforms, and technology startups.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item shadow border-none"
                    data-aos="fade-down"
                    data-aos-delay="600"
                    data-aos-duration="1500"
                  >
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className={
                          (imgTab === 3 ? "" : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What technologies and methodologies do you use?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className={`accordion-collapse collapse${
                        imgTab === 3 ? " show " : ""
                      }`}
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We use modern technology stacks including cloud
                          platforms (AWS, Azure, GCP), containerization (Docker,
                          Kubernetes), CI/CD pipelines, microservices
                          architecture, and agile development methodologies. Our
                          approach combines DevOps practices with design
                          thinking for optimal results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 order-1 order-lg-2">
            <div className="service-single__right-item">
              <div className="item sub-bg mb-30">
                <h4 className="mb-20">Our Services</h4>
                <ul className="category service-category">
                  <li>
                    <Link href="/cloud-migration">
                      Cloud & Data Transformation
                    </Link>
                    <i className="fa-regular fa-arrow-right-long primary-color"></i>
                  </li>
                  <li>
                    <Link href="/ai-services">AI as a Service</Link>
                    <i className="fa-regular fa-arrow-right-long primary-color"></i>
                  </li>
                  <li>
                    <Link href="/managed-it-services">Managed IT Services</Link>
                    <i className="fa-regular fa-arrow-right-long primary-color"></i>
                  </li>
                  <li>
                    <Link href="/analytics-bi-services">
                      Advanced Analytics & BI
                    </Link>
                    <i className="fa-regular fa-arrow-right-long primary-color"></i>
                  </li>
                  <li className="active">
                    <Link href="/product-engineering">
                      Product Engineering Services
                    </Link>
                    <i className="fa-regular fa-arrow-right-long primary-color"></i>
                  </li>
                </ul>
              </div>

              <div className="item sub-bg mb-30">
                <h4 className="mb-20">Development Process</h4>
                <div className="process-checklist">
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#28a745", marginRight: "10px" }}
                    ></i>
                    <span className="small">Discovery & Requirements</span>
                  </div>
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#28a745", marginRight: "10px" }}
                    ></i>
                    <span className="small">Design & Prototyping</span>
                  </div>
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#28a745", marginRight: "10px" }}
                    ></i>
                    <span className="small">Agile Development</span>
                  </div>
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#28a745", marginRight: "10px" }}
                    ></i>
                    <span className="small">Testing & Quality Assurance</span>
                  </div>
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#28a745", marginRight: "10px" }}
                    ></i>
                    <span className="small">Deployment & Launch</span>
                  </div>
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#28a745", marginRight: "10px" }}
                    ></i>
                    <span className="small">Ongoing Support</span>
                  </div>
                </div>
              </div>

              <div className="item sub-bg mb-30">
                <h4 className="mb-20">Contact Our Experts</h4>
                <p className="mb-20 small">
                  Ready to transform your product development process? Our
                  certified product engineers are here to help.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#3C72FC",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    textDecoration: "none",
                    color: "white",
                    display: "inline-block",
                    fontSize: "14px",
                  }}
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductEngineeringSingle;
