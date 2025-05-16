// components/ColorPicker.jsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import clsx from "clsx"; // if not using clsx, use plain string templates

 export const COLORS = [
  { id: "red", color: "bg-red-500" },
  { id: "blue", color: "bg-blue-500" },
  { id: "green", color: "bg-green-500" },
  { id: "black", color: "bg-black" },
  { id: "gray", color: "bg-gray-500" },
  { id: "navy", color: "bg-blue-900" }, // A darker shade of blue for a formal look
  { id: "darkGray", color: "bg-gray-800" }, // Darker gray for professionalism
 

];


export interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}


export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="flex flex-col gap-4 bg-gray-300 p-2"
    >
      {COLORS.map((item) => (
        <RadioGroupItem
          key={item.id}
          value={item.id}
          id={item.id}
          className={clsx(
            "w-6 h-6 rounded-full border-2 border-blue-300 focus:outline-none",
            item.color,
            value === item.id && "ring-2 ring-offset-2 ring-white"
          )}
        />
      ))}
    </RadioGroup>
  );
}
