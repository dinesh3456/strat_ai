"use client";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/icon/section-title.png";
import ServiceShape from "@/public/images/shape/service-two-item-shape.png";
import OfferShapeTop from "@/public/images/shape/offter-item-shape-top.png";
import OfferShapeBottom from "@/public/images/shape/offter-item-shape-bottom.png";

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Business Program Manager (Partner Enablement)",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead strategic partnerships and drive collaboration with deep tech knowledge and GSI expertise. Deliver executive-level presentations while managing sales enablement, alliances, and pre-sales initiatives with strong analytical capabilities.",
      skills: [
        "Sales Enablement",
        "Partnership Management",
        "Executive Presentations",
        "Business Analysis",
        "Strategic Planning",
        "Stakeholder Management",
      ],
    },
    {
      id: 2,
      title: "Power Platform Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Design and develop innovative solutions using Microsoft Power Platform to streamline business processes and drive automation. Work with our Global Partner Enablement Team to create scalable technical solutions that transform business operations.",
      skills: [
        "Power Apps",
        "Power Automate",
        "Power BI",
        "JavaScript",
        "C#",
        "SQL",
        "API Integration",
        "Solution Architecture",
      ],
    },
  ];

  const coreValues = [
    {
      icon: "fa-solid fa-lightbulb",
      title: "Innovation First",
      description: "Leading with cutting-edge solutions",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Continuous Growth",
      description: "Always learning and improving",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Cutting-Edge Impact",
      description: "Making meaningful difference",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Team Excellence",
      description: "Collaboration and partnership",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-120 pb-120 sub-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className=""
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <h5 className="primary-color mb-15">
                  <Image className="me-1" src={One} alt="icon" priority />
                  JOIN OUR TEAM
                </h5>
                <h1 className="mb-20">
                  Shape the Future of{" "}
                  <span className="primary-color">Technology</span>
                </h1>
                <h4 className="mb-30">Where Innovation Meets Impact</h4>
                <p className="mb-40">
                  Join our team and be part of a dynamic organization that
                  transforms businesses through cutting-edge AI, cloud
                  solutions, and strategic consulting. We're looking for
                  passionate professionals who want to make a meaningful impact
                  on Fortune 500 clients worldwide.
                </p>
                <Link href="#open-positions" className="btn-one">
                  Explore Opportunities{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div
                  className="career-hero-visual d-flex justify-content-center align-items-center sub-bg"
                  style={{
                    height: "300px",
                    borderRadius: "15px",
                    border: "2px solid #e9ecef",
                  }}
                >
                  <div className="text-center">
                    <i
                      className="fa-solid fa-users"
                      style={{
                        fontSize: "4rem",
                        color: "#3C72FC",
                        marginBottom: "20px",
                      }}
                    ></i>
                    <h4 className="primary-color">Team Collaboration</h4>
                    <p className="mb-0">Building the future together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-header mb-60"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <h5 className="primary-color">
                  <Image className="me-1" src={One} alt="icon" priority />
                  WHY JOIN US
                </h5>
                <h2 className="">
                  Empowering <span className="primary-color">Excellence</span>{" "}
                  Together
                </h2>
                <h4 className="primary-color mt-15 mb-25">
                  Be part of something extraordinary
                </h4>
                <p className="">
                  We empower ambitious professionals to transform organizations
                  through advanced technology and innovation. Our team delivers
                  meaningful impact for clients, industries, and communities
                  worldwide. Join us in solving what truly matters.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <h3 className="mb-30">Our Core Values</h3>

                <div className="row g-4">
                  {coreValues.map((value, index) => (
                    <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                      <div className="offer__item text-center">
                        <div className="shape-top">
                          <Image src={OfferShapeTop} alt="shape" priority />
                        </div>
                        <div className="shape-bottom">
                          <Image src={OfferShapeBottom} alt="shape" priority />
                        </div>
                        <div className="offer__icon mb-3">
                          <i
                            className={value.icon}
                            style={{ fontSize: "2.5rem", color: "white" }}
                          ></i>
                        </div>
                        <h4 className="text-white mb-2">{value.title}</h4>
                        <p
                          className="text-white small mb-0"
                          style={{ opacity: 0.8 }}
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="pt-120 pb-120 sub-bg">
        <div className="container">
          <div
            className="section-header text-center mb-60"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <h5 className="primary-color">
              <Image className="me-1" src={One} alt="icon" priority />
              CURRENT OPPORTUNITIES
            </h5>
            <h2 className="">Available Positions</h2>
            <p className="mt-15">
              Join our team and help shape the future of technology consulting
            </p>
          </div>

          <div className="row g-4">
            {jobOpenings.map((job, index) => {
              // Define specific icons for each job role
              const getJobIcon = (jobId: number): string => {
                switch (jobId) {
                  case 1: // Business Program Manager
                    return "fa-solid fa-handshake";
                  case 2: // Power Platform Developer
                    return "fa-solid fa-code";
                  default:
                    return "fa-solid fa-briefcase";
                }
              };

              return (
                <div
                  key={job.id}
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1500"
                >
                  <div className="service-two__item h-100">
                    <div className="service-two__content">
                      <div className="icon">
                        <i
                          className={getJobIcon(job.id)}
                          style={{ fontSize: "3rem", color: "#3C72FC" }}
                        ></i>
                      </div>
                      <div className="shape">
                        <Image src={ServiceShape} alt="shape" priority />
                      </div>
                      <h4>
                        <span className="primary-hover">{job.title}</span>
                      </h4>

                      <div className="job-meta d-flex gap-3 mb-15">
                        <span className="primary-color">
                          <i className="fa-solid fa-location-dot me-2"></i>
                          {job.location}
                        </span>
                        <span className="primary-color">
                          <i className="fa-solid fa-clock me-2"></i>
                          {job.type}
                        </span>
                      </div>

                      <p className="mb-20">{job.description}</p>

                      <div className="skills mb-25">
                        <h6 className="mb-15">Required Skills:</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="primary-color small"
                              style={{
                                padding: "4px 12px",
                                border: "1px solid #3C72FC",
                                borderRadius: "20px",
                                backgroundColor: "rgba(60, 114, 252, 0.1)",
                                fontSize: "12px",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link className="read-more-btn" href="/contact">
                        Apply Now{" "}
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-60">
            <p className="mb-20">
              Don't see the perfect role? We're always seeking exceptional
              talent.
            </p>
            <Link href="/contact" className="btn-one">
              Submit Your Resume{" "}
              <i className="fa-regular fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits & Culture Section */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className=""
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <h5 className="primary-color mb-15">
                  <Image className="me-1" src={One} alt="icon" priority />
                  EMPLOYEE EXPERIENCE
                </h5>
                <h2 className="mb-30">
                  Benefits That <span className="primary-color">Matter</span>
                </h2>
                <p className="mb-30">
                  We believe in supporting our team members holistically. Our
                  comprehensive benefits package and company culture are
                  designed to help you thrive both professionally and personally
                  while making a meaningful impact.
                </p>

                <ul className="service-features">
                  <li className="mb-15">
                    <i className="fa-solid fa-check primary-color"></i>
                    <strong>Remote-First Flexibility</strong> - Work from
                    anywhere with flexible schedules that fit your lifestyle
                  </li>
                  <li className="mb-15">
                    <i className="fa-solid fa-check primary-color"></i>
                    <strong>Learning & Development</strong> - Access to
                    certifications, training programs, and industry conferences
                  </li>
                  <li className="mb-15">
                    <i className="fa-solid fa-check primary-color"></i>
                    <strong>Competitive Compensation</strong> - Market-leading
                    salaries, bonuses, and comprehensive benefits
                  </li>
                  <li className="mb-15">
                    <i className="fa-solid fa-check primary-color"></i>
                    <strong>Cutting-Edge Technology</strong> - Work with the
                    latest AI, cloud, and enterprise technologies
                  </li>
                  <li className="mb-15">
                    <i className="fa-solid fa-check primary-color"></i>
                    <strong>Global Impact</strong> - Transform Fortune 500
                    companies and make a difference worldwide
                  </li>
                  <li className="mb-15">
                    <i className="fa-solid fa-check primary-color"></i>
                    <strong>Work-Life Balance</strong> - Healthy boundaries with
                    time off and wellness programs
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div
                  className="benefits-visual p-4 sub-bg"
                  style={{ borderRadius: "15px", border: "2px solid #e9ecef" }}
                >
                  <div className="text-center mb-4">
                    <i
                      className="fa-solid fa-shield-halved"
                      style={{ fontSize: "4rem", color: "#3C72FC" }}
                    ></i>
                  </div>
                  <h4 className="mb-4 text-center" style={{ color: "#3C72FC" }}>
                    Your Success is Our Priority
                  </h4>

                  <div className="row g-3">
                    <div className="col-6">
                      <div
                        className="benefit-card text-center p-3"
                        style={{
                          background: "white",
                          borderRadius: "10px",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        <i
                          className="fa-solid fa-heart"
                          style={{ color: "#e74c3c", fontSize: "1.5rem" }}
                        ></i>
                        <h6 className="mt-2 mb-1">Health & Wellness</h6>
                        <small>Comprehensive coverage</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className="benefit-card text-center p-3"
                        style={{
                          background: "white",
                          borderRadius: "10px",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        <i
                          className="fa-solid fa-graduation-cap"
                          style={{ color: "#9b59b6", fontSize: "1.5rem" }}
                        ></i>
                        <h6 className="mt-2 mb-1">Learning Budget</h6>
                        <small>Annual development fund</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className="benefit-card text-center p-3"
                        style={{
                          background: "white",
                          borderRadius: "10px",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        <i
                          className="fa-solid fa-chart-line"
                          style={{ color: "#28a745", fontSize: "1.5rem" }}
                        ></i>
                        <h6 className="mt-2 mb-1">Performance Bonus</h6>
                        <small>Merit-based rewards</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className="benefit-card text-center p-3"
                        style={{
                          background: "white",
                          borderRadius: "10px",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        <i
                          className="fa-solid fa-balance-scale"
                          style={{ color: "#3C72FC", fontSize: "1.5rem" }}
                        ></i>
                        <h6 className="mt-2 mb-1">Work-Life Balance</h6>
                        <small>Flexible schedules</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
