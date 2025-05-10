import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, HomeIcon, ShoppingBag } from "lucide-react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { IMAGES } from "../constants/images";
import { ICONS } from "../constants/icons";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const stats = [
    { label: "Years", target: 10 },
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

      {/* banner */}
      <section className="bg-[#F9FCF7] lg:grid lg:place-content-center">
        <div className="mx-auto w-full max-w-screen-xl px-4 pb-16 pt-10 sm:px-6  sm:pb-24 sm:pt-12 md:grid md:grid-cols-2 mt-8 md:mt-0 md:items-center md:gap-4 lg:px-8 lg:pb-32 lg:pt-16">
          <div className="max-w-prose md:text-left  text-center">
            <p className="mb-2 text-base text-pretty text-[#6AB536] sm:text-md/relaxed">
              REAL ESTATE
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Buy, rent, or sell your property with
              <strong className="text-[#6AB536]"> KingsBridge</strong>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>

            <div className="mt-4 flex justify-center md:justify-start sm:mt-6">
              <Link
                className=" flex items-center gap-2 rounded-lg bg-[#6AB536] px-12 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#5A9C2E]"
                to="contact"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
            <div className="mt-4 hidden lg:flex  gap-4 sm:mt-6">
              <div className="flex items-center justify-center rounded-full gap-4 bg-white border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors">
                <img
                  src={IMAGES.happyCustomersOne}
                  className="w-auto h-10 object-cover"
                />
                <p className="text-sm font-medium text-gray-700">
                  1,000+ Happy Customers
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center rounded-full gap-4 bg-white border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors ">
                <img
                  src={IMAGES.happyCustomersTwo}
                  className="w-10 h-10 rounded-full "
                />
                <p className="text-sm font-medium text-gray-700">
                  500+ Projects Completed
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-fit mx-auto mt-10 sm:mt-12 md:mt-0">
            {/* Main image */}
            <img
              src={IMAGES.propertyManagers}
              alt="Property"
              className="w-full h-auto max-w-xs sm:rounded-2xl sm:max-w-sm md:max-w-md object-cover"
            />

            {/* Top-left overlapping badge */}
            <a
              href="#"
              className="absolute top-6 -left-10 flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2"
            >
              <div className="relative">
                <span className="absolute bottom-4 left-0 bg-[#6AB536] border-white p-2 rounded-full">
                  <HomeIcon className="w-3 h-3 text-white" />
                </span>
              </div>
              <p className="text-xs font-medium text-gray-700">
                <span>Real-time home tour</span> <br />
                We provide you with tour of properties
              </p>
            </a>

            {/* Bottom-right overlapping badge */}
            <a
              href="#"
              className="absolute -bottom-6 -right-4 flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2"
            >
              <div className="relative">
                <span className="absolute left-40 bottom-2 bg-[#6AB536] border-white p-2 rounded-full">
                  <ShoppingBag className="w-3 h-3 text-white" />
                </span>
              </div>
              <p className="text-xs font-medium text-gray-700">
                <span>Find the best deal</span> <br />
                Browse thousands of properties
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* happy clients section */}

      <section className="relative z-10 mt-10 sm:mt-12 md:-mt-10 lg:-mt-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] shadow-lg rounded-2xl p-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-[#121212]">
                <Counter target={item.target} />+
              </p>
              <p className="mt-2 text-sm font-medium text-[#121212]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* about us */}
      <section className="mt-16">
        <h2 className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          About Us
        </h2>

        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
                  Welcome to Highbridge Homes
                </h3>

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
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#66CC35] px-12 py-3 text-sm font-medium text-white shadow-sm"
                >
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video">
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

      <section className="mt-8 bg-[#121212] mx-auto px-4 py-12 sm:px-6 lg:px-16 sm:mt-10 lg:mt-16">
        <h2 className="flex items-center mb-8 justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
          Our Services
        </h2>
        <p className="mt-4 mb-8 mx-auto text-center max-w-prose text-base text-pretty text-white sm:text-lg/relaxed">
          Discover how our expertise in architectural design, building
          construction, facility management, land banking, real estate
          development, and consultancy can help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {/* Architectural Design */}
          <div className="h-auto rounded-2xl shadow-md bg-white p-6 lg:col-span-2">
            <div className="flex flex-row-reverse  items-stretch gap-4">
              {/* Image on the right - now taller */}
              <img
                alt="Architectural Design"
                src={IMAGES.archiDesign}
                className="w-20 sm:w-64 h-[200px] rounded-2xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 sm:text-3xl">
                  Architectural Design
                </h3>
                <p className="mt-1 text-gray-700">
                  We create innovative and practical architectural designs
                  tailored to meet your unique visions and needs.
                </p>
                <div className="mt-4">
                  <Link
                    to="readmore"
                    className="inline-flex items-center gap-2 rounded-md bg-[#6AB536] hover:bg-[#5A9C2E] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  >
                    <span>View Full Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Building Constructions */}
          <div className="h-auto rounded-2xl shadow-md p-6 bg-white">
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
          <div className="h-auto rounded-2xl shadow-md p-6 bg-white">
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
          <div className="h-auto rounded-2xl shadow-md p-6 bg-white">
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
          <div className="h-auto rounded-2xl shadow-md p-6 bg-white">
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
          <div className="h-auto rounded-2xl shadow-md bg-white  p-6 lg:col-span-2">
            <div className="flex flex-row  items-stretch gap-4">
              <img
                alt="Architectural Design"
                src={IMAGES.estateConsultancy}
                className="w-20 sm:w-64 h-[200px] rounded-2xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium  text-gray-900 sm:text-3xl">
                  Real Estate Consultancy
                </h3>
                <p className="mt-0.5  text-gray-700">
                  Leverage our expertise to make informed decisions in buying,
                  selling and investing in real estate
                </p>
                <div className="mt-4">
                  <Link
                    to="readmore"
                    className="inline-flex items-center gap-2 rounded-md bg-[#6AB536] hover:bg-[#5A9C2E]  px-5 py-2.5 text-sm font-medium text-white shadow-sm"
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

      {/* TESTIMONIALS */}

      <Testimonials />

      {/* start now */}

      <section className="mt-16">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div className="max-w-prose text-left">
              <p className="mb-2 text-base text-pretty text-[#6AB536] sm:text-md/relaxed">
                GET STARTED WITH KINGSBRIDGE
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                Let's Get Started on Building Something Amazing Together
              </h1>

              <p className="mt-4 text-base text-pretty text-gray-700 sm:text-sm/relaxed">
                Whether you're a new construction project or need reliable
                facility management services, out team is here to help.
              </p>

              <div className="mt-4 flex gap-4 sm:mt-6">
                <Link
                  className=" flex items-center gap-2 rounded-lg bg-[#6AB536] px-12 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#5A9C2E]"
                  to="contact"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video">
              <img
                src={IMAGES.archiDesign}
                alt="get started with kingsbridge"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
