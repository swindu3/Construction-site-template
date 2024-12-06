import React from 'react';
import { SelectField } from '../ui/SelectField';
import { NumberField } from '../ui/NumberField';
import { TextField } from '../ui/TextField';
import { Button } from '../ui/Button';
import { useCostCalculator } from './useCostCalculator';

export const CostCalculatorForm: React.FC = () => {
  const {
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
  } = useCostCalculator();

  return (
    <div className="bg-black text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">CALCULATE COST FOR A PROJECT</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <SelectField
            value={buildingType}
            onChange={(e) => updateField('buildingType', e.target.value)}
            options={['Residence', 'Commercial']}
          />
          <SelectField
            value={terrace}
            onChange={(e) => updateField('terrace', e.target.value)}
            options={['Yes, With Kanopi', 'No']}
          />
          <SelectField
            value={garage}
            onChange={(e) => updateField('garage', e.target.value)}
            options={['Yes, Car & Motorcycle', 'No']}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <NumberField
            value={totalFloor}
            onChange={(e) => updateField('totalFloor', Number(e.target.value))}
            label="Total Floor"
          />
          <NumberField
            value={totalBedroom}
            onChange={(e) => updateField('totalBedroom', Number(e.target.value))}
            label="Total Bedroom"
          />
          <NumberField
            value={totalBathroom}
            onChange={(e) => updateField('totalBathroom', Number(e.target.value))}
            label="Total Bathroom"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <TextField
            value={projectName}
            onChange={(e) => updateField('projectName', e.target.value)}
            placeholder="Project Name"
          />
          <TextField
            value={userNumber}
            onChange={(e) => updateField('userNumber', e.target.value)}
            placeholder="+1-XXX-XXXX-XXXX"
          />
          <TextField
            value={costEstimation}
            readOnly
            className="bg-black border border-white p-2"
          />
        </div>
        <Button type="submit">SUBMIT</Button>
      </form>
      <div className="mt-6">
        <p>Want to tell your story about your project?</p>
        <Button variant="link">LET'S TALK</Button>
      </div>
    </div>
  );
};