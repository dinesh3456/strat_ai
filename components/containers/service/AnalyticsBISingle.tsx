"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/service/service-single-image.jpg";

const AnalyticsBISingle = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="service-single-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="service-single__left-item">
              <div className="image mb-40">
                <Image src={One} alt="Analytics BI Service" priority />
              </div>
              <h3 className="title mb-30">
                Advanced Analytics & Business Intelligence
              </h3>
              <p className="mb-30">
                Transform your organization into a data-driven powerhouse with
                our comprehensive Advanced Analytics & Business Intelligence
                services. We help you unlock the full potential of your data
                through cutting-edge analytics, machine learning, and
                intelligent automation solutions.
              </p>

              <p className="mb-40">
                Our comprehensive suite of services ensures that your data
                becomes your most valuable strategic asset. From raw data
                ingestion to actionable insights, we provide end-to-end
                solutions that drive measurable business outcomes and
                competitive advantage.
              </p>

              {/* Tools & Technologies */}
              <div className="row g-4 mt-40 mb-40">
                <div className="col-12">
                  <h4 className="mb-30">Tools & Technologies We Use</h4>
                  <div className="row g-4">
                    <div className="col-md-3">
                      <div
                        className="tool-card text-center p-4"
                        style={{
                          border: "2px solid #e9ecef",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="tool-icon mb-3">
                          <i
                            className="fa-solid fa-chart-line"
                            style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                          ></i>
                        </div>
                        <h6>Power BI</h6>
                        <p className="small text-muted">
                          Interactive dashboards and reports
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div
                        className="tool-card text-center p-4"
                        style={{
                          border: "2px solid #e9ecef",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="tool-icon mb-3">
                          <i
                            className="fa-brands fa-python"
                            style={{ fontSize: "2.5rem", color: "#3776ab" }}
                          ></i>
                        </div>
                        <h6>Python</h6>
                        <p className="small text-muted">
                          Advanced analytics and ML modeling
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div
                        className="tool-card text-center p-4"
                        style={{
                          border: "2px solid #e9ecef",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="tool-icon mb-3">
                          <i
                            className="fa-solid fa-database"
                            style={{ fontSize: "2.5rem", color: "#336791" }}
                          ></i>
                        </div>
                        <h6>SQL & Snowflake</h6>
                        <p className="small text-muted">
                          Data warehousing and processing
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div
                        className="tool-card text-center p-4"
                        style={{
                          border: "2px solid #e9ecef",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="tool-icon mb-3">
                          <i
                            className="fa-brands fa-microsoft"
                            style={{ fontSize: "2.5rem", color: "#0078D4" }}
                          ></i>
                        </div>
                        <h6>Azure ML</h6>
                        <p className="small text-muted">
                          Machine learning and AI services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div className="row g-4 mt-40 mb-40">
                <div className="col-12">
                  <h4 className="mb-30">Our Comprehensive Services</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div
                        className="service-feature-item p-4"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="icon mb-3">
                          <i
                            className="fa-solid fa-chart-pie"
                            style={{ fontSize: "2rem", color: "#3C72FC" }}
                          ></i>
                        </div>
                        <h5 className="mb-2">Custom Dashboard Development</h5>
                        <p className="small">
                          Create intuitive and interactive dashboards that
                          provide real-time, 360-degree view of your business
                          with key performance indicators.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-feature-item p-4"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="icon mb-3">
                          <i
                            className="fa-solid fa-brain"
                            style={{ fontSize: "2rem", color: "#3C72FC" }}
                          ></i>
                        </div>
                        <h5 className="mb-2">
                          Predictive Analytics & Forecasting
                        </h5>
                        <p className="small">
                          Leverage machine learning and statistical modeling to
                          forecast future outcomes, from sales and demand to
                          customer behavior.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-feature-item p-4"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="icon mb-3">
                          <i
                            className="fa-solid fa-warehouse"
                            style={{ fontSize: "2rem", color: "#3C72FC" }}
                          ></i>
                        </div>
                        <h5 className="mb-2">Data Warehousing & ETL</h5>
                        <p className="small">
                          Design and implement robust data warehousing solutions
                          with clean, consistent ETL processes for
                          analysis-ready data.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-feature-item p-4"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="icon mb-3">
                          <i
                            className="fa-solid fa-users-gear"
                            style={{ fontSize: "2rem", color: "#3C72FC" }}
                          ></i>
                        </div>
                        <h5 className="mb-2">Self-Service BI</h5>
                        <p className="small">
                          Empower your team with self-service BI tools and
                          training, fostering a data-driven culture throughout
                          your organization.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-feature-item p-4"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="icon mb-3">
                          <i
                            className="fa-solid fa-comments"
                            style={{ fontSize: "2rem", color: "#3C72FC" }}
                          ></i>
                        </div>
                        <h5 className="mb-2">NLP & Text Analytics</h5>
                        <p className="small">
                          Extract insights from unstructured data like customer
                          reviews, social media, and support tickets using
                          advanced NLP.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-feature-item p-4"
                        style={{
                          background: "#f8f9ff",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="icon mb-3">
                          <i
                            className="fa-solid fa-shield-halved"
                            style={{ fontSize: "2rem", color: "#3C72FC" }}
                          ></i>
                        </div>
                        <h5 className="mb-2">Data Governance & Quality</h5>
                        <p className="small">
                          Ensure accuracy, consistency, and security of your
                          data with comprehensive governance frameworks and
                          quality management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="row g-4 mt-40 mb-40">
                <div className="col-12">
                  <h4 className="mb-30">Real-World Use Cases</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="use-case-item">
                        <h6 className="mb-2">
                          <i
                            className="fa-solid fa-chart-line me-2"
                            style={{ color: "#3C72FC" }}
                          ></i>
                          Sales Forecasting
                        </h6>
                        <p className="small text-muted">
                          ML-driven predictions and data insights for better
                          inventory planning and resource allocation.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="use-case-item">
                        <h6 className="mb-2">
                          <i
                            className="fa-solid fa-user-minus me-2"
                            style={{ color: "#3C72FC" }}
                          ></i>
                          Customer Churn Analysis
                        </h6>
                        <p className="small text-muted">
                          Identify patterns in user behavior and generate
                          targeted retention strategies.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="use-case-item">
                        <h6 className="mb-2">
                          <i
                            className="fa-solid fa-truck me-2"
                            style={{ color: "#3C72FC" }}
                          ></i>
                          Supply Chain Monitoring
                        </h6>
                        <p className="small text-muted">
                          Real-time alerts on anomalies or delays with visual
                          root cause analysis.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="use-case-item">
                        <h6 className="mb-2">
                          <i
                            className="fa-solid fa-file-invoice-dollar me-2"
                            style={{ color: "#3C72FC" }}
                          ></i>
                          Financial Reporting
                        </h6>
                        <p className="small text-muted">
                          Automatically generate narrative explanations of
                          monthly results and cost variances.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="use-case-item">
                        <h6 className="mb-2">
                          <i
                            className="fa-solid fa-gauge-high me-2"
                            style={{ color: "#3C72FC" }}
                          ></i>
                          Operational Intelligence
                        </h6>
                        <p className="small text-muted">
                          Live dashboards and trend tracking across
                          high-velocity data streams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Impact */}
              <div className="strategic-impact mt-40 mb-40">
                <h4 className="mb-30">Strategic Impact</h4>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div
                      className="impact-item text-center p-4"
                      style={{ background: "#f0f8ff", borderRadius: "10px" }}
                    >
                      <i
                        className="fa-solid fa-chart-column mb-3"
                        style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                      ></i>
                      <h6>Margin Improvements</h6>
                      <p className="small">
                        Drive cost analysis and operational efficiency
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="impact-item text-center p-4"
                      style={{ background: "#f0f8ff", borderRadius: "10px" }}
                    >
                      <i
                        className="fa-solid fa-users mb-3"
                        style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                      ></i>
                      <h6>Customer Engagement</h6>
                      <p className="small">
                        Enhance through behavioral analytics and segmentation
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="impact-item text-center p-4"
                      style={{ background: "#f0f8ff", borderRadius: "10px" }}
                    >
                      <i
                        className="fa-solid fa-shield-check mb-3"
                        style={{ fontSize: "2.5rem", color: "#3C72FC" }}
                      ></i>
                      <h6>Compliance Ready</h6>
                      <p className="small">
                        Streamline audit readiness with clean, traceable
                        workflows
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-40">
                Our experienced analytics team ensures seamless integration with
                your existing systems while maintaining data security and
                compliance. We provide end-to-end support from initial data
                assessment to advanced analytics implementation, ensuring your
                organization realizes the full potential of data-driven
                insights.
              </p>

              <h3 className="title mb-30">Frequently Asked Questions</h3>
              <p className="mb-30">
                Get answers to common questions about our Advanced Analytics &
                Business Intelligence services.
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
                        What types of data sources can you integrate?
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
                          We can integrate virtually any data source including
                          databases (SQL, NoSQL), cloud platforms (AWS, Azure,
                          GCP), SaaS applications (Salesforce, HubSpot), APIs,
                          flat files (CSV, Excel), and real-time streaming data.
                          Our ETL processes ensure seamless data integration
                          regardless of format or source.
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
                        How long does it take to implement a BI solution?
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
                          Implementation timelines vary based on complexity and
                          scope. Simple dashboard projects typically take 4-8
                          weeks, while comprehensive BI solutions with data
                          warehousing can take 3-6 months. We use agile
                          methodologies to deliver value incrementally
                          throughout the project.
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
                        Do you provide training for our internal teams?
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
                          Yes, we provide comprehensive training programs
                          including end-user training for dashboard usage,
                          power-user training for report creation, and technical
                          training for data management. We also offer ongoing
                          support and knowledge transfer to ensure your team can
                          maintain and expand the solutions.
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
                        How do you ensure data security and compliance?
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
                          We implement enterprise-grade security measures
                          including data encryption, role-based access controls,
                          audit trails, and compliance frameworks (GDPR, HIPAA,
                          SOC 2). All solutions are designed with security-first
                          principles and regular security assessments to
                          maintain the highest standards of data protection.
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
                  <li className="active">
                    <Link href="/analytics-bi-services">
                      Advanced Analytics & BI
                    </Link>
                    <i className="fa-regular fa-arrow-right-long primary-color"></i>
                  </li>
                </ul>
              </div>

              <div className="item sub-bg mb-30">
                <h4 className="mb-20">Key Benefits</h4>
                <ul className="category">
                  <li>
                    <i className="fa-solid fa-check me-2"></i>
                    Real-time business insights
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-2"></i>
                    Improved decision making
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-2"></i>
                    Enhanced productivity
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-2"></i>
                    Cost optimization
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-2"></i>
                    Competitive advantage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsBISingle;
