import { Helmet } from "react-helmet-async";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | KingsBridge</title>
        <meta name="description" content="Welcome to KingsBridge Real Estate" />
      </Helmet>
      <NavBar />
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-16">
        <h2 className="text-center sm:text-left text-3xl font-semibold text-gray-900 mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mx-auto">
          {/* Contact Form */}
          <form className="space-y-6 sm:p-6 p-4 border border-gray-200 shadow-md rounded-2xl">
            <div>
              <h3 className="text-2xl  text-gray-900">Get in Touch</h3>
              <p className="text-gray-600 mt-1">
                We'd love to hear from you. Reach out to us for inquiries or
                project consultations.
              </p>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6AB536]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6AB536]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Enter your message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6AB536]"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#6AB536] hover:bg-[#5A9C2E] text-white rounded-md  transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className=" space-y-8 flex flex-col justify-between h-full sm:p-6 p-4 border border-gray-200 shadow-md rounded-2xl">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-[#6AB536] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-md font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  KM 34 A&M PLAZA, Beside Mobil Filling Station, Lekki-Epe
                  Expressway, Oribanwa, Lagos.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-4 h-4 text-[#6AB536] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-md font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">info@kingsbridgeltd.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-4 h-4 text-[#6AB536] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-md font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">
                  (+234) 8152886217 (+234) 8152886218 (+234) 8152886219
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-4">
              <Globe className="w-4 h-4 text-[#6AB536] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-md font-semibold text-gray-800">Website</h4>
                <p className="text-gray-600">www.kingsbridgeltd.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
