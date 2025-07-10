import Link from "next/link";
import Image from "next/image";
// Update these imports to point to your new images
import One from "@/public/images/team/member1.jpg"; // Sreekala Alavala
import Two from "@/public/images/team/member2.jpg"; // Prabu Subbarao
import Three from "@/public/images/team/member3.jpg"; // Jonathan Roy
import Four from "@/public/images/team/member4.jpg"; // Srikanth Dharmana

const Team = () => {
  return (
    <section className="team-area pt-120 pb-120" id="team-two">
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
                y="0.747803"
                width="18.5"
                height="10.5"
                rx="5.25"
                stroke="#3C72FC"
                strokeWidth="1.5"
              />
              <mask id="path-2-inside-1_687_602" fill="white">
                <path d="M3 5.9978C3 3.78866 4.79086 1.9978 7 1.9978H13C15.2091 1.9978 17 3.78866 17 5.9978C17 8.20694 15.2091 9.9978 13 9.9978H7C4.79086 9.9978 3 8.20694 3 5.9978Z" />
              </mask>
              <path
                d="M3 5.9978C3 2.96024 5.46243 0.497803 8.5 0.497803H11.5C14.5376 0.497803 17 2.96024 17 5.9978C17 4.61709 15.2091 3.4978 13 3.4978H7C4.79086 3.4978 3 4.61709 3 5.9978ZM17 5.9978C17 9.03537 14.5376 11.4978 11.5 11.4978H8.5C5.46243 11.4978 3 9.03537 3 5.9978C3 7.37851 4.79086 8.4978 7 8.4978H13C15.2091 8.4978 17 7.37851 17 5.9978ZM3 9.9978V1.9978V9.9978ZM17 1.9978V9.9978V1.9978Z"
                fill="#3C72FC"
                mask="url(#path-2-inside-1_687_602)"
              />
            </svg>
            OUR TEAM
          </h5>
          <h2
            className=""
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Our Leadership Team
          </h2>
        </div>

        <div className="row g-4">
          {/* Team Member 1 - Srikanth Dharmana */}
          <div
            className="col-xl-3 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="team__image-wrapper">
                <Image
                  src={One}
                  alt="Srikanth Dharmana - Head of Operations, INDIA"
                  priority
                  width={300}
                  height={350}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                <div className="team__overlay">
                  <div className="team__social">
                    <Link
                      href="https://www.linkedin.com/in/srikanth-dharmana"
                      className="social-link"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="mailto:srikanth@strat1.ai"
                      className="social-link"
                    >
                      <i className="fa-regular fa-envelope"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team__content">
                <h4>
                  <Link href="team-details" className="text-white">
                    Srikanth Dharmana
                  </Link>
                </h4>
                <span className="text-white">Head of Operations, INDIA</span>
              </div>
            </div>
          </div>

          {/* Team Member 2 - Sreekala Alavala */}
          <div
            className="col-xl-3 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="team__image-wrapper">
                <Image
                  src={Two}
                  alt="Sreekala Alavala - Managing Partner"
                  priority
                  width={300}
                  height={350}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                <div className="team__overlay">
                  <div className="team__social">
                    <Link
                      href="https://www.linkedin.com/in/sreekala-alavala"
                      className="social-link"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="mailto:sreekala@strat1.ai"
                      className="social-link"
                    >
                      <i className="fa-regular fa-envelope"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team__content">
                <h4>
                  <Link href="team-details" className="text-white">
                    Sreekala Alavala
                  </Link>
                </h4>
                <span className="text-white">Managing Partner</span>
              </div>
            </div>
          </div>

          {/* Team Member 3 - Jonathan Roy */}
          <div
            className="col-xl-3 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="team__image-wrapper">
                <Image
                  src={Three}
                  alt="Jonathan Roy - Head of Operations, USA"
                  priority
                  width={300}
                  height={350}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                <div className="team__overlay">
                  <div className="team__social">
                    <Link
                      href="https://www.linkedin.com/in/jonathan-roy"
                      className="social-link"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="mailto:jonathan@strat1.ai"
                      className="social-link"
                    >
                      <i className="fa-regular fa-envelope"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team__content">
                <h4>
                  <Link href="team-details" className="text-white">
                    Jonathan Roy
                  </Link>
                </h4>
                <span className="text-white">Head of Operations, USA</span>
              </div>
            </div>
          </div>

          {/* Team Member 4 - Prabu Subbarao */}
          <div
            className="col-xl-3 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <div className="team__item">
              <div className="team__image-wrapper">
                <Image
                  src={Four}
                  alt="Prabu Subbarao - Chief Operating Officer"
                  priority
                  width={300}
                  height={350}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                <div className="team__overlay">
                  <div className="team__social">
                    <Link
                      href="https://www.linkedin.com/in/prabu-subbarao"
                      className="social-link"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="mailto:prabu@strat1.ai" className="social-link">
                      <i className="fa-regular fa-envelope"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team__content">
                <h4>
                  <Link href="team-details" className="text-white">
                    Prabu Subbarao
                  </Link>
                </h4>
                <span className="text-white">Chief Operating Officer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
