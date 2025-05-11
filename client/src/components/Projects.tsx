import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { IMAGES } from "../constants/images";

const featuredProjects = [
  {
    text: "A premier residential development showcasing modern architecture and sustainable design",
    name: "Highbridge Residences",
    title: "Highbridge Residences",
    image: IMAGES.residences,
  },
  {
    text: "A serene estate offering a blend of luxury and affordability",
    name: "Highbridge Gardens Estate",
    title: "Highbridge Gardens Estate",
    image: IMAGES.gardensEstate,
  },
  {
    text: "A contemporary hosuing project emphasizing comfort and community living",
    name: "Highbridge Chestnut Estate",
    title: "Highbridge Chestnut Estate",
    image: IMAGES.chestnut,
  },
  {
    text: "An exclusive estate designed for tranquility and elegance",
    name: "Highbridge Haven Estate",
    title: "Highbridge Haven Estate",
    image: IMAGES.haven,
  },
  {
    text: "A modern fully serviced recreational facility developed to meet the lifstyle needs of the Awoyaya community",
    name: "Awoyaya Club House",
    title: "Awoyaya Club House",
    image: IMAGES.awoyayaClubHouse,
  },
];

const FeaturedProjects = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = window.innerWidth >= 1024 ? 3 : 1;

  const next = () => {
    if (index < featuredProjects.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="mt-8 bg-[#FFFFFF] mx-auto px-4 py-12 sm:px-6 lg:px-16 sm:mt-10 lg:mt-16">
      <h2 className="flex items-center mb-4 justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
        Featured Projects
      </h2>

      <p className="mb-12 mx-auto text-center max-w-[80ch] text-base text-gray-700 sm:text-lg">
        Discover our latest projects, reflecting our commitment to innovative
        solutions and exceptional quality in all aspects of property development
        and management.
      </p>

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
        >
          {featuredProjects.map((featuredProjects, idx) => (
            <div
              key={idx}
              className="min-w-full lg:min-w-[33.3333%] px-4 box-border"
            >
              <div className="flex flex-col gap-6 p-4 shadow border rounded-2xl border-gray-200 h-full bg-white">
                <img
                  alt={featuredProjects.name}
                  src={featuredProjects.image}
                  className="w-full h-60 rounded-2xl object-fit"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {featuredProjects.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {featuredProjects.text}
                  </p>
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
          disabled={index >= featuredProjects.length - visibleCards}
          className={`p-3 rounded-full transition ${
            index >= featuredProjects.length - visibleCards
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

export default FeaturedProjects;
