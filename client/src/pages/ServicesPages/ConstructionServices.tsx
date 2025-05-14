import { Helmet } from "react-helmet-async";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMAGES } from "../../constants/images";

const ConstructionServices = () => {
  const services = [
    {
      title: "Residential and Commercial Building Construction",
      description:
        "From modern homes to high-rise office buildings, we handle all phases of construction, ensuring structural integrity, functionality, and aesthetic appeal.",
      image: IMAGES.construction1,
    },
    {
      title: "Infrastructure Development",
      description:
        "We undertake infrastructure projects such as roads, drainage systems, and utilities that form the backbone of sustainable urban development.",
      image: IMAGES.construction2,
    },
    {
      title: "Project Management",
      description:
        "Kingsbridge provides end-to-end project management services overseeing planning, execution, quality control, budgeting, and risk management for seamless project delivery.",
      image: IMAGES.construction3,
    },
    {
      title: "Renovation and Remodeling",
      description:
        "Whether it’s updating a space or reconfiguring its layout, we offer tailored renovation and remodeling solutions to enhance both form and function.",
      image: IMAGES.construction4,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Construction Services | KingsBridge</title>
      </Helmet>
      <NavBar />

      <section className="bg-white max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Top section: heading + description */}
        <div data-aos="zoom-in" className="text-center sm:text-left mx-auto">
          <h3 className="text-2xl sm:text-4xl font-semibold text-gray-900">
            Construction Services
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            At Kingsbridge, we bring visions to life through expert construction
            solutions tailored to meet the evolving demands of clients across
            residential, commercial, and public sectors. With a team of seasoned
            professionals and a strong commitment to quality, we ensure projects
            are completed on time, within budget, and to the highest standards.
          </p>
        </div>

        {/* Cards section */}
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
                  loading="lazy"
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

export default ConstructionServices;
