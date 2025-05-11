import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/images";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block  font-bold text-lg" href="/">
              <img
                className="h-16 w-auto object-contain"
                alt="KingsBridge Logo"
                src={IMAGES.kingsBridgeLogo}
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-base font-medium leading-6 font-inter">
                <li>
                  <Link
                    className="text-[#121212] transition hover:text-[#6AB536]"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#121212] transition hover:text-[#6AB536]"
                    to="/learn-more"
                  >
                    Learn More
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#121212] transition hover:text-[#6AB536]"
                    to="/our-services"
                  >
                    Our Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center font-inter gap-4">
            {/* Contact Us button - visible on medium and up */}
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 rounded-md bg-[#6AB536] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#5A9C2E]"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>

            {/* Mobile menu button - visible only on small screens */}
            <div className="block md:hidden">
              <button className="rounded-sm p-2 text-gray-600 transition hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
