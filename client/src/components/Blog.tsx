import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/images";

const blogPosts = [
  {
    title:
      "Highbridge Group Workers Extend Warm Wishes to Clients on Workers’ Day 2025",
    excerpt:
      "The dedicated staff of Highbridge Group celebrate Labour Day by appreciating the hard work of their clients and partners.",

    image: IMAGES.blogPost1,

    slug: "https://www.highbridgegroup.org/",
  },
  {
    title: "Highbridge Homes Launches Realtor Incentive Program for May 2025",
    excerpt:
      "Highbridge Homes, a subsidiary of Highbridge Group, announces exciting new incentives for realtors on select luxury units.",

    image: IMAGES.blogPost2,

    slug: "https://www.highbridgegroup.org/",
  },
  {
    title: "Highbridge Group Expands Real Estate Portfolio",
    excerpt: "Highbridge Group announces a new luxury residential project...",

    image: IMAGES.blogPost3,
    slug: "https://www.highbridgegroup.org/",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-16">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
        Blog
      </h2>

      <p className="text-center max-w-screen-md mx-auto text-base sm:text-lg text-gray-700 mb-12">
        Stay updated with industry news, project updates and expert insights.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl h-56 object-cover"
            />
            <div className=" mt-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                {post.excerpt}
              </p>
              <Link
                to={post.slug}
                className="mt-auto inline-flex items-center text-[#6AB536] hover:text-[#4d8f26] font-md group"
              >
                Read Full Article
                <ArrowUpRight className="ml-1 w-4 h-4 text-inherit transition-colors" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
