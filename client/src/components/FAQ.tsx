const FAQ = () => {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-16">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8">
        FAQ
      </h2>

      <p className="text-center max-w-screen-md mx-auto text-base sm:text-lg text-gray-700 mb-12">
        Common questions answered
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
                What services does Kingsbridge offer?{" "}
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
              Kingsbridge likely offers a range of construction services and
              comprehensive facility management solutions, potentially including
              building maintenance, renovation projects, and property
              management.{" "}
            </p>
          </details>

          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex  px-6 items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                Do you handle both residential renovations and large-scale
                commercial construction projects simultaneously, or do you have
                separate teams for each?{" "}
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex pb-4 px-6 items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                For your security and safety systems, do you provide 24/7
                monitoring services or just installation and maintenance?{" "}
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
