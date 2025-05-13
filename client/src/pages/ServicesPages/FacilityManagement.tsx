import { Helmet } from "react-helmet-async";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FacilityManagement = () => {
  return (
    <>
      <Helmet>
        <title>Facility Management | KingsBridge</title>
      </Helmet>
      <NavBar />
      <section className="bg-white max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-10">
          <h3 className="text-2xl sm:text-4xl font-semibold text-gray-900 sm:text-left text-center">
            Facility Management
          </h3>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FacilityManagement;
