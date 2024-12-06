import React from 'react';
import { Hero } from '../components/Hero';
import { CostCalculator } from '../components/CostCalculator';
import { ConstructorPhilosophy } from '../components/ConstructorPhilosophy';
import { DesignWithLove } from '../components/DesignWithLove';
import { LatestNews } from '../components/LatestNews';

export const Home: React.FC = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <CostCalculator />
      <ConstructorPhilosophy />
      <DesignWithLove />
      <LatestNews />
    </div>
  );
}