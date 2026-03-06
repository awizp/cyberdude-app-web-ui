"use client";

import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavbar = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <header className="w-full">
      <div className="container mx-auto py-5 flex justify-between items-center px-3">
        {/* company logo */}
        <Link href={"/"} className="w-45 h-10">
          <img
            src="/img/logo.svg"
            className="w-full h-full object-contain"
            alt="CyberDude Networks Logo"
          />
        </Link>

        <div className="flex gap-3 items-center justify-between">
          {/* desktop navigation links */}
          <div className="desktop-links">
            <ul className="flex flex-col md:flex-row gap-10 items-start md:items-center text-white justify-center">
              <li>
                <a
                  href="#Company"
                  className="hover:text-orange-500 transition-colors cursor-pointer duration-300 flex"
                >
                  <span className="ml-1">Company</span>
                  <ChevronDown />
                </a>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="hover:text-orange-500 transition-colors cursor-pointer duration-300"
                >
                  Explore
                </Link>
              </li>
              <li>
                <a
                  href="#Learners"
                  className="hover:text-orange-500 transition-colors cursor-pointer duration-300"
                >
                  Learners
                </a>
              </li>
              <li>
                <Link
                  href="/experiment/recruiters"
                  className="hover:text-orange-500 transition-colors cursor-pointer duration-300"
                >
                  Recruiters
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-orange-500 transition-colors cursor-pointer duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* get started button */}
          <a
            href="#"
            className="hidden md:flex w-full ml-5 px-4 py-2 rounded-full bg-linear-to-r from-orange-300  to-orange-500 text-black font-medium hover:from-orange-400 hover:to-orange-500 transition-colors duration-300 justify-center items-center"
          >
            Get Started!
          </a>

          {/* hamburger menu button */}
          <div
            onClick={handleNavbar}
            className="hover:text-orange-500 transition-colors cursor-pointer duration-300 md:hidden"
          >
            <Menu size={34} />
          </div>

          {/* mobile navigation links */}
          {navOpen ? (
            <div className="mobile-links">
              <ul className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-center">
                <li>
                  <a
                    href="#Company"
                    className="hover:text-orange-500 transition-colors cursor-pointer duration-300 flex items-center"
                  >
                    <span className="mr-1">Company</span>
                    <ChevronDown />
                  </a>
                </li>
                <li>
                  <a
                    href="#Learners"
                    className="hover:text-orange-500 transition-colors cursor-pointer duration-300"
                  >
                    Learners
                  </a>
                </li>
                <li>
                  <a
                    href="#Recruiters"
                    className="hover:text-orange-500 transition-colors cursor-pointer duration-300"
                  >
                    Recruiters
                  </a>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-orange-500 transition-colors cursor-pointer duration-300"
                  >
                    pricing
                  </Link>
                </li>
              </ul>

              {/* close navigation button */}
              <div onClick={handleNavbar} className="close-btn">
                <X size={34} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
}
