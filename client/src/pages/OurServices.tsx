import { Helmet } from "react-helmet-async";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { IMAGES } from "../constants/images";

const services = [
  {
    title: "Construction Services",
    image: IMAGES.archiDesign,
    alt: "Construction services",
    items: [
      "Residential and commercial building construction",
      "Infrastructure development",
      "Project management",
      "Renovation and remodeling",
    ],
  },
  {
    title: "Facility Management Services",
    image: IMAGES.estateConsultancy,
    alt: "Facility management",
    items: [
      "Maintenance and repair services",
      "Energy management",
      "Security and safety systems",
      "Cleaning and janitorial services",
    ],
  },
];

const OurServices = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | KingsBridge</title>
        <meta
          name="description"
          content="Learn how KingsBridge uses cookies to improve your experience and ensure website functionality."
        />
      </Helmet>
      <NavBar />

      <section className="bg-white max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-16">
        <h2 className="text-center sm:text-left text-3xl font-semibold text-gray-900">
          Our Services
        </h2>
        <p className="text-center sm:text-left text-gray-700 mt-2 mb-10 max-w-prose">
          Discover how our expertise can help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 space-y-10 lg:space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border border-gray-100 rounded-2xl p-6 h-auto shadow-sm"
            >
              <div className="flex flex-col items-start gap-4">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-60 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-gray-900 font-medium sm:text-lg mt-2">
                    {service.title}
                  </h3>
                  <ul className="mt-2 text-md list-disc list-outside pl-5 text-gray-700 space-y-1">
                    {service.items.map((item, i) => (
                      <li key={i}>
                        <span className="pl-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OurServices;
