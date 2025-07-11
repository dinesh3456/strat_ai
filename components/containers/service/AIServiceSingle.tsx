"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AIServiceSingle = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
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

              <h3 className="title mb-30">AI as a Service</h3>
              <h4 className="mb-20" style={{ color: "#3C72FC" }}>
                Future-Ready AI Capabilities to Keep You Ahead in the Digital
                Surge
              </h4>

              <p className="mb-20">
                Today, AI is the number one driver of business reinvention. We
                empower your business to thrive by embedding an AI-driven
                culture that drives long-term, sustainable growth through
                responsible AI solutions.
              </p>

              <p className="mb-40">
                At Strat1, our team of AI experts transforms your AI vision into
                meaningful breakthroughs. With deep expertise in Generative AI
                and machine learning, we help position our clients at the
                leading edge of their industries through the transformative
                force of AI.
              </p>

              <h4 className="mb-30">Our AI Development Services</h4>
              <div className="row g-4 mb-40">
                <div className="col-md-6">
                  <div
                    className="ai-service-card p-4"
                    style={{
                      border: "1px solid #e9ecef",
                      borderRadius: "10px",
                      height: "100%",
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
                    <div className="icon mb-3">
                      <i
                        className="fa-solid fa-brain"
                        style={{ fontSize: "2rem", color: "#3C72FC" }}
                      ></i>
                    </div>
                    <h5 className="mb-3">GenAI Development</h5>
                    <p>
                      Advanced LLM-powered solutions with seamless integration
                      and deployment to elevate productivity across your
                      business.
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
                    <div className="icon mb-3">
                      <i
                        className="fa-solid fa-handshake"
                        style={{ fontSize: "2rem", color: "#3C72FC" }}
                      ></i>
                    </div>
                    <h5 className="mb-3">AI Consulting</h5>
                    <p>
                      Future-ready AI roadmap development with focus on data
                      privacy, governance, and security best practices.
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
                    <div className="icon mb-3">
                      <i
                        className="fa-solid fa-robot"
                        style={{ fontSize: "2rem", color: "#3C72FC" }}
                      ></i>
                    </div>
                    <h5 className="mb-3">AI/ML Development</h5>
                    <p>
                      Custom machine learning models tailored to your business
                      needs, transforming operations and unlocking growth
                      opportunities.
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
                    <div className="icon mb-3">
                      <i
                        className="fa-solid fa-user-robot"
                        style={{ fontSize: "2rem", color: "#3C72FC" }}
                      ></i>
                    </div>
                    <h5 className="mb-3">AI Agent Development</h5>
                    <p>
                      Intelligent AI agents that process real-time data and
                      automate complex workflows for faster, smarter decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="ai-services-diagram mb-40">
                <div className="row">
                  <div className="col-12 text-center">
                    <Image
                      src="/images/service/ai-services-diagram.png"
                      alt="AI Services Comprehensive Solutions"
                      width={600}
                      height={600}
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>

              <h4 className="mb-20">Key AI Solutions</h4>
              <div className="row g-4 mb-40">
                <div className="col-lg-6">
                  <ul className="service-features">
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>
                      <strong>Predictive Analytics</strong> - Identify business
                      opportunities and threats through historical data analysis
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>
                      <strong>Computer Vision</strong> - Object recognition,
                      OCR, and visual data insights
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>
                      <strong>Cloud AI Solutions</strong> - MLOps tools for
                      continuous model quality and productivity
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="service-features">
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>
                      <strong>Anomaly Detection</strong> - Advanced fraud
                      detection and risk management systems
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>
                      <strong>AI Model Assessment</strong> - Performance
                      optimization and compliance evaluation
                    </li>
                    <li className="mb-15">
                      <i className="fa-solid fa-check"></i>
                      <strong>Natural Language Processing</strong> - Text
                      analysis and automated content generation
                    </li>
                  </ul>
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
                        Computer Vision systems, Natural Language Processing, AI
                        agents, predictive analytics, and cloud-based AI
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
                        including encryption, secure data pipelines, compliance
                        with regulations like GDPR, role-based access controls,
                        and regular security audits. Our AI governance framework
                        ensures responsible AI development and deployment.
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
                        enterprise-scale solutions. We provide detailed project
                        roadmaps during the planning phase with clear milestones
                        and deliverables.
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
                        improvement. Our support packages are customized to your
                        specific needs and SLA requirements.
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
                  <li className="active">
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
                </ul>
              </div>

              <div className="item sub-bg mb-30">
                <h4 className="mb-20">AI Readiness Assessment</h4>
                <div className="readiness-checklist">
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{
                        color: "#28a745",
                        marginRight: "10px",
                        fontSize: "1rem",
                      }}
                    ></i>
                    <p className="mb-0">Data Quality & Infrastructure Review</p>
                  </div>
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{
                        color: "#28a745",
                        marginRight: "10px",
                        fontSize: "1rem",
                      }}
                    ></i>
                    <p className="mb-0">
                      AI Strategy & Use Case Identification
                    </p>
                  </div>
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{
                        color: "#28a745",
                        marginRight: "10px",
                        fontSize: "1rem",
                      }}
                    ></i>
                    <p className="mb-0">ROI Analysis & Business Impact</p>
                  </div>
                  <div className="checklist-item d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{
                        color: "#28a745",
                        marginRight: "10px",
                        fontSize: "1rem",
                      }}
                    ></i>
                    <p className="mb-0">Implementation Roadmap Planning</p>
                  </div>
                </div>
              </div>

              <div className="item sub-bg mb-30">
                <Link
                  href="/contact"
                  className="btn-one btn-sm w-100 d-flex justify-content-between align-items-center"
                >
                  Get AI Consultation
                  <i className="fa-regular fa-arrow-right-long ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServiceSingle;
