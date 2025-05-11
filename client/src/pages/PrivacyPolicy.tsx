import { Helmet } from "react-helmet-async";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | KingsBridge</title>
        <meta name="description" content="Welcome to KingsBridge Real Estate" />
      </Helmet>
      <NavBar />
      <section className="bg-white max-w-6xl  mx-auto px-4 py-12 sm:px-6 lg:px-16">
        <h2 className="text-center sm:text-left text-3xl font-semibold text-gray-900 ">
          Privacy Policy
        </h2>

        <div className="pt-6 pb-10 space-y-10">
          {/* Section: Introduction */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Introduction
            </h4>
            <p className="text-gray-600">
              Kingsbridge likely offers a range of construction services and
              comprehensive facility management solutions, potentially including
              building maintenance, renovation projects, and property
              management.
            </p>
          </div>

          {/* Section: Information Collection */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Information Collection
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Personal information provided through contact forms</li>
              <li>Data collected via cookies and analytics tools</li>
            </ul>
          </div>

          {/* Section: Data Protection */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Data Protection
            </h4>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your
              information from unauthorized access.
            </p>
          </div>

          {/* Section: Third-Party Sharing */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Third-Party Sharing
            </h4>
            <p className="text-gray-600">
              We do not share your personal information with third parties
              without your consent, except as required by law.
            </p>
          </div>

          {/* Section: Your Rights */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">Your Rights</h4>
            <p className="text-gray-600">
              You have the right to access, correct, or delete your personal
              information.
            </p>
          </div>

          {/* Section: Use of Information */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Use of Information
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>To respond to inquiries and provide services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
