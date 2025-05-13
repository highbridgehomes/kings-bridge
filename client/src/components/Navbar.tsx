import { ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../constants/images";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll after route change
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on homepage
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
                  <a
                    href="/"
                    className="text-[#121212] transition hover:text-[#6AB536]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("about-us")}
                    className="text-[#121212] transition hover:text-[#6AB536]"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("our-services")}
                    className="text-[#121212] transition hover:text-[#6AB536]"
                  >
                    Our Services
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center font-inter gap-4">
            {/* CONTACT US  */}
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 rounded-md bg-[#6AB536] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#5A9C2E] transform transition-transform duration-200 hover:scale-105"
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
