import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Transforming Urban Skylines: Our Latest High-Rise Project",
    excerpt:
      "Discover how Highbridge is reshaping city skylines with our innovative high-rise developments in Lagos. This project showcases our commitment to modern design and structural excellence...",

    role: "Lead Architect, Highbridge",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=928&q=80",
    slug: "/blog/high-rise-lagos",
  },
  {
    title: "Sustainable Luxury: Building Green in Abuja",
    excerpt:
      "Explore how Highbridge integrates sustainable practices in luxury residential builds. From solar roofing to smart ventilation, we're redefining eco-conscious living...",

    role: "Project Manager, Highbridge",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=928&q=80",
    slug: "/blog/sustainable-luxury-abuja",
  },
  {
    title: "Community First: Our School Construction in Ibadan",
    excerpt:
      "We believe in building for people. Take a look at our recently completed school project that blends safety, design, and community needs into a meaningful educational space...",
    role: "Community Projects Lead, Highbridge",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=928&q=80",
    slug: "/blog/school-project-ibadan",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-16">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8">
        Blog
      </h2>

      <p className="text-center max-w-screen-md mx-auto text-base sm:text-lg text-gray-700 mb-12">
        Industry News and Insights
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col"
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
