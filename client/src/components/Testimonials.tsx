import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "Kingsbridge Construction transformed our factory space in just a few months...",
    name: "Engr. Musa Abdullahi",
    title: "MD, Northern Steel Works",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "The professionalism shown by the Kingsbridge team was top-notch...",
    name: "Mrs. Ifeoma Okonkwo",
    title: "Director, Oak Plaza",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "From design to completion, they communicated every step of the way...",
    name: "Mr. Chinedu Nwankwo",
    title: "CEO, Enugu Green Homes",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "Our experience was seamless. Kingsbridge delivered a high-quality hotel...",
    name: "Mrs. Bukola Adeyemi",
    title: "Manager, Lagos Luxury Suites",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "They turned our vision into reality. The school campus they built...",
    name: "Dr. Tunde Akinwale",
    title: "Principal, Zenith International School",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=928&q=80",
  },
  {
    text: "Working with Kingsbridge was one of the best decisions we made...",
    name: "Mr. Ibrahim Bello",
    title: "Founder, Arewa Real Estate",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=928&q=80",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = window.innerWidth >= 1024 ? 3 : 1;

  const next = () => {
    if (index < testimonials.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="mt-8 bg-[#F8F9FC] mx-auto px-4 py-12 sm:px-6 lg:px-16 sm:mt-10 lg:mt-16">
      <h2 className="flex items-center mb-8 justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
        Client testimonials
      </h2>

      <p className="mt-4 mb-12 mx-auto text-center max-w-prose text-base text-gray-700 sm:text-lg">
        Hear from our satisfied clients about their experiences with
        Kingsbridge.
      </p>

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="min-w-full lg:min-w-[33.3333%] px-2 box-border"
            >
              <div className="bg-white rounded-xl p-6 h-full">
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
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          disabled={index === 0}
          className={`p-3 rounded-full transition ${
            index === 0
              ? "bg-gray-300 text-white "
              : "bg-[#6AB536] text-white hover:bg-[#5A9C2E]"
          }`}
        >
          <ChevronLeftIcon size={20} />
        </button>

        <button
          onClick={next}
          disabled={index >= testimonials.length - visibleCards}
          className={`p-3 rounded-full transition ${
            index >= testimonials.length - visibleCards
              ? "bg-gray-300 text-white "
              : "bg-[#6AB536] text-white hover:bg-[#5A9C2E]"
          }`}
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
