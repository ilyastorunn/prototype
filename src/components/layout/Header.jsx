import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#CD0000]">
          ARSKAR
        </Link>
        <nav className="space-x-6 hidden md:block">
          <div className="relative inline-block group">
            <div className="text-sm text-gray-800 hover:text-red-700 cursor-pointer">
              Corporate
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50"
                 onMouseEnter={(e) => e.currentTarget.classList.add('opacity-100', 'visible')}
                 onMouseLeave={(e) => e.currentTarget.classList.remove('opacity-100', 'visible')}>
              <Link to="/corporate#about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
              <Link to="/corporate#our-mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Mission</Link>
              <Link to="/corporate#our-vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Vision</Link>
              <Link to="/corporate#our-quality-policy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Quality Policy</Link>
              <Link to="/corporate#fair-calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fair Calendar</Link>
              <Link to="/corporate#arskar-tv" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Arskar TV</Link>
              <Link to="/corporate#certificates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Certificates</Link>
            </div>
          </div>
          <Link to="/products" className="text-sm text-gray-800 hover:text-red-700">Products</Link>
          <Link to="/blog" className="text-sm text-gray-800 hover:text-red-700">Blog</Link>
          <Link to="/order-inquiry" className="text-sm text-gray-800 hover:text-red-700">Order Inquiry</Link>
          <Link to="/contact" className="text-sm text-gray-800 hover:text-red-700">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="ARSKAR, OEM, etc."
            className="border px-3 py-1 rounded text-sm w-48"
          />
          <button className="bg-[#001F4D] text-white px-4 py-1 rounded text-sm">Search</button>
        </div>
      </div>
    </header>
  );
}