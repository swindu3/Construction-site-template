import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold">UNILUS</Link>
        <div className="text-sm">
          <div>UTC-5: Eastern Standard Time (EST)</div>
          <div>3500 Shinn Street - NYC</div>
        </div>
      </div>
      <nav className="flex space-x-6">
        <Link to="/work">Work</Link>
        <Link to="/artist">Artist(34)</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/download" className="flex items-center">
          Download App →
        </Link>
      </nav>
    </header>
  );
}