import { FaUser, FaBars, FaTimes, FaSignOutAlt, FaLeaf } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      setMobileMenuOpen(false);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header
      className={`w-full fixed text-white top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-green-900 to-gray-900 shadow-lg py-2"
          : "bg-gradient-to-r from-green-800 to-gray-900 shadow-md py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main header row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo/Branding - more organic feel */}
          <div className="flex-shrink-0 z-50 flex items-center">
            <FaLeaf className="text-yellow-300 text-2xl mr-2" />
            <Link to="/" className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
                <span className="text-yellow-300">Rural</span> Escape
              </h1>
              <span className="text-xs text-green-200 font-light tracking-wider">
                Discover Countryside Wonders
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - curved links */}
          <nav className="hidden lg:flex items-center space-x-1 mx-6">
            <Link
              to="/destinations"
              className="hover:text-yellow-300 transition-all duration-200 font-medium py-2 px-4 rounded-full hover:bg-gray-700/50 group"
            >
              <span className="relative group-hover:after:scale-x-100 group-hover:after:opacity-100 after:absolute after:w-full after:h-0.5 after:bg-yellow-300 after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 after:opacity-0 after:transition-all after:duration-300">
                Destinations
              </span>
            </Link>
            <Link
              to="/experiences"
              className="hover:text-yellow-300 transition-all duration-200 font-medium py-2 px-4 rounded-full hover:bg-gray-700/50 group"
            >
              <span className="relative group-hover:after:scale-x-100 group-hover:after:opacity-100 after:absolute after:w-full after:h-0.5 after:bg-yellow-300 after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 after:opacity-0 after:transition-all after:duration-300">
                Experiences
              </span>
            </Link>
            <Link
              to="/plan-trip"
              className="hover:text-yellow-300 transition-all duration-200 font-medium py-2 px-4 rounded-full hover:bg-gray-700/50 group"
            >
              <span className="relative group-hover:after:scale-x-100 group-hover:after:opacity-100 after:absolute after:w-full after:h-0.5 after:bg-yellow-300 after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 after:opacity-0 after:transition-all after:duration-300">
                Plan Trip
              </span>
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Auth Button - changes based on login state */}
            <div className="hidden sm:block">
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-1.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <FaSignOutAlt className="text-sm" />
                  <span>Logout</span>
                </button>
              ) : (
                <Link to='/login'>
                  <button className="flex items-center space-x-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                    <FaUser className="text-sm" />
                    <span>Sign In</span>
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-full hover:bg-gray-700/50 transition-colors ml-1"
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

        {/* Mobile Menu - slides down when open */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 bg-gray-700/90 backdrop-blur-sm rounded-xl overflow-hidden animate-slideDown shadow-xl">
            <ul className="divide-y divide-gray-600/50">
              <li>
                <Link
                  to="/destinations"
                  className="block hover:text-yellow-300 transition-colors duration-200 py-4 px-6 hover:bg-gray-600/50 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="w-6 mr-3 flex justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/experiences"
                  className="block hover:text-yellow-300 transition-colors duration-200 py-4 px-6 hover:bg-gray-600/50 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="w-6 mr-3 flex justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </span>
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="/plan-trip"
                  className="block hover:text-yellow-300 transition-colors duration-200 py-4 px-6 hover:bg-gray-600/50 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="w-6 mr-3 flex justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block hover:text-yellow-300 transition-colors duration-200 py-4 px-6 hover:bg-gray-600/50 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="w-6 mr-3 flex justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Contact Us
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left hover:text-yellow-300 transition-colors duration-200 py-4 px-6 hover:bg-gray-600/50 flex items-center"
                  >
                    <span className="w-6 mr-3 flex justify-center">
                      <FaSignOutAlt className="text-sm" />
                    </span>
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="block hover:text-yellow-300 transition-colors duration-200 py-4 px-6 hover:bg-gray-600/50 flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="w-6 mr-3 flex justify-center">
                      <FaUser className="text-sm" />
                    </span>
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}