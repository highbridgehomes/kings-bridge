import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  HomeIcon,
  Mail,
  ShoppingBag,
} from "lucide-react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { IMAGES } from "../constants/images";
import { ICONS } from "../constants/icons";
import FeaturedProjects from "../components/Projects";
import FAQ from "../components/FAQ";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

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
        <div className="mx-auto w-full max-w-screen-xl px-4 pb-16 pt-10 sm:px-6  sm:pb-24 sm:pt-12 md:grid md:grid-cols-2 md:mt-0 md:items-center md:gap-4 lg:px-8 lg:pb-32 lg:pt-16">
          <div
            data-aos="fade-up"
            className="max-w-prose md:text-left  text-center"
          >
            <p className="mb-2 text-base text-pretty text-[#6AB536] sm:text-md/relaxed">
              REAL ESTATE
            </p>

            <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Building the Future with Precision and
              <strong className=" text-[#6AB536]"> Integrity</strong>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Delivering innovative construction and facility management
              solutions across Nigeria.
            </p>

            <div className="mt-4 flex justify-center md:justify-start sm:mt-6">
              <Link
                className=" flex items-center gap-2 rounded-lg bg-[#6AB536] px-12 py-3 font-medium text-white shadow-sm hover:bg-[#5A9C2E] transform transition-transform duration-200 hover:scale-105"
                to="contact"
              >
                <span>Contact Us</span>
                <Mail className="w-4 h-4 text-white" />
              </Link>
            </div>
            <div className="mt-4 hidden lg:flex  gap-4 sm:mt-6">
              <div className="flex items-center justify-center rounded-full gap-4 bg-white border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm hover:shadow-md transition-colors">
                <img
                  src={IMAGES.happyCustomersOne}
                  className="w-auto h-10 object-cover"
                />
                <p className="text-sm font-medium text-gray-700">
                  1,000+ Happy Customers
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center rounded-full gap-4 bg-white border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm hover:shadow-md  transition-colors ">
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

          <div
            data-aos="fade-left"
            className="relative w-fit mx-auto mt-10 sm:mt-12 md:mt-0"
          >
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
      <section id="about-us" className="mt-16 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h3
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className="text-3xl font-bold text-gray-900 sm:text-4xl leading-snug"
          >
            Welcome to <span className="text-[#6AB536]">KINGSBRIDGE</span>{" "}
            <br />
            Construction and Facility Management Limited
          </h3>

          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-6 text-gray-700 text-base sm:text-lg max-w-3xl mx-auto"
          >
            Kingsbridge, a proud subsidiary of Highbridge Group, specializes in
            delivering top-tier construction and facility management services.
            Our commitment to excellence and innovation positions us as a leader
            in the industry.
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 bg-[#F9FCF7] mx-auto px-4 py-12 sm:px-6 lg:px-16 sm:mt-10 lg:mt-8"
      >
        {/* Vision */}
        <div className="h-auto rounded-2xl p-6 bg-white transform transition-transform duration-500 ease-in hover:scale-[1.03] hover:shadow-xl">
          <div className="flex flex-col items-start gap-4">
            <img
              alt="Vision"
              src={ICONS.vision}
              className="w-auto h-auto object-cover transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
            />

            <div>
              <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                Vision
              </h3>
              <p className="mt-0.5 text-gray-700">
                To be Nigeria's leading provider of sustainable construction and
                facility management solutions, aligning with Highbridge Group's
                mission to connect clients with high-value opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* mission */}

        <div className="h-auto rounded-2xl p-6 bg-white transform transition-transform duration-500 ease-in hover:scale-[1.03] hover:shadow-xl">
          <div className="flex flex-col items-start gap-4">
            <img
              alt="Mission"
              src={ICONS.mission}
              className="w-auto h-auto object-cover transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
            />
            <div>
              <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                Mission
              </h3>
              <p className="mt-0.5 text-gray-700">
                To deliver exceptional construction and facility management
                services that exceed client expectations through innovation,
                integrity, and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* core values */}
        <div className="h-auto rounded-2xl p-6 bg-white transform transition-transform duration-500 ease-in hover:scale-[1.03] hover:shadow-xl">
          <div className="flex flex-col items-start gap-4">
            <img
              alt="Core Values"
              src={ICONS.values}
              className="w-auto h-auto object-cover transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
            />
            <div>
              <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                Core Values
              </h3>
              <ul className="mt-2 list-disc list-outside pl-5 text-gray-700 space-y-1">
                <li>
                  <span className="pl-1">
                    Integrity: Upholding the highest ethical standards in all
                    our dealings.
                  </span>
                </li>
                <li>
                  <span className="pl-1">
                    Innovation: Continuously seeking creative solutions to meet
                    client needs.
                  </span>
                </li>
                <li>
                  <span className="pl-1">
                    Excellence: Striving for superior quality in every project.
                  </span>
                </li>
                <li>
                  <span className="pl-1">
                    Sustainability: Promoting environmentally responsible
                    practices.
                  </span>
                </li>
                <li>
                  <span className="pl-1">
                    Collaboration: Fostering strong partnerships with clients
                    and stakeholders.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* objectives */}
        <div className="h-auto rounded-2xl p-6 bg-white transform transition-transform duration-500 ease-in hover:scale-[1.03] hover:shadow-xl">
          <div className="flex flex-col items-start gap-4">
            <img
              alt="Objectives"
              src={ICONS.objectives}
              className="w-auto h-auto object-cover transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
            />
            <div>
              <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                Objectives
              </h3>
              <ul className="mt-2 list-disc list-outside pl-5 text-gray-700 space-y-1">
                <li>
                  <span className="pl-1">
                    Deliver projects on time and within budget.
                  </span>
                </li>
                <li>
                  <span className="pl-1">
                    Maintain high client satisfaction through quality service.
                  </span>
                </li>
                <li>
                  <span className="pl-1">
                    Implement sustainable building practices.
                  </span>
                </li>
                <li>
                  <span className="pl-1">
                    Develop and retain skilled professionals.
                  </span>
                </li>
                <li>
                  <span className="pl-1">
                    Expand our service offerings across Nigeria.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-services"
        className=" bg-[#121212] mx-auto px-4 py-12 sm:px-6 lg:px-16 scroll-mt-20"
      >
        <h2 className="flex items-center mb-4 justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
          Our Services
        </h2>
        <p className=" mb-8 mx-auto text-center max-w-prose text-base text-pretty text-white sm:text-lg/relaxed">
          Discover how our expertise can help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {/* Construction services */}
          <div
            data-aos="fade-up"
            className="h-auto rounded-2xl p-6 bg-white transition-transform duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl group cursor-pointer"
          >
            <div className="flex flex-col items-start gap-4">
              <img
                alt="Construction services"
                src={IMAGES.archiDesign}
                className="w-full h-60 rounded-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-1"
              />
              <div>
                <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                  Construction Services
                </h3>
                <ul className="mt-2 text-md list-disc list-outside pl-5 text-gray-700 space-y-1">
                  <li>
                    <span className="pl-1">
                      Residential and commercial building construction
                    </span>
                  </li>
                  <li>
                    <span className="pl-1">Infrastructure development</span>
                  </li>
                  <li>
                    <span className="pl-1">Project management</span>
                  </li>
                  <li>
                    <span className="pl-1">Renovation and remodeling</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/construction-services"
                className="group flex gap-2 items-center text-[#6AB536] hover:text-[#5A9C2E]"
              >
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 text-[#6AB536] group-hover:text-[#5A9C2E]" />
              </Link>
            </div>
          </div>

          {/* facility management Services */}
          <div
            data-aos="zoom-in"
            className="h-auto rounded-2xl p-6 bg-white transition-transform duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl group cursor-pointer"
          >
            <div className="flex flex-col items-start gap-4">
              <img
                alt="facility management"
                src={IMAGES.estateConsultancy}
                className="w-full h-60 rounded-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-1"
              />
              <div>
                <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                  Facility Management Services
                </h3>
                <ul className="mt-2 text-md list-disc list-outside pl-5 text-gray-700 space-y-1">
                  <li>
                    <span className="pl-1">
                      Maintenance and repair services
                    </span>
                  </li>
                  <li>
                    <span className="pl-1">Energy management</span>
                  </li>
                  <li>
                    <span className="pl-1">Security and safety systems</span>
                  </li>
                  <li>
                    <span className="pl-1">
                      Cleaning and janitorial services
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                to="/facility-management-services"
                className="group flex gap-2 items-center text-[#6AB536] hover:text-[#5A9C2E]"
              >
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 text-[#6AB536] group-hover:text-[#5A9C2E]" />
              </Link>
            </div>
          </div>

          {/* real estate management services */}
          <div
            data-aos="zoom-in"
            className="h-auto rounded-2xl p-6 bg-white transition-transform duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl group cursor-pointer"
          >
            <div className="flex flex-col items-start gap-4">
              <img
                alt="Real Estate Services"
                src={IMAGES.realEstate}
                className="w-full h-60 rounded-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-1"
              />
              <div>
                <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                  Real Estate Services
                </h3>
                <ul className="mt-2 text-md list-disc list-outside pl-5 text-gray-700 space-y-1">
                  <li>
                    <span className="pl-1">
                      Property sales and leasing solutions
                    </span>
                  </li>
                  <li>
                    <span className="pl-1">
                      Real estate investment advisory
                    </span>
                  </li>
                  <li>
                    <span className="pl-1">
                      Land acquisition and development
                    </span>
                  </li>
                  <li>
                    <span className="pl-1">
                      Valuation and property management
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                to="/real-estate-services"
                className="group flex gap-2 items-center text-[#6AB536] hover:text-[#5A9C2E]"
              >
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 text-[#6AB536] group-hover:text-[#5A9C2E]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <FeaturedProjects />

      {/* build together */}
      <section className="bg-[#0A1403] p-4 sm:p-6 lg:py-12 lg:px-16 lg:place-content-center">
        <div className="bg-[#152A06] w-full rounded-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-16 lg:py-32 transform transition-transform duration-500 ease-in hover:scale-[1.03]">
          <div className="mx-auto max-w-2xl text-center">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mb-4 text-base text-pretty text-white sm:text-lg/relaxed"
            >
              LET'S BUILD SOMETHING TOGETHER
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-4xl font-bold  text-white sm:text-5xl"
            >
              Let’s Get Started on Building Something Amazing Together
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mt-4  text-base text-pretty text-center sm:text-justify text-white sm:text-lg/relaxed"
            >
              At Kingsbridge, we transform your vision into reality with expert
              design and construction solutions. Our team brings years of
              experience to every project, ensuring quality results that exceed
              expectations.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mt-4 flex justify-center sm:mt-6"
            >
              <Link
                className=" flex items-center gap-2 rounded-lg bg-[#6AB536] px-12 py-3 font-medium text-white shadow-sm  hover:bg-[#5A9C2E] transform transition-transform duration-200 hover:scale-105"
                to="contact"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <Footer />
    </>
  );
};

export default Home;
