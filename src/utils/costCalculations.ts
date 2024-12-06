interface ProjectParams {
  buildingType: string;
  terrace: string;
  garage: string;
  totalFloor: number;
  totalBedroom: number;
  totalBathroom: number;
}

export const calculateProjectCost = (params: ProjectParams): string => {
  const baseRate = params.buildingType === 'Commercial' ? 200000 : 100000;
  const terraceRate = params.terrace === 'Yes, With Kanopi' ? 15000 : 0;
  const garageRate = params.garage === 'Yes, Car & Motorcycle' ? 25000 : 0;
  const floorRate = params.totalFloor * 50000;
  const roomRate = (params.totalBedroom + params.totalBathroom) * 10000;

  const totalCost = baseRate + terraceRate + garageRate + floorRate + roomRate;
  return `$${totalCost.toLocaleString()} USD`;
};