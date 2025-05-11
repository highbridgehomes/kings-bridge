import { Helmet } from "react-helmet-async";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const learnMoreContent = {
  title: "Welcome to Kingsbridge",
  heading: "Learn More",
  description:
    "Kingsbridge, a proud subsidiary of Highbridge Group, specializes in delivering top-tier construction and facility management services. Our commitment to excellence and innovation positions us as a leader in the industry.",
  videoUrl: "https://www.youtube.com/embed/vkF__wRUFKA?autoplay=0&rel=0",
};

const LearnMore = () => {
  return (
    <>
      <Helmet>
        <title>Learn More | KingsBridge</title>
        <meta
          name="description"
          content="Discover Kingsbridge — a leader in construction and facility management, delivering excellence through innovation."
        />
      </Helmet>
      <NavBar />

      <section className="bg-white max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* <h2 className="text-center sm:text-left text-3xl font-semibold text-gray-900 ">
          {learnMoreContent.heading}
        </h2> */}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-10">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl sm:text-4xl font-semibold text-gray-900 sm:text-left text-center">
              {learnMoreContent.title}
            </h3>
            <p className="mt-4 text-gray-700 sm:text-left text-center">
              {learnMoreContent.description}
            </p>
          </div>

          {/* Embedded Video */}
          <div className="rounded-2xl overflow-hidden aspect-video">
            <iframe
              className="w-full h-full border-0"
              src={learnMoreContent.videoUrl}
              title="Kingsbridge Video"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LearnMore;
