"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";

// You'll need to add these images to your public/images/service/ directory
const CloudMigrationSingle = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <>
      <section className="service-single-area pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="service-single__left-item">
                <div className="image mb-50">
                  <Image
                    src="/images/service/service-image1.jpg"
                    alt="Cloud Migration Services"
                    width={800}
                    height={400}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <h3 className="title mb-30">Cloud & Data Transformation</h3>
                <h4 className="mb-20" style={{ color: "#3C72FC" }}>
                  Reimagine your business for the cloud computing era
                </h4>

                <p className="mb-20">
                  Each and every customer's journey to the cloud is unique and
                  needs a tailored approach. We acknowledge that building secure
                  and optimized cloud environments can be challenging,
                  especially when time and knowledge are not readily available.
                </p>

                <p className="mb-40">
                  We offer a wide array of flexible solutions to suit every
                  customer's needs. Our cloud transformation services enable
                  organizations to leverage the full potential of cloud
                  computing while ensuring security, scalability, and
                  cost-effectiveness.
                </p>

                {/* Cloud Transformation Process */}
                <div className="row g-4 mt-40 mb-40">
                  <div className="col-12">
                    <h4 className="mb-30">Our Cloud Transformation Process</h4>
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div
                          className="process-item text-center p-4"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-search"
                              style={{ fontSize: "2rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5 className="mb-2">Assessment</h5>
                          <p className="small">
                            Comprehensive evaluation of your current
                            infrastructure and readiness
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="process-item text-center p-4"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-drafting-compass"
                              style={{ fontSize: "2rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5 className="mb-2">Strategy & Planning</h5>
                          <p className="small">
                            Customized roadmap and architecture design for your
                            cloud journey
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="process-item text-center p-4"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-rocket"
                              style={{ fontSize: "2rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5 className="mb-2">Migration & Optimization</h5>
                          <p className="small">
                            Seamless migration with continuous optimization and
                            monitoring
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <div className="row g-5 mt-40 mb-40 align-items-center">
                  <div className="col-lg-6">
                    <h4 className="mb-20">Key Service Areas</h4>
                    <ul className="service-features">
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Cloud Strategy & Consulting</strong> -
                        Comprehensive cloud adoption planning
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Infrastructure Migration</strong> - Seamless
                        movement of applications and data
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Data Analytics & AI</strong> - Advanced
                        analytics and machine learning capabilities
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Security & Compliance</strong> -
                        Enterprise-grade security frameworks
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Cost Optimization</strong> - Intelligent
                        resource management and cost control
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>24/7 Support & Monitoring</strong> - Continuous
                        operational excellence
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="service-benefits p-4"
                      style={{ background: "#f8f9ff", borderRadius: "15px" }}
                    >
                      <h5 className="mb-3" style={{ color: "#3C72FC" }}>
                        Cloud Transformation Benefits
                      </h5>
                      <div className="benefit-item d-flex align-items-center mb-3">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{ color: "#28a745", marginRight: "10px" }}
                        ></i>
                        <span>Increased Scalability & Flexibility</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center mb-3">
                        <i
                          className="fa-solid fa-dollar-sign"
                          style={{ color: "#28a745", marginRight: "10px" }}
                        ></i>
                        <span>Reduced Infrastructure Costs</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center mb-3">
                        <i
                          className="fa-solid fa-shield-alt"
                          style={{ color: "#28a745", marginRight: "10px" }}
                        ></i>
                        <span>Enhanced Security & Compliance</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center mb-3">
                        <i
                          className="fa-solid fa-clock"
                          style={{ color: "#28a745", marginRight: "10px" }}
                        ></i>
                        <span>Faster Time-to-Market</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center">
                        <i
                          className="fa-solid fa-chart-line"
                          style={{ color: "#28a745", marginRight: "10px" }}
                        ></i>
                        <span>Improved Business Agility</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cloud Platforms */}
                <div className="cloud-platforms mb-40">
                  <h4 className="mb-30">Supported Cloud Platforms</h4>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div
                        className="platform-card text-center p-4"
                        style={{
                          border: "2px solid #e9ecef",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="platform-icon mb-3">
                          <i
                            className="fa-brands fa-aws"
                            style={{ fontSize: "3rem", color: "#FF9900" }}
                          ></i>
                        </div>
                        <h6>Amazon Web Services</h6>
                        <p className="small text-muted">
                          Comprehensive AWS migration and optimization services
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="platform-card text-center p-4"
                        style={{
                          border: "2px solid #e9ecef",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="platform-icon mb-3">
                          <i
                            className="fa-brands fa-microsoft"
                            style={{ fontSize: "3rem", color: "#0078D4" }}
                          ></i>
                        </div>
                        <h6>Microsoft Azure</h6>
                        <p className="small text-muted">
                          Enterprise Azure cloud solutions and migrations
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="platform-card text-center p-4"
                        style={{
                          border: "2px solid #e9ecef",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="platform-icon mb-3">
                          <i
                            className="fa-brands fa-google"
                            style={{ fontSize: "3rem", color: "#4285F4" }}
                          ></i>
                        </div>
                        <h6>Google Cloud Platform</h6>
                        <p className="small text-muted">
                          GCP infrastructure and data analytics solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mb-40">
                  Our experienced team ensures a smooth transition to the cloud
                  while maintaining business continuity. We provide end-to-end
                  support from initial assessment to post-migration
                  optimization, ensuring your organization realizes the full
                  benefits of cloud transformation.
                </p>

                <h3 className="title mb-30">Frequently Asked Questions</h3>
                <p className="mb-30">
                  Get answers to common questions about our cloud migration and
                  transformation services.
                </p>

                <div className="accordion" id="accordionExample">
                  <div
                    className="accordion-item shadow border-none"
                    data-aos="fade-down"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        className={
                          (imgTab == 0 ? "  " : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                      >
                        How long does a typical cloud migration take?
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
                          The timeline varies depending on the complexity and
                          size of your infrastructure. Simple migrations can
                          take 3-6 months, while complex enterprise migrations
                          may take 12-18 months. We provide detailed timelines
                          during our assessment phase.
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
                          (imgTab == 1 ? "  " : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What about data security during migration?
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
                          Security is our top priority. We implement end-to-end
                          encryption, secure transfer protocols, and
                          comprehensive access controls. Our migration process
                          follows industry best practices and compliance
                          requirements like GDPR, HIPAA, and SOC 2.
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
                    <h2 className="accordion-header" id="headingthree">
                      <button
                        className={
                          (imgTab == 2 ? "  " : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsethree"
                        aria-expanded="false"
                        aria-controls="collapsethree"
                      >
                        How do you ensure minimal downtime during migration?
                      </button>
                    </h2>
                    <div
                      id="collapsethree"
                      className={`accordion-collapse collapse${
                        imgTab === 2 ? " show " : ""
                      }`}
                      aria-labelledby="headingthree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We use proven migration strategies like phased
                          approaches, blue-green deployments, and real-time data
                          synchronization to minimize downtime. Most migrations
                          can be completed with less than 4 hours of downtime,
                          often during planned maintenance windows.
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
                          (imgTab == 3 ? "  " : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What post-migration support do you provide?
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
                          We provide comprehensive post-migration support
                          including 24/7 monitoring, performance optimization,
                          cost management, security updates, and ongoing
                          consultation. Our support packages are tailored to
                          your specific needs and SLA requirements.
                        </p>
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
                    <li className="active">
                      <Link href="/cloud-migration">
                        Cloud & Data Transformation
                      </Link>
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/product-engineering">
                        Product & Engineering Services
                      </Link>
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/strategic-consulting">
                        Strategic Consulting
                      </Link>
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/ai-services">AI as a Service</Link>
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                  </ul>
                </div>

                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">Migration Readiness</h4>
                  <div className="readiness-checklist">
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">
                        Current Infrastructure Assessment
                      </span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">
                        Security & Compliance Review
                      </span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">Cost-Benefit Analysis</span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">Migration Strategy Planning</span>
                    </div>
                  </div>
                </div>

                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">Contact Our Experts</h4>
                  <p className="mb-20 small">
                    Ready to start your cloud transformation journey? Our
                    certified cloud architects are here to help.
                  </p>
                  <div className="contact-info">
                    <div className="contact-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-phone"
                        style={{ color: "#3C72FC", marginRight: "10px" }}
                      ></i>
                      <span className="small">(+91) 9900297673</span>
                    </div>
                    <div className="contact-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-envelope"
                        style={{ color: "#3C72FC", marginRight: "10px" }}
                      ></i>
                      <span className="small">Operations@strat1.ai</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-one btn-sm w-100 mt-3">
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudMigrationSingle;
