import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { IMAGES } from "../constants/images";
import { ICONS } from "../constants/icons";

const Home = () => {
  const stats = [
    { label: "Years In Industry", target: 10 },
    { label: "Projects Completed", target: 500 },
    { label: "Expert Team", target: 50 },
    { label: "Happy Customers", target: 1000 },
  ];

  return (
    <>
      <Helmet>
        <title>Home | KingsBridge</title>
        <meta name="description" content="Welcome to KingsBridge Real Estate" />
      </Helmet>
      <NavBar />
      <section style={{ backgroundColor: "#F1FCE4" }}>
        <div className="lg:min-h-screen flex items-center mx-auto max-w-screen-xl px-4 pb-32 pt-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 w-full">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  BUILDING THE
                  <strong className="text-[#075C5B]"> FUTURE </strong>
                  KINGS BRIDGE
                </h1>

                <div className="mt-8 md:mt-4">
                  {/* <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Our Services
                  </h2> */}
                  <div className="mt-4">
                    <ul className="list-inside list-disc space-y-2 text-gray-700">
                      <li>Comprehensive Property Management</li>
                      <li>Sustainable Facility Management</li>
                      <li>Customized Tenant Services</li>
                      <li>Premium Renovations and Upgrades</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4 ">
                <Link
                  to="contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#66CC35] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                >
                  <span>Work with Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <img
                alt="Property Managers"
                src={IMAGES.propertyManagers}
                loading="lazy"
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#075C5B] shadow-lg rounded-2xl p-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-extrabold text-white">
                +<Counter target={item.target} />
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          About Us
        </h2>

        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Welcome to Highbridge Homes
                </h2>

                <p className="mt-4 text-gray-700">
                  A company committed to creating exceptional homes that reflect
                  the true essence of luxury and comfort. With years of
                  experience in the real estate industry, we take pride in our
                  craftsmanship, attention to detail, and dedication to customer
                  satisfaction.
                </p>
              </div>
              <div className="mt-4 ">
                <Link
                  to="readmore"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#66CC35] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                >
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="rounded overflow-hidden aspect-video">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/vkF__wRUFKA?autoplay=0&rel=0"
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-[#003639] ">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-8">
            {/* Left side: Text and button */}
            <div className="lg:col-span-2">
              <div className="max-w-lg">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold  text-white ">
                  Our Clients
                </h2>

                <p className="mt-4 text-white">
                  A company committed to creating exceptional homes that reflect
                  the true essence of luxury and comfort. With years of
                  experience in the real estate industry, we take pride in our
                  craftsmanship, attention to detail, and dedication to customer
                  satisfaction.
                </p>

                <div className="mt-4">
                  <Link
                    to="readmore"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#66CC35] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side: Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-2 xl:grid-cols-2">
              {/* Client 1 */}
              <a
                href="#"
                className="block rounded-md  bg-[#075C5B] p-4 shadow-sm sm:p-6"
              >
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                  <div className="sm:order-last sm:shrink-0">
                    <img
                      alt="Client Image"
                      src={IMAGES.person}
                      className="size-16 rounded-full object-cover sm:size-[72px]"
                    />
                  </div>

                  <div className="mt-4 sm:mt-0">
                    <h5 className="text-lg font-medium text-pretty text-white">
                      Reliable, trustworthy, and result-oriented. They turned
                      our ideas into reality with brilliant design and solid
                      engineering.
                    </h5>

                    <p className="mt-1 text-sm text-white">Mrs. Ngozi Umeh</p>
                  </div>
                </div>
              </a>

              {/* Client 2 */}
              <a
                href="#"
                className="block rounded-md bg-[#075C5B] p-4 shadow-sm sm:p-6"
              >
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                  <div className="sm:order-last sm:shrink-0">
                    <img
                      alt="Client Image"
                      src={IMAGES.person}
                      className="size-16 rounded-full object-cover sm:size-[72px]"
                    />
                  </div>

                  <div className="mt-4 sm:mt-0">
                    <h5 className="text-lg font-medium text-pretty text-white">
                      They handled our office complex renovation with top-notch
                      expertise. I highly recommend Kings Bridge for any
                      commercial construction needs.
                    </h5>

                    <p className="mt-1 text-sm text-white">Mr. Tunde Ayeni</p>
                  </div>
                </div>
              </a>

              {/* Client 3 */}
              <a
                href="#"
                className="block rounded-md bg-[#075C5B] p-4 shadow-sm sm:p-6"
              >
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                  <div className="sm:order-last sm:shrink-0">
                    <img
                      alt="Client Image"
                      src={IMAGES.person}
                      className="size-16 rounded-full object-cover sm:size-[72px]"
                    />
                  </div>

                  <div className="mt-4 sm:mt-0">
                    <h5 className="text-lg font-medium text-pretty text-white">
                      I was impressed by their professionalism and timely
                      delivery. The structural integrity and aesthetics exceeded
                      my expectations.
                    </h5>

                    <p className="mt-1 text-sm text-white">Mrs. Amina Bello</p>
                  </div>
                </div>
              </a>

              {/* Client 4 */}
              <a
                href="#"
                className="block rounded-md bg-[#075C5B] p-4 shadow-sm sm:p-6"
              >
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                  <div className="sm:order-last sm:shrink-0">
                    <img
                      alt="Client Image"
                      src={IMAGES.person}
                      className="size-16 rounded-full object-cover sm:size-[72px]"
                    />
                  </div>

                  <div className="mt-4 sm:mt-0">
                    <h5 className="text-lg font-medium text-pretty text-white">
                      Kings Bridge delivered my dream home with exceptional
                      attention to detail. From foundation to finishing, the
                      process was smooth and transparent.
                    </h5>

                    <p className="mt-1 text-sm text-white">
                      Mr. Chinedu Okafor
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 sm:mt-10 lg:mt-16">
        <h2 className="flex items-center mb-8 justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {/* Architectural Design */}
          <div className="h-auto rounded-xl shadow-md bg-[#F1FCE4] p-4 lg:col-span-2">
            <div className="flex flex-row-reverse  items-stretch gap-4">
              {/* Image on the right - now taller */}
              <img
                alt="Architectural Design"
                src={IMAGES.archiDesign}
                className="w-20 sm:w-64 h-[200px] rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 sm:text-lg">
                  Architectural Design
                </h3>
                <p className="mt-0.5 text-gray-700">
                  We create innovative and practical architectural designs
                  tailored to meet your unique visions and needs.
                </p>
                <div className="mt-4">
                  <Link
                    to="readmore"
                    className="inline-flex items-center gap-2 rounded-md bg-[#66CC35] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  >
                    <span>View Full Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Building Constructions */}
          <div className="h-auto rounded-xl shadow-md p-4 bg-[#F1FCE4]">
            <div className="flex flex-col items-start gap-4">
              <img
                alt="Building Constructions"
                src={ICONS.construction}
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                  Building Constructions
                </h3>
                <p className="mt-0.5 text-gray-700">
                  From concept to completion, we deliver top-notch building
                  construction services with quality and efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Facility Management */}
          <div className="h-auto rounded-xl shadow-md p-4 bg-[#F1FCE4]">
            <div className="flex flex-col items-start gap-4">
              <img
                alt="Facility Management"
                src={ICONS.management}
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                  Facility Management
                </h3>
                <p className="mt-0.5 text-gray-700">
                  Ensure your property remains in peak condition with our
                  comprehensive facility management solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-8 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="h-auto rounded-xl shadow-md p-4 bg-[#F1FCE4]">
            <div className="flex flex-col items-start gap-4">
              <img
                alt="Building Constructions"
                src={ICONS.bank}
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                  Land Banking
                </h3>
                <p className="mt-0.5 text-gray-700">
                  Secure your financial future with strategic land banking
                  oppurtunities in prime locations
                </p>
              </div>
            </div>
          </div>

          {/* Facility Management */}
          <div className="h-auto rounded-xl shadow-md p-4 bg-[#F1FCE4]">
            <div className="flex flex-col items-start gap-4">
              <img
                alt="Facility Management"
                src={ICONS.management}
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                  Real Estate Development
                </h3>
                <p className="mt-0.5 text-gray-700">
                  We transform spaces with modern and sustainable real estate
                  development projects
                </p>
              </div>
            </div>
          </div>

          {/* Architectural Design */}
          <div className="h-auto rounded-xl shadow-md bg-[#66CC35] p-4 lg:col-span-2">
            <div className="flex flex-row-reverse  items-stretch gap-4">
              {/* Image on the right - now taller */}
              <img
                alt="Architectural Design"
                src={IMAGES.estateConsultancy}
                className="w-20 sm:w-64 h-[200px] rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-white sm:text-lg">
                  Real Estate Consultancy
                </h3>
                <p className="mt-0.5 text-white">
                  Leverage our expertise to make informed decisions in buying,
                  selling and investing in real estate
                </p>
                <div className="mt-4">
                  <Link
                    to="readmore"
                    className="inline-flex items-center gap-2 rounded-md bg-gray-600  px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-[#075C5B] p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl">
            {" "}
            Make Your Next Career Move!{" "}
          </strong>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-[#66CC35] hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden"
            href="#"
          >
            <span className="text-sm font-medium"> Let's Get Started </span>

            <svg
              className="size-5 shadow-sm rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
