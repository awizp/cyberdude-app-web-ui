import { Facebook, Icon, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const aboutLinks = [
  {
    id: 1,
    navName: "Company",
    navLink: "/",
  },
  {
    id: 2,
    navName: "Location",
    navLink: "/",
  },
  {
    id: 3,
    navName: "Contact Us",
    navLink: "/contact",
  },
];

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/cdudenetworks",
    icon: Facebook,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/cdudenetworks",
    icon: Instagram,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/cyberdude-networks",
    icon: Linkedin,
  },
  {
    id: 4,
    name: "YouTube",
    link: "https://www.youtube.com/@cyberdudenetworks",
    icon: Youtube,
  },
];

const legalLinks = [
  {
    name: "Terms",
    href: "/legal/terms",
  },
  {
    name: "Privacy",
    href: "/legal/privacy",
  },
  {
    name: "Refund & Cancellation Policy",
    href: "/legal/refund-cancellation",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-black text-gray-400  drop-shadow-2xl backdrop-blur-2xl drop-shadow-orange-500">
      <div className="mx-auto">
        <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 ">
            {/* Brand */}
            <div className="col-span-2">
              <div className="mb-5 w-44">
                <img src="/img/logo.svg" alt="CyberDude logo" />
              </div>
              <p className="">
                CyberDude Networks Pvt. Ltd. is Startup who crave to create
                creative product.
              </p>
              <p className="text-sm leading-relaxed">
                We stimulate creativity in each and everything that appears to
                our eye. We love doing it.
              </p>
            </div>

            {/* About */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                About
              </h3>
              <ul className="space-y-2 text-sm">
                {aboutLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.navLink}
                      className="inline-block transition hover:text-orange-500 hover:translate-x-1"
                    >
                      {item.navName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Learners
              </h3>
              <ul className="space-y-2 text-sm">
                {["Courses", "Course Roadmaps", "Projects"].map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="inline-block transition hover:text-orange-500 hover:translate-x-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Recruiters
              </h3>
              <ul className="space-y-2 text-sm">
                {["People", "sessions", "Testimonials"].map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="inline-block transition hover:text-orange-500 hover:translate-x-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Social */}
          <div className="text-center flex justify-start sm:justify-end mt-5 sm:mt-0">
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-orange-500 hover:text-orange-500"
                  target="_blank"
                  title={`Check out cyberdude ${item.name}`}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026{" "}
              <a
                href="https://cyberdudenetworks.com"
                className="hover:text-orange-500"
                target="_blank"
              >
                CyberDude Networks Pvt. Ltd.
              </a>{" "}
              All Rights Reserved.
            </p>

            <div className="flex gap-6">
              {legalLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="transition hover:text-orange-500"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}