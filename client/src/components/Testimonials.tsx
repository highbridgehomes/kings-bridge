import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Kingsbridge Construction transformed our factory space in just a few months. The results exceeded our expectations.",
    name: "Engr. Musa Abdullahi",
    title: "MD, Northern Steel Works",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "The professionalism shown by the Kingsbridge team was top-notch. We felt involved throughout the process.",
    name: "Mrs. Ifeoma Okonkwo",
    title: "Director, Oak Plaza",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "From design to completion, they communicated every step of the way. A reliable partner indeed.",
    name: "Mr. Chinedu Nwankwo",
    title: "CEO, Enugu Green Homes",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "Our experience was seamless. Kingsbridge delivered a high-quality hotel on time and within budget.",
    name: "Mrs. Bukola Adeyemi",
    title: "Manager, Lagos Luxury Suites",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "They turned our vision into reality. The school campus they built is functional, beautiful, and future-ready.",
    name: "Dr. Tunde Akinwale",
    title: "Principal, Zenith International School",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "Working with Kingsbridge was one of the best decisions we made. The entire process was smooth and efficient.",
    name: "Mr. Ibrahim Bello",
    title: "Founder, Arewa Real Estate",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "Kingsbridge delivered our hospital renovation ahead of schedule. Their attention to detail was remarkable.",
    name: "Dr. Halima Yusuf",
    title: "Medical Director, Unity Clinic",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "A solid partner in infrastructure development. We were impressed by their project management and delivery speed.",
    name: "Mr. Emmanuel Ogundele",
    title: "Project Head, SafeRoad Nigeria",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "They built our shopping complex with precision and care. The outcome was both modern and functional.",
    name: "Mrs. Aminat Salihu",
    title: "Owner, Harmony Mall",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "Kingsbridge's team is innovative and reliable. They brought fresh ideas to our housing project.",
    name: "Mr. Femi Adekunle",
    title: "Developer, Sunrise Estates",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "From blueprint to ribbon-cutting, their service was outstanding. We couldn’t have asked for a better partner.",
    name: "Mrs. Grace Obasi",
    title: "Chairperson, Pearl Women Cooperative",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "They provided exceptional quality on our commercial development. Their professionalism stood out throughout.",
    name: "Mr. Ahmed Lawal",
    title: "CEO, BlueSquare Properties",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=928&q=80",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const perPage = isDesktop ? 6 : 1;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const currentTestimonials = testimonials.slice(
    index * perPage,
    index * perPage + perPage
  );

  const next = () => {
    if (index < totalPages - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="mt-8 bg-[#F8F9FC] mx-auto px-4 py-12 sm:px-6 lg:px-16 sm:mt-10 lg:mt-16">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
        What Our Clients Say
      </h2>

      <p className="mt-4 mb-12 text-center max-w-prose mx-auto text-base sm:text-lg text-gray-700">
        See how we have helped others
      </p>

      <div
        className={`grid gap-6 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}
      >
        {currentTestimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 h-full">
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <div className="flex items-center gap-4 mt-4">
              <img
                alt={testimonial.name}
                src={testimonial.image}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          disabled={index === 0}
          className={`p-3 rounded-full transition ${
            index === 0
              ? "bg-gray-300 text-white cursor-pointer"
              : "bg-[#6AB536] text-white cursor-pointer  hover:bg-[#5A9C2E]"
          }`}
        >
          <ChevronLeftIcon size={20} />
        </button>

        <button
          onClick={next}
          disabled={index === totalPages - 1}
          className={`p-3 rounded-full transition ${
            index === totalPages - 1
              ? "bg-gray-300 text-white cursor-pointer"
              : "bg-[#6AB536] text-white cursor-pointer hover:bg-[#5A9C2E]"
          }`}
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
