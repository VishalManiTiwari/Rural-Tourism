import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-yellow-300">Rural</span> Escape
            </h3>
            <p className="text-gray-300 mb-4">
              Discovering the hidden gems of countryside living since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <FaTripadvisor size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Experiences</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Plan Your Trip</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdLocationOn className="mt-1 mr-2 text-yellow-300" />
                <span className="text-gray-300">123 Country Lane, Ruralville, RV 12345</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2 text-yellow-300" />
                <span className="text-gray-300">+1 (800) 555-1234</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2 text-yellow-300" />
                <span className="text-gray-300">info@ruralescape.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe for travel tips and special offers
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Rural Escape. All rights reserved. | 
            <a href="#" className="hover:text-yellow-300 ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-300 ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;