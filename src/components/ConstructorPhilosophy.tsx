import React from 'react';

export const ConstructorPhilosophy: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">ABOUT UNILUS</h2>
          <p className="text-3xl leading-relaxed">
            WE WORK CLOSELY WITH OUR CLIENTS TO UNDERSTAND THEIR UNIQUE{' '}
            <span className="text-gray-400">NEEDS AND REQUIREMENTS, AND WE STRIVE TO PROVIDE PERSONALIZED SOLUTIONS THAT MEET THEIR SPECIFIC</span>{' '}
            GOALS.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-16">
          <img src="/images/work-1.jpg" alt="Construction work" className="w-full h-64 object-cover" />
          <img src="/images/work-2.jpg" alt="Construction work" className="w-full h-64 object-cover" />
          <img src="/images/work-3.jpg" alt="Construction work" className="w-full h-64 object-cover" />
        </div>
        <button className="mt-8 text-black underline">MORE ABOUT US</button>
      </div>
    </section>
  );
}