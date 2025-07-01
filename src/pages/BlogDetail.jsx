import { useParams } from "react-router-dom";
import blogPosts from "../data/blogPost";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold">Post not found</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          {post.date} • {post.views} views
        </p>
        <div className="text-gray-800 leading-relaxed whitespace-pre-line">
          {post.content || post.preview}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
