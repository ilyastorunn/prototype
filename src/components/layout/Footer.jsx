import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B10] text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white font-bold text-lg mb-3">ARSKAR</h2>
          <p className="text-sm">Aşağıpınarbaşı 5. Osb Mahallesi, 516. Sokak No : 16 - Selçuklu / Konya / TÜRKİYE</p>
          <p className="text-sm mt-2">+90 332 345 09 23</p>
          <p className="text-sm">+90 332 345 09 25</p>
          <p className="text-sm">export@arskar.com.tr</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/corporate" className="hover:underline">Corporate</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/order-inquiry" className="hover:underline">Order Inquiry</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Newsletter</h3>
          <input type="text" placeholder="Firstname" className="mb-2 px-3 py-1 w-full text-sm rounded" />
          <input type="text" placeholder="Lastname" className="mb-2 px-3 py-1 w-full text-sm rounded" />
          <input type="email" placeholder="E-mail" className="mb-2 px-3 py-1 w-full text-sm rounded" />
          <button className="w-full bg-[#CD0000] text-white py-1 text-sm rounded">Subscribe</button>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; 2025 - ARSKAR. All rights reserved.
      </div>
    </footer>
  );
}