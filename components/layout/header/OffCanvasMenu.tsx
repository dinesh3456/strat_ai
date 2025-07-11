"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import svgLogo from "@/public/images/logo/logo-light.svg";

interface OffCanvasMenuProps {
  toggleMenu: boolean;
  handleToggleMenu: (value: boolean) => void;
}

const OffCanvasMenu = ({
  toggleMenu,
  handleToggleMenu,
}: OffCanvasMenuProps) => {
  const [openSubMenu, setOpenSubMenu] = useState("");

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu("");
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " drop-active" : " ";
  };

  return (
    <div
      id="targetElement"
      className={(toggleMenu ? " " : " sidebar__hide") + " sidebar-area"}
    >
      <div className="sidebar__overlay"></div>
      <Link href="/" className="logo mb-40">
        <Image src={svgLogo} alt="logo" />
      </Link>
      <div className="sidebar__search mb-30">
        <input type="text" placeholder="Search..." />
        <i className="fa-regular fa-magnifying-glass"></i>
      </div>
      <div className="mobile-menu overflow-hidden">
        <nav className="mean-nav">
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
                  <Link href="/managed-it-services">Managed IT Services</Link>
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
                  <Link href="team">Career</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="info pt-40">
        <li>
          <i className="fa-solid primary-color fa-location-dot"></i>{" "}
          <Link href="/">800 N King Street</Link>
        </li>
        <li className="py-2">
          <i className="fa-solid primary-color fa-phone-volume"></i>{" "}
          <Link href="tel:(+91) 9900297673">(+91) 9900297673</Link>
        </li>
        <li>
          <i className="fa-solid primary-color fa-paper-plane"></i>{" "}
          <Link href="/">operations@strat1.ai</Link>
        </li>
      </ul>
      <div className="social-icon mt-20">
        <Link href="https://www.linkedin.com/company/strat1consulting/">
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
      </div>
      <button
        id="closeButton"
        className="text-white"
        onClick={() => handleToggleMenu(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default OffCanvasMenu;
