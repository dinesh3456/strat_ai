"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../layout/footer/Footer";

const AIServiceSingle = () => {
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
                    src="/images/service/ai-services-hero.jpg"
                    alt="AI as a Service"
                    width={800}
                    height={400}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* STEP 1: Title + Text */}
                <h3 className="title mb-30">AI as a Service</h3>
                <h4 className="mb-20" style={{ color: "#3C72FC" }}>
                  Future-Ready AI Capabilities to Keep You Ahead in the Digital
                  Surge
                </h4>

                <p className="mb-20">
                  In the last 30 years, no technology has promised to change
                  everything across a business—until generative AI. Today, AI is
                  the number one driver of business reinvention. And data
                  readiness is one of the most important factors for AI success.
                </p>

                <p className="mb-20">
                  We empower your business to thrive by embedding an AI-driven
                  culture that drives long-term, sustainable growth.
                </p>

                <h4 className="mb-20">
                  Decode, Develop, and Dominate with an AI Edge
                </h4>
                <p className="mb-20">
                  Accelerate your AI journey and transform million-dollar ideas
                  into viable solutions with our comprehensive insights,
                  technical guides, and success stories.
                </p>

                <p className="mb-40">
                  We deliver responsible AI solutions tailored to tackle
                  real-world business challenges, driving greater efficiency and
                  sparking innovation. At Strat1, our team of AI experts
                  operates as methodical innovators—transforming your AI vision
                  into meaningful breakthroughs. With a dynamic blend of
                  experience and forward-thinking, we help position our clients
                  at the leading edge of their industries through the
                  transformative force of AI.
                </p>

                <p className="mb-40">
                  Our deep-rooted expertise in Generative AI and broader
                  artificial intelligence capabilities brings measurable value
                  to your enterprise. As early adopters and pioneers, we
                  emphasize meticulous data preparation, cleansing, and
                  transformation—ensuring your organization is fully primed for
                  GenAI success. Gain a competitive advantage by harnessing our
                  AI-powered Data Analytics and application engineering services
                  to unlock the full potential of your data.
                </p>

                {/* STEP 3: Custom AI Development Services */}
                <h4 className="mb-30">Custom AI Development Services</h4>
                <div className="row g-4 mb-40">
                  <div className="col-md-6">
                    <div
                      className="ai-service-card p-4"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "10px",
                        height: "100%",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-brain"
                          style={{ fontSize: "2rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5 className="mb-3">GenAI Development</h5>
                      <p className="small">
                        Unlock the true potential of Generative AI with advanced
                        LLM-powered solutions. We ensure seamless integration
                        and deployment to elevate productivity and streamline
                        operations across your business.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="ai-service-card p-4"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "10px",
                        height: "100%",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-handshake"
                          style={{ fontSize: "2rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5 className="mb-3">AI Consulting</h5>
                      <p className="small">
                        Partner with our seasoned consultants to define and
                        implement a future-ready AI roadmap. We help you adopt
                        cutting-edge AI technologies with a strong focus on data
                        privacy, governance, and security.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="ai-service-card p-4"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "10px",
                        height: "100%",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-robot"
                          style={{ fontSize: "2rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5 className="mb-3">AI/ML Development</h5>
                      <p className="small">
                        Drive innovation through bespoke machine learning models
                        tailored to your unique business needs. Our AI-first
                        approach transforms operations, enhances insights, and
                        unlocks new growth opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="ai-service-card p-4"
                      style={{
                        border: "1px solid #e9ecef",
                        borderRadius: "10px",
                        height: "100%",
                      }}
                    >
                      <div className="icon mb-3">
                        <i
                          className="fa-solid fa-user-robot"
                          style={{ fontSize: "2rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <h5 className="mb-3">AI Agent Development</h5>
                      <p className="small">
                        Leverage intelligent AI agents that process real-time
                        data, automate complex workflows, and empower your team
                        to make faster, smarter decisions with confidence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 4: AI Development Process (4 steps) */}
                <div className="row g-4 mt-40 mb-40">
                  <div className="col-12">
                    <h4 className="mb-30">Our AI Development Process</h4>
                    <div className="row g-4">
                      <div className="col-md-3">
                        <div
                          className="process-item text-center p-4"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-lightbulb"
                              style={{ fontSize: "2rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5 className="mb-2">AI Strategy & Planning</h5>
                          <p className="small">
                            Define AI roadmap with focus on data privacy,
                            governance, and security
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div
                          className="process-item text-center p-4"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-database"
                              style={{ fontSize: "2rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5 className="mb-2">Data Preparation</h5>
                          <p className="small">
                            Meticulous data cleansing, transformation, and
                            preparation for AI success
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div
                          className="process-item text-center p-4"
                          style={{
                            background: "#f8f9ff",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="icon mb-3">
                            <i
                              className="fa-solid fa-cogs"
                              style={{ fontSize: "2rem", color: "#3C72FC" }}
                            ></i>
                          </div>
                          <h5 className="mb-2">AI Model Development</h5>
                          <p className="small">
                            Build and train custom AI models tailored to your
                            business requirements
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                          <h5 className="mb-2">Deployment & Optimization</h5>
                          <p className="small">
                            Seamless integration with continuous monitoring and
                            optimization
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STEP 5: Use Cases */}
                <div className="row g-5 mt-40 mb-40 align-items-center">
                  <div className="col-lg-6">
                    <h4 className="mb-20">AI Use Cases & Solutions</h4>
                    <ul className="service-features">
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Predictive Analytics Consulting</strong> -
                        Leverages predictive modeling to help companies identify
                        business opportunities and threats by analyzing trends
                        in historical data
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Computer Vision Services</strong> - Helps
                        companies integrate computer vision capabilities (object
                        recognition, OCR, etc.) to derive actionable insights
                        from visual data
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Cloud-based AI Solutions</strong> - Help
                        businesses maximize AI value by adopting cloud-based
                        services and MLOps tools, ensuring continuous model
                        quality and productivity
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>Anomaly Detection</strong> - Build advanced
                        anomaly detection systems that identify different types
                        of fraud and malfunctions, helping companies improve
                        risk management
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>
                        <strong>AI Model Assessment</strong> - Offers
                        comprehensive AI model assessment services, optimizing
                        model performance, accuracy, and compliance through
                        detailed evaluations and tuning
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <div className="use-cases-grid">
                      <div
                        className="use-case-item mb-3 p-3"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "8px",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        <h6 className="mb-1">Inventory Management</h6>
                        <small>
                          Optimize stock levels with AI-driven insights and
                          automated supply chain management
                        </small>
                      </div>
                      <div
                        className="use-case-item mb-3 p-3"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "8px",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        <h6 className="mb-1">Medical Image Analysis</h6>
                        <small>
                          Advanced diagnostic support through AI-powered medical
                          imaging and pattern recognition
                        </small>
                      </div>
                      <div
                        className="use-case-item mb-3 p-3"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "8px",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        <h6 className="mb-1">Video Surveillance</h6>
                        <small>
                          Intelligent monitoring and security solutions with
                          real-time threat detection
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="title mb-30">Frequently Asked Questions</h3>
                <p className="mb-30">
                  Get answers to common questions about our AI services and
                  implementation.
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
                        What types of AI solutions do you develop?
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
                          We develop a comprehensive range of AI solutions
                          including Generative AI, Machine Learning models,
                          Computer Vision systems, Natural Language Processing,
                          AI agents, predictive analytics, and cloud-based AI
                          platforms tailored to your specific business needs.
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
                        How do you ensure data privacy and security in AI
                        implementations?
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
                          We follow industry best practices for data security
                          including encryption, secure data pipelines,
                          compliance with regulations like GDPR, role-based
                          access controls, and regular security audits. Our AI
                          governance framework ensures responsible AI
                          development and deployment.
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
                        What is the typical timeline for AI project
                        implementation?
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
                          Project timelines vary based on complexity, from 2-3
                          months for basic AI implementations to 6-12 months for
                          enterprise-scale solutions. We provide detailed
                          project roadmaps during the planning phase with clear
                          milestones and deliverables.
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
                        Do you provide ongoing support and maintenance for AI
                        systems?
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
                          Yes, we provide comprehensive post-deployment support
                          including model monitoring, performance optimization,
                          retraining services, technical support, and continuous
                          improvement. Our support packages are customized to
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
                    <li>
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
                    <li className="active">
                      <Link href="/ai-services">AI as a Service</Link>
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                  </ul>
                </div>

                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">AI Readiness Assessment</h4>
                  <div className="readiness-checklist">
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">
                        Data Quality & Infrastructure Review
                      </span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">
                        AI Strategy & Use Case Identification
                      </span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">
                        ROI Analysis & Business Impact
                      </span>
                    </div>
                    <div className="checklist-item d-flex align-items-center mb-3">
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "#28a745", marginRight: "10px" }}
                      ></i>
                      <span className="small">
                        Implementation Roadmap Planning
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">Contact Our AI Experts</h4>
                  <p className="mb-20 small">
                    Ready to transform your business with AI? Our certified AI
                    specialists are here to help you unlock the potential of
                    artificial intelligence.
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
                    Get Free AI Consultation
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

export default AIServiceSingle;
