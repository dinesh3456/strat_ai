"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import svgLogo from "@/public/images/logo/logo.svg";
import one from "@/public/images/menu/home1-image.jpg";
import two from "@/public/images/menu/home2-image.jpg";
import three from "@/public/images/menu/home3-image.jpg";
import four from "@/public/images/menu/home4-image.jpg";

const OffCanvasTwoOnePage = ({ toggleMenu, handleToggleMenu }: any) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
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
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="/service">Services</Link>
              <ul className="sub-menu">
                <li>
                  <Link href="service-solutions">IT Solutions</Link>
                </li>
                <li>
                  <Link href="service">IT Services</Link>
                </li>
                <li>
                  <Link href="service-details">Service Details</Link>
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
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="info pt-40">
        <li>
          <i className="fa-solid primary-color fa-location-dot"></i>{" "}
          <Link href="/">example@example.com</Link>
        </li>
        <li className="py-2">
          <i className="fa-solid primary-color fa-phone-volume"></i>{" "}
          <Link href="tel:+208-6666-0112">+208-6666-0112</Link>
        </li>
        <li>
          <i className="fa-solid primary-color fa-paper-plane"></i>{" "}
          <Link href="/">info@example.com</Link>
        </li>
      </ul>
      <div className="social-icon mt-20">
        <Link href="/">
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link href="/">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link href="/">
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link href="/">
          <i className="fa-brands fa-youtube"></i>
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

export default OffCanvasTwoOnePage;
