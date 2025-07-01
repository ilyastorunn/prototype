import { Link } from "react-router-dom";
import blogPosts from "@/data/blogPost";

export default function NewBlogPosts() {
  const featured = blogPosts[0];
  const others = blogPosts.slice(1, 4);

  return (
    <>
      <hr className="border-t border-gray-200 my-12" />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">NEW BLOG POSTS</h2>

        {/* Featured Post */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={featured.title}
            className="w-full h-64 object-cover rounded"
          />
          <div>
            <Link to={`/blog/${featured.slug}`}>
              <h3 className="text-xl font-semibold mb-2">{featured.title}</h3>
            </Link>
            <p className="text-sm text-gray-500 mb-2">{featured.date}</p>
            <p className="text-gray-700 line-clamp-4">{featured.preview}</p>
          </div>
        </div>

        {/* Other Posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="bg-white shadow rounded overflow-hidden hover:shadow-md transition"
            >
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-base font-semibold mb-1">{post.title}</h4>
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {post.preview}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* See All */}
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="text-sm text-blue-700 hover:underline font-medium"
          >
            ALL BLOG POSTS →
          </Link>
        </div>
      </section>
    </>
  );
}
