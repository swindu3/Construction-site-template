import React from 'react';

export const DesignWithLove: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div className="max-w-xl">
            <h2 className="text-6xl font-bold mb-8">DESIGN<br />WITH LOVE</h2>
            <p className="text-gray-600">
              Using innovative construction techniques, measurements and scaling system, material and component libraries, and more.
            </p>
            <button className="mt-8 text-black underline">SEE OUR WORK</button>
          </div>
          <div className="relative">
            <img src="/images/building.jpg" alt="Building construction" className="w-[600px] h-[400px] object-cover" />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-2xl">▶</span>
            </button>
            <span className="absolute bottom-4 right-4 text-white">Project 2023©</span>
          </div>
        </div>
      </div>
    </section>
  );
}