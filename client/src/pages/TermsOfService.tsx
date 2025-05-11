import { Helmet } from "react-helmet-async";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | KingsBridge</title>
        <meta
          name="description"
          content="Review the terms and conditions governing your use of KingsBridge's website and services."
        />
      </Helmet>
      <NavBar />
      <section className="bg-white max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-16">
        <h2 className="text-center sm:text-left text-3xl font-semibold text-gray-900">
          Terms of Service
        </h2>

        <div className="pt-6 pb-10  space-y-10">
          {/* Introduction */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Introduction
            </h4>
            <p className="text-gray-600">
              Welcome to KingsBridge. By accessing or using our website and
              services, you agree to be bound by the following terms and
              conditions. If you do not agree to these terms, please refrain
              from using our services.
            </p>
          </div>

          {/* Use of Services */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Use of Services
            </h4>
            <p className="text-gray-600">
              You agree to use our website and services only for lawful purposes
              and in accordance with all applicable laws and regulations.
              Unauthorized use, including but not limited to hacking, scraping,
              or reverse engineering, is strictly prohibited.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Intellectual Property
            </h4>
            <p className="text-gray-600">
              All content on our website, including text, graphics, logos,
              images, and software, is the property of KingsBridge or its
              licensors and is protected by copyright and other intellectual
              property laws.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Limitation of Liability
            </h4>
            <p className="text-gray-600">
              KingsBridge shall not be held liable for any indirect, incidental,
              or consequential damages arising from the use or inability to use
              our website or services, even if we have been advised of the
              possibility of such damages.
            </p>
          </div>

          {/* User Accounts */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              User Accounts
            </h4>
            <p className="text-gray-600">
              If you create an account on our website, you are responsible for
              maintaining the confidentiality of your login credentials and for
              all activities that occur under your account.
            </p>
          </div>

          {/* Termination */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">Termination</h4>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate your access to our
              website or services at any time, without notice, for any reason,
              including breach of these Terms.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Changes to These Terms
            </h4>
            <p className="text-gray-600">
              We may update these Terms of Service from time to time. Any
              changes will be posted on this page, and continued use of the
              website constitutes acceptance of those changes.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
            <p className="text-gray-600">
              If you have any questions or concerns about these Terms of
              Service, please contact us via our official channels provided on
              the website.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsOfService;
