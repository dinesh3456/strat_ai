"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ManagedITServicesSingle = () => {
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
                    src="/images/service/managed-it-services-hero.jpg"
                    alt="Managed IT Services"
                    width={800}
                    height={400}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <h3 className="title mb-30">Managed IT Services</h3>
                <h4 className="mb-20" style={{ color: "#3C72FC" }}>
                  Scalable, flexible and fully managed IT solutions
                </h4>

                <p className="mb-20">
                  Managed IT services across cybersecurity, risk, network,
                  cloud, cloud calling, governance and support. Our
                  comprehensive approach simplifies your IT environment, helping
                  your organization better focus on customer acquisition and
                  growth through expert staff, leading-edge technology and
                  innovative processes.
                </p>

                <p className="mb-20">
                  Modern digital demands require an IT infrastructure that is
                  secure, scalable and always accessible. With Strat1 Managed IT
                  Services, you can rely on enterprise-grade technology, expert
                  management and around-the-clock support to maintain peak
                  performance across your systems -- all while reducing
                  operational risk and costs.
                </p>

                <p className="mb-40">
                  Our team delivers tailored IT management services that empower
                  businesses to focus on growth, innovation and customer
                  experiences while we handle the complexity behind the scenes.
                </p>

                {/* Five Building Blocks Diagram */}
                <div className="row g-4 mb-50">
                  <div className="col-12">
                    <h4 className="mb-30 text-center">
                      Five Building Blocks of Next-Gen Managed Services
                    </h4>
                    <div
                      className="building-blocks-container text-center"
                      style={{
                        background: "#f8f9ff",
                        borderRadius: "20px",
                        padding: "30px",
                      }}
                    >
                      <Image
                        src="/images/service/five-building-blocks-diagram.png"
                        alt="Five Building Blocks of Next-Gen Managed Services"
                        width={600}
                        height={400}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "600px",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Core Managed IT Services */}
                <h4 className="mb-30">Core Managed IT Services</h4>
                <div className="row g-4 mb-40">
                  {/* First Row - 3 Cards */}
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="service-card p-4 h-100"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-network-wired"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5
                        className="mb-3"
                        style={{ color: "#333", fontWeight: "600" }}
                      >
                        Network Management and Security
                      </h5>
                      <p
                        className="small"
                        style={{ color: "#666", lineHeight: "1.6" }}
                      >
                        Secure your network with real-time monitoring and threat
                        detection. Our comprehensive network management ensures
                        optimal performance and security.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="service-card p-4 h-100"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-cloud"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5
                        className="mb-3"
                        style={{ color: "#333", fontWeight: "600" }}
                      >
                        Cloud Hosting and Migration
                      </h5>
                      <p
                        className="small"
                        style={{ color: "#666", lineHeight: "1.6" }}
                      >
                        Seamlessly move to the cloud or optimize your existing
                        cloud infrastructure. Expert cloud management for
                        maximum efficiency and scalability.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="service-card p-4 h-100"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-laptop"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5
                        className="mb-3"
                        style={{ color: "#333", fontWeight: "600" }}
                      >
                        Endpoint Device Management
                      </h5>
                      <p
                        className="small"
                        style={{ color: "#666", lineHeight: "1.6" }}
                      >
                        Keep your workforce connected and protected with fully
                        managed devices. Complete lifecycle management for all
                        your endpoint devices.
                      </p>
                    </div>
                  </div>

                  {/* Second Row - 2 Cards Centered */}
                  <div className="col-lg-6 col-md-6">
                    <div
                      className="service-card p-4 h-100"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-headset"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5
                        className="mb-3"
                        style={{ color: "#333", fontWeight: "600" }}
                      >
                        IT Helpdesk Services
                      </h5>
                      <p
                        className="small"
                        style={{ color: "#666", lineHeight: "1.6" }}
                      >
                        Count on 24/7 expert technical support for rapid issue
                        resolution. Multi-level support structure for all your
                        IT needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div
                      className="service-card p-4 h-100"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-shield-alt"
                          style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5
                        className="mb-3"
                        style={{ color: "#333", fontWeight: "600" }}
                      >
                        Compliance and Risk Management
                      </h5>
                      <p
                        className="small"
                        style={{ color: "#666", lineHeight: "1.6" }}
                      >
                        Meet regulatory requirements with confidence through
                        best-in-class IT governance frameworks and comprehensive
                        risk assessment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Managed IT Process - FIXED ALIGNMENT */}
                <div className="row g-4 mt-40 mb-40">
                  <div className="col-12">
                    <h4 className="mb-30 text-center">
                      Our Managed IT Process
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-3 col-sm-6">
                        <div
                          className="process-item text-center p-4 h-100 d-flex flex-column"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "15px",
                            border: "2px solid #e9ecef",
                            minHeight: "280px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-search"
                              style={{ fontSize: "3rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5
                            className="mb-3"
                            style={{ color: "#333", fontWeight: "600" }}
                          >
                            Assessment & Planning
                          </h5>
                          <p
                            className="small flex-grow-1 d-flex align-items-center"
                            style={{
                              color: "#666",
                              lineHeight: "1.5",
                            }}
                          >
                            Comprehensive evaluation of your current IT
                            infrastructure and requirements
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div
                          className="process-item text-center p-4 h-100 d-flex flex-column"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "15px",
                            border: "2px solid #e9ecef",
                            minHeight: "280px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-cogs"
                              style={{ fontSize: "3rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5
                            className="mb-3"
                            style={{ color: "#333", fontWeight: "600" }}
                          >
                            Implementation
                          </h5>
                          <p
                            className="small flex-grow-1 d-flex align-items-center"
                            style={{
                              color: "#666",
                              lineHeight: "1.5",
                            }}
                          >
                            Seamless deployment of managed services with minimal
                            disruption
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div
                          className="process-item text-center p-4 h-100 d-flex flex-column"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "15px",
                            border: "2px solid #e9ecef",
                            minHeight: "280px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-eye"
                              style={{ fontSize: "3rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5
                            className="mb-3"
                            style={{ color: "#333", fontWeight: "600" }}
                          >
                            Monitoring & Support
                          </h5>
                          <p
                            className="small flex-grow-1 d-flex align-items-center"
                            style={{
                              color: "#666",
                              lineHeight: "1.5",
                            }}
                          >
                            24/7 proactive monitoring and expert support for
                            optimal performance
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div
                          className="process-item text-center p-4 h-100 d-flex flex-column"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "15px",
                            border: "2px solid #e9ecef",
                            minHeight: "280px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-chart-line"
                              style={{ fontSize: "3rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5
                            className="mb-3"
                            style={{ color: "#333", fontWeight: "600" }}
                          >
                            Optimization
                          </h5>
                          <p
                            className="small flex-grow-1 d-flex align-items-center"
                            style={{
                              color: "#666",
                              lineHeight: "1.5",
                            }}
                          >
                            Continuous improvement and optimization for enhanced
                            efficiency
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Managed Services */}
                <div className="row g-5 mt-40 mb-40 align-items-center">
                  <div className="col-lg-6">
                    <h4 className="mb-20">Why Choose Managed IT Services</h4>
                    <ul className="service-features">
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Reduction of Incidents</strong> - Proactive
                        monitoring and maintenance to prevent issues before they
                        occur
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Improved End User Experience</strong> - Enhanced
                        system performance and reliability for better
                        productivity
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Improvement of CSAT</strong> - Higher customer
                        satisfaction through reliable IT services
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Improved TAT</strong> - Faster turnaround times
                        for issue resolution and service delivery
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Cost Optimization</strong> - Reduced operational
                        costs through efficient resource management
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="service-benefits p-4"
                      style={{ background: "#f8f9ff", borderRadius: "15px" }}
                    >
                      <h5 className="mb-3" style={{ color: "#3C72FC" }}>
                        Managed IT Service Benefits
                      </h5>
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
                        <span>24/7 Monitoring & Support</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center mb-3">
                        <i
                          className="fa-solid fa-dollar-sign"
                          style={{ color: "#28a745", marginRight: "10px" }}
                        ></i>
                        <span>Predictable IT Costs</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center mb-3">
                        <i
                          className="fa-solid fa-users"
                          style={{ color: "#28a745", marginRight: "10px" }}
                        ></i>
                        <span>Expert IT Team Access</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center">
                        <i
                          className="fa-solid fa-rocket"
                          style={{ color: "#28a745", marginRight: "10px" }}
                        ></i>
                        <span>Focus on Core Business</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="title mb-30">Frequently Asked Questions</h3>
                <p className="mb-30">
                  Get answers to common questions about our managed IT services.
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
                        What is included in your managed IT services?
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
                          Our managed IT services include network management and
                          security, cloud hosting and migration, endpoint device
                          management, 24/7 IT helpdesk services, compliance and
                          risk management, cybersecurity, and ongoing system
                          optimization.
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
                        How do you ensure business continuity?
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
                          We ensure business continuity through proactive
                          monitoring, redundant systems, comprehensive backup
                          solutions, disaster recovery planning, and 24/7
                          support. Our approach minimizes downtime and maintains
                          critical business operations.
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
                          (imgTab == 2 ? "  " : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What are your response times for IT issues?
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
                          Our response times vary by severity level: Critical
                          issues receive immediate response (within 15 minutes),
                          high priority issues within 1 hour, medium priority
                          within 4 hours, and low priority within 24 hours. We
                          maintain detailed SLAs for all service levels.
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
                        How do you handle data security and compliance?
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
                          We implement multi-layered security measures including
                          encryption, access controls, regular security audits,
                          and compliance monitoring. Our services meet industry
                          standards like ISO 27001, SOC 2, GDPR, and other
                          regulatory requirements specific to your industry.
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
                    <li className="active">
                      <Link href="/managed-it-services">
                        Managed IT Services
                      </Link>
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                  </ul>
                </div>

                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">IT Readiness Assessment</h4>
                  <div className="readiness-checklist">
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">
                        Current IT Infrastructure Assessment
                      </span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">Security & Compliance Audit</span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">
                        Service Level Agreement Design
                      </span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">Managed Service Roadmap</span>
                    </div>
                  </div>
                </div>

                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">Contact Our IT Experts</h4>
                  <p className="mb-20 small">
                    Ready to simplify your IT management? Our certified IT
                    specialists are here to help you optimize your technology
                    infrastructure.
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
                      <span className="small">operations@strat1.ai</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-one btn-sm w-100 mt-3">
                    Get Free IT Assessment
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

export default ManagedITServicesSingle;
