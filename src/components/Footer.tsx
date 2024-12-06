import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-4xl font-bold mb-16">UNILUS</div>
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/artist">Artist(34)</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Category</h3>
            <ul className="space-y-2">
              <li>Residence</li>
              <li>Hotels</li>
              <li>Apartment</li>
              <li>Store</li>
              <li>Restaurant</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Other</h3>
            <ul className="space-y-2">
              <li>Work With Us</li>
              <li>Advertising</li>
              <li>Discount</li>
              <li>Become Partner</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Get in touch</h3>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <div>Designed by Odama with ❤️</div>
          <div>2023©</div>
        </div>
      </div>
    </footer>
  );
}