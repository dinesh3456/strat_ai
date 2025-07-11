"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo.svg";
import OffCanvasMenu from "./OffCanvasMenu";

const HeaderTwo = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <header
        className={
          (scrolled ? " aniamted menu-fixed" : " ") +
          " header-area header-two-area"
        }
      >
        <div className="container header__container">
          <div className="header__main">
            <Link href="/" className="logo">
              <Image src={logo} alt="logo" />
            </Link>
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/cloud-migration">
                          Cloud & Data Transformation
                        </Link>
                      </li>
                      <li>
                        <Link href="/ai-services">AI as a Service</Link>
                      </li>
                      <li>
                        <Link href="/managed-it-services">
                          Managed IT Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/analytics-bi-services">
                          Advanced Analytics & BI
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="blog">Blog Grid</Link>
                      </li>
                      <li>
                        <Link href="blog-standard">Blog Standard</Link>
                      </li>
                      <li>
                        <Link href="blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">About</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/career">Career</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="ml-20 d-none d-lg-block">
                    <a className="search-trigger" onClick={handleSearch}>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_307_344)">
                          <path
                            d="M16.0375 14.9381L12.0784 11.0334C13.0625 9.86621 13.6554 8.36744 13.6554 6.73438C13.6554 3.02103 10.5925 0 6.82774 0C3.0629 0 0 3.02103 0 6.73438C0 10.4475 3.0629 13.4683 6.82774 13.4683C8.4834 13.4683 10.0031 12.8836 11.1865 11.913L15.1456 15.8178C15.2687 15.9393 15.4301 16 15.5915 16C15.7529 16 15.9143 15.9393 16.0375 15.8178C16.2839 15.5748 16.2839 15.181 16.0375 14.9381ZM1.26142 6.73438C1.26142 3.70705 3.75845 1.24414 6.82774 1.24414C9.89695 1.24414 12.3939 3.70705 12.3939 6.73438C12.3939 9.76146 9.89695 12.2241 6.82774 12.2241C3.75845 12.2241 1.26142 9.76146 1.26142 6.73438Z"
                            fill="#ffffff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_307_344">
                            <rect width="16.2222" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="d-none d-xl-flex gap-4">
              <Link href="/contact" className="btn-one">
                Get in Touch <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
              <div className="about-three__left-item d-flex flex-wrap gap-2 align-items-center">
                <div className="about-call-icon">
                  <span>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_461_205)">
                        <path
                          d="M23.8333 19.5L23.8333 22.1667C23.8348 22.4235 23.7867 22.6781 23.6917 22.9169C23.5967 23.1557 23.4567 23.3739 23.2792 23.5589C23.1017 23.7439 22.8904 23.8921 22.6565 23.9955C22.4226 24.0989 22.1707 24.1555 21.9158 24.1625C18.4875 24.4958 15.0133 23.8408 11.9375 22.275C9.13542 20.8892 6.77708 18.8058 5.06667 16.25C3.47833 13.1258 2.82083 9.59917 3.1625 6.11833C3.16917 5.86384 3.22563 5.61251 3.32862 5.3791C3.43161 5.14568 3.57927 4.93476 3.76373 4.75723C3.94819 4.57969 4.166 4.43965 4.40438 4.3444C4.64277 4.24916 4.89712 4.20063 5.15417 4.20167H7.82083C8.2513 4.19738 8.67008 4.34507 9.00409 4.61842C9.3381 4.89177 9.5606 5.27635 9.63333 5.70167C9.76979 6.55181 10.0102 7.38378 10.3508 8.18C10.4675 8.47736 10.4932 8.80343 10.4248 8.11692C10.3563 8.4304 10.1968 8.71885 9.96583 8.94167L8.7775 10.13C10.0892 12.9725 12.1942 15.0775 15.0367 16.3892L16.225 15.2008C16.4478 14.9698 16.7363 14.8104 17.0498 14.7419C17.3632 14.6735 17.6893 14.6992 17.9867 14.8158C18.7829 15.1565 19.6148 15.3969 20.465 15.5333C20.8958 15.6071 21.2848 15.8338 21.5581 16.1743C21.8315 16.5147 21.9737 16.9405 21.9642 17.375L23.8333 19.5Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.25 7.58337C16.8246 7.58337 17.3757 7.81165 17.7821 8.21798C18.1884 8.6243 18.4167 9.1754 18.4167 9.75004"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.25 3.25C17.9739 3.25 19.6272 3.93482 20.8462 5.15381C22.0652 6.37279 22.75 8.02609 22.75 9.75"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath>
                          <rect width="26" height="26" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="info">
                  <span className="sm-font fw-600 text-white">Call Us Now</span>
                  <h5 className="text-white">(+91) 9900297673</h5>
                </div>
              </div>
            </div>
            <div className="bars d-block d-lg-none">
              <i
                id="openButton"
                className="fa-solid fa-bars"
                onClick={handleToggleMenu}
              ></i>
            </div>
          </div>
        </div>
      </header>
      <OffCanvasMenu
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />

      <div
        className={(searchToggle ? " open" : " ") + " search-wrap"}
        onClick={closeSearch}
      >
        <div className="search-inner">
          <i
            className="fas fa-times search-close"
            id="search-close"
            onClick={closeSearch}
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                  onClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTwo;
