import { useState } from 'react';
import { calculateProjectCost } from '../../utils/costCalculations';

export const useCostCalculator = () => {
  const [buildingType, setBuildingType] = useState('Residence');
  const [terrace, setTerrace] = useState('Yes, With Kanopi');
  const [garage, setGarage] = useState('Yes, Car & Motorcycle');
  const [totalFloor, setTotalFloor] = useState(2);
  const [totalBedroom, setTotalBedroom] = useState(4);
  const [totalBathroom, setTotalBathroom] = useState(4);
  const [projectName, setProjectName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [costEstimation, setCostEstimation] = useState('$100,000 USD');

  const updateField = (field: string, value: string | number) => {
    const setters: { [key: string]: (value: any) => void } = {
      buildingType: setBuildingType,
      terrace: setTerrace,
      garage: setGarage,
      totalFloor: setTotalFloor,
      totalBedroom: setTotalBedroom,
      totalBathroom: setTotalBathroom,
      projectName: setProjectName,
      userNumber: setUserNumber
    };

    setters[field]?.(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cost = calculateProjectCost({
      buildingType,
      terrace,
      garage,
      totalFloor,
      totalBedroom,
      totalBathroom
    });
    setCostEstimation(cost);
  };

  return {
    buildingType,
    terrace,
    garage,
    totalFloor,
    totalBedroom,
    totalBathroom,
    projectName,
    userNumber,
    costEstimation,
    handleSubmit,
    updateField
  };
};