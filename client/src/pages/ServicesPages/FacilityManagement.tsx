import { Helmet } from "react-helmet-async";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMAGES } from "../../constants/images";

const FacilityManagement = () => {
  const services = [
    {
      title: "Maintenance and Repair Services",
      description:
        "Regular and emergency maintenance to ensure systems run smoothly and breakdowns are minimized across electrical, plumbing, HVAC, and other building systems.",
      image: IMAGES.facility1,
    },
    {
      title: "Energy Management",
      description:
        "We implement energy-saving strategies and systems that reduce operational costs and support sustainability goals.",
      image: IMAGES.facility2,
    },
    {
      title: "Security and Safety Systems",
      description:
        "From installation to monitoring, we provide reliable security and safety systems including CCTV, fire alarms, and access control to protect your assets and personnel.",
      image: IMAGES.facility3,
    },
    {
      title: "Cleaning and Janitorial Services",
      description:
        "Our team ensures a consistently clean, hygienic, and welcoming environment for employees, tenants, and visitors with routine and deep cleaning services.",
      image: IMAGES.facility4,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Facility Management | KingsBridge</title>
      </Helmet>
      <NavBar />

      <section className="bg-white max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div data-aos="zoom-in" className="text-center sm:text-left  mx-auto">
          <h3 className="text-2xl sm:text-4xl font-semibold text-gray-900">
            Facility Management Services
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            We understand that efficient facility management is essential to
            maintaining operational excellence. At Kingsbridge, we provide
            integrated solutions that ensure your buildings and environments are
            safe, functional, and optimized for performance.
          </p>
        </div>

        {/* Services Grid */}
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

export default FacilityManagement;
