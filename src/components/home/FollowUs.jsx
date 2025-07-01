import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function FollowUs() {
  const icons = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  return (
    <>
      <hr className="border-t border-gray-200 my-12" />
      <section className="py-12 bg-[#f5f5f5] text-center">
        <h2 className="text-sm font-semibold tracking-wider mb-6">FOLLOW US</h2>
        <div className="flex justify-center gap-4">
          {icons.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="w-10 h-10 rounded-md bg-[#e7e7e7] flex items-center justify-center text-[#5d5d5d] hover:bg-[#d0d0d0] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
