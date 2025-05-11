import { Helmet } from "react-helmet-async";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | KingsBridge</title>
        <meta
          name="description"
          content="Learn how KingsBridge uses cookies to improve your experience and ensure website functionality."
        />
      </Helmet>
      <NavBar />
      <section className="bg-white max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-16">
        <h2 className="text-center sm:text-left text-3xl font-semibold text-gray-900">
          Cookie Policy
        </h2>

        <div className="pt-6 pb-10 space-y-10">
          {/* Introduction */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Introduction
            </h4>
            <p className="text-gray-600">
              This Cookie Policy explains how KingsBridge ("we", "our", or "us")
              uses cookies and similar tracking technologies when you visit our
              website. By continuing to use our site, you agree to our use of
              cookies as described in this policy.
            </p>
          </div>

          {/* What Are Cookies */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              What Are Cookies?
            </h4>
            <p className="text-gray-600">
              Cookies are small data files that are stored on your browser or
              device when you visit a website. They help websites remember your
              preferences and improve your user experience.
            </p>
          </div>

          {/* Types of Cookies We Use */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Types of Cookies We Use
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our website.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                and enhance usability.
              </li>
            </ul>
          </div>

          {/* How We Use Cookies */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              How We Use Cookies
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>To ensure website functionality and performance.</li>
              <li>To analyze user behavior and improve services.</li>
              <li>To remember your preferences and enhance your experience.</li>
            </ul>
          </div>

          {/* Third-Party Cookies */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Third-Party Cookies
            </h4>
            <p className="text-gray-600">
              We may allow trusted third-party services, like analytics or
              social media platforms, to place cookies for tracking and
              reporting purposes. These cookies are subject to the respective
              third-party privacy policies.
            </p>
          </div>

          {/* Managing Cookies */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Managing Cookies
            </h4>
            <p className="text-gray-600">
              You can control or disable cookies through your browser settings.
              Please note that disabling certain cookies may affect the
              functionality of our website.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              Changes to This Policy
            </h4>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with a revised effective date.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CookiePolicy;
