import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile elements when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen || searchOpen) {
        const header = document.querySelector("header");
        if (header && !header.contains(event.target)) {
          setMobileMenuOpen(false);
          setSearchOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen, searchOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed text-white top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900 shadow-lg py-2"
          : " bg-gray-900 shadow-md py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main header row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo/Branding */}
          <div className="flex-shrink-0 z-50">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl sm:text-3xl font-bold font-serif">
                <span className="text-yellow-300">Rural</span> Escape
              </h1>
              <span className="sr-only">Home</span>
            </Link>
            <p className="text-xs text-green-200 hidden sm:block">
              Discover Countryside Wonders
            </p>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 mx-2 xl:mx-6">
            <Link
              to="/destinations"
              className="hover:text-yellow-300 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-gray-700"
            >
              Destinations
            </Link>
            <Link
              to="/experiences"
              className="hover:text-yellow-300 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-gray-700"
            >
              Experiences
            </Link>
            <Link
              to="/plan-trip"
              className="hover:text-yellow-300 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-gray-700"
            >
              Plan Your Trip
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search - different behavior per screen size */}
            <div className="relative">
              {/* Desktop Search - always visible */}
              <div className="hidden lg:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="py-2 px-4 pr-10 rounded-full text-white text-sm w-40 xl:w-56 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              {/* Tablet/Mobile Search Toggle */}
              <button
                onClick={toggleSearch}
                className="lg:hidden p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label={searchOpen ? "Close search" : "Open search"}
              >
                {searchOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaSearch className="text-xl" />
                )}
              </button>
            </div>

            {/* Sign In Button */}
            <div className="hidden sm:block">
              <Link to='/login'>
                <button className="flex items-center space-x-1.5 bg-yellow-500 hover:bg-yellow-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium transition-colors duration-200">
                  <FaUser className="text-sm" />
                  <span>Sign In</span>
                </button>
              </Link>
            </div>

            {/* Mobile Sign In - icon only */}
            <button className="sm:hidden p-2 rounded-full hover:bg-gray-700 transition-colors">
              <FaUser className="text-xl" />
              <span className="sr-only">Sign In</span>
            </button>

            {/* Mobile Menu Toggle - hidden on desktop */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-full hover:bg-gray-700 transition-colors ml-1"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search - full width when open */}
        {searchOpen && (
          <div className="lg:hidden mt-2 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                className="py-3 px-4 pr-10 rounded-full text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
                autoFocus
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        )}

        {/* Mobile Menu - slides down when open */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-2 bg-gray-700 rounded-lg overflow-hidden animate-slideDown">
            <ul className="divide-y divide-gray-600">
              <li>
                <Link
                  to="/destinations"
                  className="block hover:text-yellow-300 transition-colors duration-200 py-3 px-4 hover:bg-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/experiences"
                  className="block hover:text-yellow-300 transition-colors duration-200 py-3 px-4 hover:bg-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="/plan-trip"
                  className="block hover:text-yellow-300 transition-colors duration-200 py-3 px-4 hover:bg-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block hover:text-yellow-300 transition-colors duration-200 py-3 px-4 hover:bg-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
