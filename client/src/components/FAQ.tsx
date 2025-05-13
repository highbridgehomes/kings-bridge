const FAQ = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-16"
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
        FAQ
      </h2>

      <p className="text-center max-w-screen-md mx-auto text-base sm:text-lg text-gray-700 mb-12">
        Find answers to common questions about our services and processes
      </p>
      <div className="flow-root   border border-gray-200 rounded-2xl ">
        <div className="flex bg-[#FAFAFA] border-b border-gray-200 rounded-t-2xl py-4 px-6 text-base sm:text-lg text-gray-700 ">
          <h2 className="text-lg font-medium">FAQs </h2>
        </div>
        <div className="-my-4 flex flex-col divide-y divide-gray-200">
          <details
            className="group py-4 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex pt-4 px-6 items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                What services does Kingsbridge offer?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="px-6 py-4 text-gray-900">
              Kingsbridge provides a full suite of services including
              residential and commercial construction, property renovations,
              facility management, and integrated security system installation.
              We’re committed to delivering quality craftsmanship and reliable
              maintenance solutions tailored to our clients’ needs.
            </p>
          </details>

          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex px-6 items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                Do you handle both residential renovations and large-scale
                commercial construction projects?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="px-6 py-4 text-gray-900">
              Yes, we specialize in both. Kingsbridge has dedicated teams with
              experience in residential renovations and large-scale commercial
              construction. Each team is equipped with the expertise and
              resources needed to deliver high-quality results regardless of
              project size.
            </p>
          </details>

          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex pb-4 px-6 items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                Do your security systems include 24/7 monitoring services?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="px-6 py-4 text-gray-900">
              We offer both installation and maintenance of advanced security
              systems. Additionally, we provide optional 24/7 professional
              monitoring services to ensure your properties remain protected
              around the clock.
            </p>
          </details>
          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex px-6 items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                Can Kingsbridge assist with property acquisition or real estate
                consultancy?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="px-6 py-4 text-gray-900">
              Absolutely. Kingsbridge offers expert real estate consultancy
              services to help clients make informed investment decisions,
              acquire the right properties, and navigate regulatory requirements
              with ease.
            </p>
          </details>

          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex pb-4 px-6 items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                How do you ensure quality and compliance on construction
                projects?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="px-6 py-4 text-gray-900">
              We adhere to strict industry standards and regulatory guidelines.
              Our team conducts regular inspections, uses premium materials, and
              works with certified professionals to ensure every project is
              delivered with exceptional quality and full compliance.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
