import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, HomeIcon, Mail, ShoppingBag } from "lucide-react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { IMAGES } from "../constants/images";
import { ICONS } from "../constants/icons";
import Testimonials from "../components/Testimonials";
import FeaturedProjects from "../components/Projects";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";

const Home = () => {
  const stats = [
    { label: "Years", target: 10 },
    { label: "Projects Completed", target: 500 },
    { label: "Expert Team", target: 50 },
    { label: "Happy Customers", target: 1000 },
  ];

  const IMAGES_ARRAY = [
    IMAGES.clientLogo1,
    IMAGES.clientLogo2,
    IMAGES.clientLogo3,
    IMAGES.clientLogo4,
    IMAGES.clientLogo5,
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
          <div className="max-w-prose md:text-left  text-center">
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
                className=" flex items-center gap-2 rounded-lg bg-[#6AB536] px-12 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#5A9C2E]"
                to="contact"
              >
                <span>Contact Us</span>
                <Mail className="w-4 h-4 text-white" />
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

        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 sm:text-4xl sm:text-left text-center">
                  Welcome to Kingsbridge
                </h3>

                <p className="mt-4 text-gray-700 sm:text-left text-center">
                  Kingsbridge, a proud subsidiary of Highbridge Group,
                  specializes in delivering top-tier construction and facility
                  management services. Our commitment to excellence and
                  innovation positions us as a leader in the industry.
                </p>
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

      <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 bg-[#F9FCF7] mx-auto px-4 py-12 sm:px-6 lg:px-16 sm:mt-10 lg:mt-16">
        {/* Vision */}

        <div className="h-auto rounded-2xl  p-6 bg-white">
          <div className="flex flex-col items-start gap-4">
            <img
              alt="Vision"
              src={ICONS.vision}
              className="w-auto h-auto object-cover"
            />

            <div>
              <h3 className="font-medium mt-2 text-gray-900 sm:text-lg">
                Vision
              </h3>
              <p className="mt-0.5 text-gray-700">
                To be Nigeria's leading provider of sustainable construction and
                facility management solutions, aligning with Highbridge Group's
                mission to connect clients with high-value oppurtunities.
              </p>
            </div>
          </div>
        </div>

        {/* mission */}

        <div className="h-auto rounded-2xl  p-6 bg-white">
          <div className="flex flex-col items-start gap-4">
            <img alt="Mission" src={ICONS.mission} className=" object-cover" />
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
        <div className="h-auto rounded-2xl p-6 bg-white">
          <div className="flex flex-col items-start gap-4">
            <img
              alt="Core Values"
              src={ICONS.values}
              className="object-cover"
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
        <div className="h-auto rounded-2xl p-6 bg-white">
          <div className="flex flex-col items-start gap-4">
            <img
              alt="Objectives"
              src={ICONS.objectives}
              className="object-cover"
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

      <section className=" bg-[#121212] mx-auto px-4 py-12 sm:px-6 lg:px-16  ">
        <h2 className="flex items-center mb-4 justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
          Our Services
        </h2>
        <p className=" mb-8 mx-auto text-center max-w-prose text-base text-pretty text-white sm:text-lg/relaxed">
          Discover how our expertise can help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Construction services */}

          <div className="h-auto rounded-2xl p-6 bg-white">
            <div className="flex flex-col items-start gap-4">
              <img
                alt="Construction services"
                src={IMAGES.archiDesign}
                className="w-full h-60 rounded-2xl object-cover"
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
            </div>
          </div>

          {/* facility management Services */}
          <div className="h-auto rounded-2xl p-6 bg-white">
            <div className="flex flex-col items-start gap-4">
              <img
                alt="facility management"
                src={IMAGES.estateConsultancy}
                className="w-full h-60 rounded-2xl object-cover"
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
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <FeaturedProjects />

      {/* Notable Clients */}
      <section className="mt-8 bg-white mx-auto px-4 py-12 sm:px-6 lg:px-16 sm:mt-10 lg:mt-16">
        <h2 className="flex items-center mb-4 justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Notable Clients
        </h2>

        <p className="mb-12 mx-auto text-center max-w-prose text-base text-gray-700 sm:text-lg">
          Hear from our satisfied clients about their experiences with
          Kingsbridge.
        </p>

        {/* Animate horizontally */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-horizontal">
            {[...IMAGES_ARRAY, ...IMAGES_ARRAY].map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 h-32 w-60 flex items-center justify-center bg-white"
              >
                <img
                  alt={`Client logo ${idx + 1}`}
                  src={src}
                  className="h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <Testimonials />

      {/* build together */}
      <section className="bg-[#0A1403] p-4 sm:p-6 lg:py-12 lg:px-16 lg:place-content-center">
        <div className="bg-[#152A06] w-full rounded-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-base text-pretty text-white sm:text-lg/relaxed">
              LET'S BUILD SOMETHING TOGETHER
            </p>
            <h1 className="text-4xl font-bold  text-white sm:text-5xl">
              Let’s Get Started on Building Something Amazing Together
            </h1>

            <p className="mt-4  text-base text-pretty text-justify text-white sm:text-lg/relaxed">
              At Kingsbridge, we transform your vision into reality with expert
              design and construction solutions. Our team brings years of
              experience to every project, ensuring quality results that exceed
              expectations.
            </p>

            <div className="mt-4 flex justify-center sm:mt-6">
              <Link
                className=" flex items-center gap-2 rounded-lg bg-[#6AB536] px-12 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#5A9C2E]"
                to="contact"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* blog post  */}
      <Blog />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </>
  );
};

export default Home;
