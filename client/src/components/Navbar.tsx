import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../constants/images";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
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
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block  font-bold text-lg" href="/">
              <img
                className="h-12 sm:h-16 w-auto object-contain"
                alt="KingsBridge Logo"
                src={IMAGES.kingsBridgeLogo}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-base font-medium leading-6 font-inter">
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
                <li>
                  <button
                    onClick={() => handleScroll("featured-projects")}
                    className="text-[#121212] transition hover:text-[#6AB536]"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center font-inter gap-4">
            {/* CONTACT Button  */}
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 rounded-md bg-[#6AB536] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#5A9C2E] transform transition-transform duration-200 hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>

            {/* Mobile menu button - visible only on small screens */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="rounded-sm p-2 text-gray-600 transition hover:text-gray-800"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-gray-400 bg-opacity-60">
          <div
            className={`fixed top-0 right-0 h-full w-full bg-white flex flex-col transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-20 items-center justify-between px-4 border-b border-b-gray-200">
              <img
                alt="Kingsbridge Logo"
                className="object-contain w-auto h-12 "
                src={IMAGES.kingsBridgeLogo}
              />
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="w-6 h-6 text-gray-600 hover:text-[#6AB536]" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col flex-grow  p-6">
              <nav className="flex flex-col gap-4 text-base font-medium">
                {[
                  { label: "About Us", id: "about-us" },
                  { label: "Our Services", id: "our-services" },
                  { label: "Projects", id: "featured-projects" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleScroll(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className="text-left px-2 py-2 text-[#121212]  hover:bg-gray-50 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Contact Button at Bottom */}
              <div className="mt-auto pt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-full block text-center rounded-md bg-[#6AB536] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#5A9C2E] transform transition-transform duration-200 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
