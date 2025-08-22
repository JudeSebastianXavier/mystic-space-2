import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[90px]">
        <div className="flex items-center justify-between h-16 lg:h-20 py-4 lg:py-[21px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7a949cfc2206401bed4a947a472c895c143a2e54?width=120" 
              alt="Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] aspect-square"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-[60px]">
            <Link 
              to="/work" 
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 font-inter text-lg lg:text-[20px] font-normal"
            >
              Work
            </Link>
            <Link 
              to="/play" 
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 font-inter text-lg lg:text-[20px] font-normal"
            >
              Play
            </Link>
            <Link 
              to="/about" 
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 font-inter text-lg lg:text-[20px] font-normal"
            >
              About
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/work" 
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200 font-inter text-lg font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link 
                to="/play" 
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200 font-inter text-lg font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                Play
              </Link>
              <Link 
                to="/about" 
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200 font-inter text-lg font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
