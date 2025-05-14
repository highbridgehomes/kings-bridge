import { Helmet } from "react-helmet-async";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMAGES } from "../../constants/images";

const RealEstateServices = () => {
  const services = [
    {
      title: "Property Development",
      description:
        "We manage the end-to-end development of residential and commercial properties—from land acquisition and planning to construction and sales.",
      image: IMAGES.realEstate1,
    },
    {
      title: "Property Sales and Marketing",
      description:
        "Our expert team provides sales strategies and marketing campaigns to connect buyers with premium properties and close deals efficiently.",
      image: IMAGES.realEstate2,
    },
    {
      title: "Real Estate Investment Advisory",
      description:
        "We guide investors in making informed decisions with real estate portfolio analysis, risk assessment, and opportunity identification.",
      image: IMAGES.realEstate3,
    },
    {
      title: "Property Management",
      description:
        "We oversee tenant relations, lease administration, maintenance, and rent collection to maximize property value and ensure smooth operations.",
      image: IMAGES.realEstate4,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Real Estate Services | KingsBridge</title>
      </Helmet>
      <NavBar />

      <section className="bg-white max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div data-aos="zoom-in" className="text-center sm:text-left  mx-auto">
          <h3 className="text-2xl sm:text-4xl font-semibold text-gray-900">
            Real Estate Services
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            At Kingsbridge, our real estate services span across development,
            investment, sales, and property management. We empower clients with
            strategic insights and seamless solutions to navigate the dynamic
            property market with confidence.
          </p>
        </div>

        {/* Grid */}
        <div
          data-aos="fade-up"
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2  text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RealEstateServices;
