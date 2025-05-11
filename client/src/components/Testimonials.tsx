import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "Kingsbridge is reliable and affordable. Their service exceeded expectations.",
    name: "Deprince Electronics",
    title: "Returning Customer",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVzOS6-UGaE0FsWi6j4uu2ud1_ZGrIM2XwX3gegbXlqncuzwYs=w72-h72-p-rp-mo-br100",
  },

  {
    text: "The service quality was excellent. I was very satisfied with the results.",
    name: "Deprince Electronics",
    title: "Client Review",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWlAORHkKgro5Kvc-Sw3YH8WZ4oyVvD7yzty5OroHDmN617WFY=w72-h72-p-rp-mo-br100",
  },
  {
    text: "Really nice experience overall. They were professional and courteous.",
    name: "Sammy Uzochukwu",
    title: "Local Guide",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUwCzYSHm2lwCfKU8i0eQx7p4bLMwnTNzqh-3yITbrOIuAO-rJZ=w72-h72-p-rp-mo-ba2-br100",
  },
  {
    text: "Kingsbridge handled everything smoothly from start to finish.",
    name: "Fikemi Shofowora",
    title: "Local Guide",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXWhmaPeK2-02Zc2nzfo0_iSKydJH41TRAXO3GalEIYfEiSvuU=w72-h72-p-rp-mo-ba3-br100",
  },
  // {
  //   text: "I highly recommend their team. Great work and excellent customer service.",
  //   name: "Bukola Woleola",
  //   title: "Verified Customer",
  //   image:
  //     "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=928&q=80",
  // },
  // {
  //   text: "Professional, timely, and trustworthy. A company I can rely on.",
  //   name: "Oluwadara Aishat",
  //   title: "Homeowner",
  //   image:
  //     "https://images.unsplash.com/photo-1544005313-517d20b4c50d?auto=format&fit=crop&w=928&q=80",
  // },
  {
    text: "Great team and top-quality execution. Would gladly work with them again.",
    name: "Kennedy Kc",
    title: "Local Guide",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjU9vD_nh4yuuAqZlrcTD2kiy0oE4qUKFcjVvxWEP3HqAMeoHEFk=w72-h72-p-rp-mo-ba2-br100",
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
      <h2 className="flex items-center mb-4 justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
        Client testimonials
      </h2>

      <p className=" mb-12 mx-auto text-center max-w-prose text-base text-gray-700 sm:text-lg">
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
