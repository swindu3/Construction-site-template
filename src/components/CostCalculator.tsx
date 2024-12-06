import React, { useState } from 'react';

export const CostCalculator: React.FC = () => {
  const [buildingType, setBuildingType] = useState('Residence');
  const [terrace, setTerrace] = useState('Yes, With Kanopi');
  const [garage, setGarage] = useState('Yes, Car & Motorcycle');
  const [totalFloor, setTotalFloor] = useState(2);
  const [totalBedroom, setTotalBedroom] = useState(4);
  const [totalBathroom, setTotalBathroom] = useState(4);
  const [projectName, setProjectName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [costEstimation, setCostEstimation] = useState('$100,000 USD');

  return (
    <div className="bg-black text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">CALCULATE COST FOR A PROJECT</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)} className="bg-black border border-white p-2">
          <option>Residence</option>
          <option>Commercial</option>
        </select>
        <select value={terrace} onChange={(e) => setTerrace(e.target.value)} className="bg-black border border-white p-2">
          <option>Yes, With Kanopi</option>
          <option>No</option>
        </select>
        <select value={garage} onChange={(e) => setGarage(e.target.value)} className="bg-black border border-white p-2">
          <option>Yes, Car & Motorcycle</option>
          <option>No</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <input type="number" value={totalFloor} onChange={(e) => setTotalFloor(Number(e.target.value))} className="bg-black border border-white p-2" />
        <input type="number" value={totalBedroom} onChange={(e) => setTotalBedroom(Number(e.target.value))} className="bg-black border border-white p-2" />
        <input type="number" value={totalBathroom} onChange={(e) => setTotalBathroom(Number(e.target.value))} className="bg-black border border-white p-2" />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="bg-black border border-white p-2" />
        <input type="text" placeholder="+1-XXX-XXXX-XXXX" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} className="bg-black border border-white p-2" />
        <input type="text" value={costEstimation} readOnly className="bg-black border border-white p-2" />
      </div>
      <button className="bg-white text-black px-6 py-2 rounded">SUBMIT</button>
      <div className="mt-6">
        <p>Want to tell your story about your project?</p>
        <button className="underline">LET'S TALK</button>
      </div>
    </div>
  );
}