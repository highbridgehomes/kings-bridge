import { Link } from "react-router-dom";
import kingsBridgeLogo from "../assets/images/kingsbridge-logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#121212]">
      <div className="mx-auto max-w-screen-xl px-4 py-8  sm:px-6 lg:px-8 lg:py-12">
        <div className="flex mb-4 justify-center sm:justify-start">
          <a href="/" className="bg-white  rounded-2xl p-2">
            <img
              className="h-16 w-auto object-contain rounded-md"
              alt="KingsBridge logo"
              src={kingsBridgeLogo}
            />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>
              <div className="flex flex-row gap-8 text-center sm:text-left">
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Maintenance and repair services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Energy Management
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Security and safety systems
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Cleaning and janitorial services
                    </a>
                  </li>
                </ul>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Company History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Residential and commercial building construction
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Infrastucture Development
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Project Management
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      Renovation and remodeling
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gap-8">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">
                Contact Information
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-200 shadow-sm"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <a
                      href="mailto:info@kingsbridgeltd.com"
                      className="flex-1 text-gray-200"
                    >
                      info@kingsbridgeltd.com
                    </a>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="tel:+2349114017478"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-200 shadow-sm"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-200">
                      Front Desk: (+234) 911 401 7478
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-200 shadow-sm"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 text-gray-200 not-italic">
                    Head Office Address: KM 34 A&M COMPLEX, BESIDE MOBIL FILLING
                    STATION, LEKKI-EPE EXPRESSWAY, ORIBANWA, LAGOS.
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="mt-4 text-sm text-gray-200 sm:order-first sm:mt-0">
              For questions and concerns, email us at{" "}
              <a href="mailto:info@kingsbridgeltd.com" className="">
                info@kingsbridgeltd.com
              </a>
            </p>
            <ul className="flex justify-center my-4 sm:my-0 gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="https://web.facebook.com/profile.php?id=61575957786294"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/kingsbridgefcm/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm text-gray-200">
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start sm:space-x-4 text-center sm:text-left">
              <Link
                to="/terms-of-service"
                className="text-white transition hover:text-gray-200"
              >
                Terms of Service
              </Link>
              <span className="hidden sm:inline ">|</span>
              <Link
                to="/privacy-policy"
                className="text-white transition hover:text-gray-200"
              >
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link
                to="/cookie-policy"
                className="text-white transition hover:text-gray-200"
              >
                Cookie Policy
              </Link>
            </div>

            <p className="mt-4 text-center sm:text-left">
              &copy; 2025 Kingsbridge. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
