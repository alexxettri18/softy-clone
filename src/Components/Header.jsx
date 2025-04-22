import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { SiGooglemaps, SiMessenger } from "react-icons/si";
import logo from '/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "Categories", "Products", "Dealer Locator", "About", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-pink-500 text-white py-2 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="h-13 w-auto px-2" />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 whitespace-nowrap text-2xl md:text-base">
          {navItems.map((item, index) => {
            const linkPath = item.toLowerCase().replace(/\s+/g, "-");
            const isHome = item === "Home";
            return (
              <Link
                key={index}
                to={`/${linkPath === "home" ? "" : linkPath}`}
                className="relative group font-medium"
              >
                <span className="hover:text-purple-200">{item}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
                    isHome ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Right: Social Icons (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end space-x-4 text-xl">
          <a href="https://www.facebook.com/softyhygiene.np" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
              <FaFacebookF className="text-blue-600 text-xl" />
            </div>
          </a>
          <a href="https://www.facebook.com/softyhygiene.np" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
            <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
              <SiMessenger className="text-[#006AFF] text-xl" />
            </div>
          </a>
          <a href="https://www.instagram.com/softy_hygiene/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
              <FaInstagram className="text-[#E1306C] text-xl" />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=%2B9779851073552&context=ARBWBVhZV2RY_YxdeetUKWZjFwrCFZ1dOOi0-rbnrJTgKcGBjPaEy25TpnbsJZI93S8Qg5H0n-7AJxZhS-h1Zf8lbaF6IijOyVydBC8tPUVl4JknHyJ8phWWYFx4C3DpwFnDDgJM7uc2Im99a_fHj8q4PQ&source=FB_Page&app=facebook&entry_point=page_cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
              <FaWhatsapp className="text-green-500 text-xl" />
            </div>
          </a>
          <a
            href="https://www.google.com/maps/place/Maitighar,+Kathmandu+44600/@27.6924726,85.3225654,17z"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps"
          >
            <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
              <SiGooglemaps className="text-[#EA4335] text-xl" />
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-purple-800 px-4 pb-4 space-y-2 text-sm">
          {navItems.map((item, index) => {
            const linkPath = item.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={index}
                to={`/${linkPath === "home" ? "" : linkPath}`}
                className="block py-1 border-b border-purple-600"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            );
          })}

          {/* Social Icons on Mobile */}
          <div className="flex justify-center space-x-4 pt-2 text-xl">
            <a href="https://www.facebook.com/softyhygiene.np" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
                <FaFacebookF className="text-blue-600 text-xl" />
              </div>
            </a>
            <a href="https://www.facebook.com/softyhygiene.np" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
              <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
                <SiMessenger className="text-[#006AFF] text-xl" />
              </div>
            </a>
            <a href="https://www.instagram.com/softy_hygiene/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
                <FaInstagram className="text-[#E1306C] text-xl" />
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=%2B9779851073552&context=ARBWBVhZV2RY_YxdeetUKWZjFwrCFZ1dOOi0-rbnrJTgKcGBjPaEy25TpnbsJZI93S8Qg5H0n-7AJxZhS-h1Zf8lbaF6IijOyVydBC8tPUVl4JknHyJ8phWWYFx4C3DpwFnDDgJM7uc2Im99a_fHj8q4PQ&source=FB_Page&app=facebook&entry_point=page_cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
                <FaWhatsapp className="text-green-500 text-xl" />
              </div>
            </a>
            <a
              href="https://www.google.com/maps/place/Maitighar,+Kathmandu+44600/@27.6924726,85.3225654,17z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
            >
              <div className="bg-[#E9C9BA] rounded-full p-1 hover:scale-110 transition-transform">
                <SiGooglemaps className="text-[#EA4335] text-xl" />
              </div>
            </a>
            
          </div>
        </div>
        
      )}
    </nav>
  );
};

export default Header;
