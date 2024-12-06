import React from 'react';

export const LatestNews: React.FC = () => {
  const news = [
    { title: 'NEW CULTURE OF CONSTRUCTION', date: 'JAN, 30 2023' },
    { title: 'HAPPY CONSTRUCT DAY!', date: 'APR, 12 2023' },
    { title: 'DISCOUNT TIME, COME COME!', date: 'MAR, 16 2023' },
    { title: 'BRAD PITT GOING WITH US?', date: 'MAR, 24 2023' }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">LATEST NEWS</h2>
        <div className="space-y-6">
          {news.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
              <h3 className="text-xl">{item.title}</h3>
              <div className="flex items-center space-x-8">
                <span className="text-gray-500">{item.date}</span>
                <button className="underline">READ</button>
              </div>
            </div>
          ))}
        </div>
        <img src="/images/boots.jpg" alt="Construction boots" className="w-full h-64 object-cover mt-12" />
      </div>
    </section>
  );
}