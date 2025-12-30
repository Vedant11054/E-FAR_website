
import { Link } from "react-router-dom";
import teamLogo from "../assets/black_logo.png";
import collegeLogo from "../assets/SVPCET_logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-[#F76C13]">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left: Team Logo */}
        <div className="flex-shrink-0">
          <img
            src={teamLogo}
            alt="Team Logo"
            className="h-14 md:h-16 w-auto object-contain"
            style={{ maxWidth: "150px" }}
          />
        </div>

        {/* Center: Navigation links in white container */}
        <div className="flex justify-center flex-1">
          <div className="bg-white rounded-2xl shadow-lg px-6 py-3 flex items-center gap-6 md:gap-8">
            <Link 
              to="/" 
              className="px-3 py-2 font-semibold text-gray-800 hover:text-[#F76C13] transition-all duration-300"
            >
              Home
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link 
              to="/about" 
              className="px-3 py-2 font-semibold text-gray-800 hover:text-[#F76C13] transition-all duration-300"
            >
              About
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link 
              to="/team" 
              className="px-3 py-2 font-semibold text-gray-800 hover:text-[#F76C13] transition-all duration-300"
            >
              Team
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link 
              to="/achievements" 
              className="px-3 py-2 font-semibold text-gray-800 hover:text-[#F76C13] transition-all duration-300"
            >
              Achievements
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link 
              to="/cars" 
              className="px-3 py-2 font-semibold text-gray-800 hover:text-[#F76C13] transition-all duration-300"
            >
              Cars
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link 
              to="/sponsors" 
              className="px-3 py-2 font-semibold text-gray-800 hover:text-[#F76C13] transition-all duration-300"
            >
              Sponsors
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link 
              to="/contact" 
              className="px-3 py-2 font-semibold text-gray-800 hover:text-[#F76C13] transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: College Logo */}
        <div className="flex-shrink-0">
          <img
            src={collegeLogo}
            alt="College Logo"
            className="h-14 md:h-16 w-auto object-contain"
            style={{ maxWidth: "150px" }}
          />
        </div>
      </div>
    </nav>
  );
}
