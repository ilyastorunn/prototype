import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const blogPosts = [
  {
    slug: "new-caliper-repair-kits-catalog",
    title: "New Caliper Repair Kits Catalog",
    date: "24 Jun 2023",
    preview: "Check out our Caliper Repair Kit Catalogue.",
    cover: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 2,
  },
  {
    slug: "caliper-repair-kit",
    title: "Caliper Repair Kit",
    date: "02 Jun 2023",
    cover: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 2,
    content: `Our company, which produces caliper repair kits, provides a reliable service with its product groups and satisfies its customers. Although essential parts come to mind when it comes to spare parts, the caliper kit is also of vital importance for vehicles...

Brake Caliper Malfunction
Caliper repair kit malfunctions are also curious. Heat-related faults usually occur. However, caliper failures can also be seen in vehicles in extra cases...
You can contact our company to get more detailed information about our preferred spare part products for caliper repair kit failures.`
  },
  {
    slug: "clutch-system",
    title: "Clutch System",
    date: "02 Jun 2023",
    cover: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 2,
    content: `The clutch system is among the indispensable issues for manual vehicles. This system, which supports you to have a comfortable driving opportunity especially in traffic...

Clutch System Parts
Clutch; It consists of flywheel, clutch pressure, clutch lining and bearings...`
  },
  {
    slug: "about-arskar-spare-parts",
    title: "About Arskar Spare Parts Product Groups",
    date: "02 Jun 2023",
    cover: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 2,
    content: `As Arskar spare parts company, we take a leading position in the automotive sector and offer the leading service concept to our customers...

We support our stakeholders with our spare parts production for transmission systems, flywheel housing & oil cooler, air brake equipment...`
  },
  {
    slug: "arskar-new-factory",
    title: "Arskar Air Brake Clutch Systems Moved To Its New Factory!",
    date: "02 Jul 2021",
    cover: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: 9,
    content: `As a provider of Arskar Air Brake Clutch Systems, we have added a new factory...

There is 14.000 m2 closed area in our new factory area...`
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between md:w-2/3">
                <div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-lg font-bold text-gray-800 mb-1">{post.title}</h2>
                  </Link>
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <p className="text-sm text-gray-700">
                    {post.preview || post.content?.substring(0, 150) + "..."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}