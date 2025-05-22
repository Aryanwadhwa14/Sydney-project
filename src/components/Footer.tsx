import React from 'react';
import { Calendar, Mail, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Calendar size={24} className="mr-2 text-indigo-400" />
              <h2 className="text-xl font-bold">Sydney Events</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Discover the best events happening in Sydney, Australia. From concerts to workshops, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/aryan17198" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/aryan_wadhwa_05/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Music</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Arts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Food & Drink</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Adventure</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-indigo-400" />
                <a href="mailto:aryanwadhwa911@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  aryanwadhwa911@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Sydney Events. All rights reserved. Events are scraped from Eventbrite.
            </p>
            <p className="text-gray-400 text-sm">
              Developed by{' '}
              <a 
                href="https://github.com/Aryanwadhwa14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Aryan Wadhwa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;