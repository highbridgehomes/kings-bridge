import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/images";

const NavBar = () => {
  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-300"
      style={{ backgroundColor: "#F1FCE4" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-[#66CC35] font-bold text-lg" href="#">
              <img
                className="h-10 w-auto object-contain"
                alt="KingsBridge Logo"
                src={IMAGES.kingsBridgeLogo}
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link
                    className="text-gray-600 transition hover:text-gray-800"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 transition hover:text-gray-800"
                    to="about"
                  >
                    About KCFM
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 transition hover:text-gray-800"
                    to="services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 transition hover:text-gray-800"
                    to="clients"
                  >
                    Our Clients
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                className="flex items-center gap-2 rounded-md bg-[#66CC35] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                to="contact"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800">
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
      </div>
    </header>
  );
};

export default NavBar;
