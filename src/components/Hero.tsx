import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-7xl font-bold mb-8">CONSTRUCTOR<br />PHILOSOPHY.</h1>
        <p className="text-xl max-w-2xl">
          Imagine yourself in a luxury country house inspired by three latest design creatures. It's
          right the mood we wanted to evoke with our new concept of a construction company's corporate
          website.
        </p>
        <button className="mt-8 border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
          DISCUSS NEW PROJECT
        </button>
      </div>
    </div>
  );
}