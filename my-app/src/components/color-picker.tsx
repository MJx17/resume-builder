"use client"

import { useState } from 'react';

const ColorPicker = ({ onChange }: { onChange: (color: string) => void }) => {
  const [color, setColor] = useState("#ffffff");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    onChange(selectedColor);  // Pass the selected color back to the parent
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="color"
        value={color}
        onChange={handleChange}
        className="w-10 h-10 border-none cursor-pointer"
      />
      <span>{color}</span>
    </div>
  );
};

export default ColorPicker;
