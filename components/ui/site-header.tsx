"use client";

import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const handleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const toggleCompany = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="w-full relative bg-black text-white">
      <div className="container mx-auto py-5 flex justify-between items-center px-3">
        {/* company logo */}
        <Link href={"/"} className="w-45 h-10">
          {" "}
          <img
            src="/img/logo.svg"
            className="w-full h-full object-contain"
            alt="CyberDude Networks Logo"
          />
        </Link>

        <div className="flex gap-3 items-center justify-between">
          {/* desktop navigation links */}
          <nav className="desktop-links">
            <ul className="flex flex-col md:flex-row   gap-10 items-start md:items-center justify-center">
              <li className="relative" onClick={toggleCompany}>
                <div className="hover:text-orange-500  transition-colors duration-300 flex items-center cursor-pointer">
                  <span>Company</span>

                  <ChevronDown
                    size={18}
                    className={`ml-1 transition-transform duration-300  ${
                      menuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Company Dropdown Menu */}
                {menuOpen && (
                  <ul className="absolute left-0 mt-2 border bg-black  shadow-lg rounded-md w-44 py-2 z-30  ">
                    <li>
                      <Link
                        href="/experiment/company/about"
                        className="block px-4 py-2 hover:bg-orange-200 hover:text-orange-500 transition"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/experiment/company/mission&vision"
                        className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-500 transition"
                      >
                        Mission & Vision
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company/impact"
                        className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-500 transition"
                      >
                        Impact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company/awards"
                        className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-500 transition cursor-pointer"
                      >
                        Awards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company/partner"
                        className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-500 transition"
                      >
                        Partner
                      </Link>
                    </li>
                  </ul>
                )}
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
                <Link
                  href="/recruiters"
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
          </nav>

          {/* get started button */}
          <Link
            href="/experiment/get-started"
            className="hidden md:flex w-full ml-5 px-4 py-2 rounded-full bg-linear-to-r from-orange-300  to-orange-500 text-black font-medium hover:from-orange-400 hover:to-orange-500 transition-colors duration-300 justify-center items-center"
          >
            Get Started!
          </Link>

          {/* hamburger menu button */}
          <div
            onClick={handleNavbar}
            className="hover:text-orange-500  cursor-pointer duration-300 md:hidden"
          >
            <Menu size={34} />
          </div>

          {/* mobile navigation links */}
          {navOpen ? (
            <div className="mobile-links z-30  p-4">
              <ul className="flex flex-col gap-6">
                <li>
                  <div
                    onClick={toggleCompany}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-medium">Company</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {menuOpen && (
                    <ul className="pl-4 mt-3 space-y-3">
                      <li>
                        <Link
                          href="/experiment/company/about"
                          onClick={handleNavbar}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/experiment/company/mission&vision"
                          onClick={handleNavbar}
                        >
                          Mission & Vision
                        </Link>
                      </li>
                      <li>
                        <Link href="/company/impact" onClick={handleNavbar}>
                          Impact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/experiment/company/awards"
                          onClick={handleNavbar}
                        >
                          Awards
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/experiment/company/partner"
                          onClick={handleNavbar}
                        >
                          Partner
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* OTHER LINKS */}
                <li>
                  <a href="#Learners" onClick={handleNavbar}>
                    Learners
                  </a>
                </li>

                <li>
                  <a href="#Recruiters" onClick={handleNavbar}>
                    Recruiters
                  </a>
                </li>

                <li>
                  <Link href="/pricing" onClick={handleNavbar}>
                    Pricing
                  </Link>
                </li>
              </ul>

              {/* CLOSE BUTTON */}
              <div onClick={handleNavbar} className="mt-6">
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
