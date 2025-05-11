import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-gradient-to-r from-indigo-900/90 to-purple-800/90 text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="mr-3"
            >
              <Calendar 
                size={28} 
                className={isScrolled ? "text-indigo-600" : "text-white"} 
              />
            </motion.div>
            <h1 className={`text-xl font-bold ${isScrolled ? "text-gray-800" : "text-white"}`}>
              Sydney Events
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className={`font-medium hover:text-indigo-300 transition-colors ${
                isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white"
              }`}
            >
              Home
            </a>
            <a 
              href="#" 
              className={`font-medium hover:text-indigo-300 transition-colors ${
                isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white"
              }`}
            >
              Browse Events
            </a>
            <a 
              href="#" 
              className={`font-medium hover:text-indigo-300 transition-colors ${
                isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white"
              }`}
            >
              Categories
            </a>
            <a 
              href="#" 
              className={`font-medium hover:text-indigo-300 transition-colors ${
                isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white"
              }`}
            >
              About
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-800 font-medium hover:text-indigo-600">
                Home
              </a>
              <a href="#" className="block text-gray-800 font-medium hover:text-indigo-600">
                Browse Events
              </a>
              <a href="#" className="block text-gray-800 font-medium hover:text-indigo-600">
                Categories
              </a>
              <a href="#" className="block text-gray-800 font-medium hover:text-indigo-600">
                About
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;