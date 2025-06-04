import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import clsx from "clsx";

export const COLORS = [
  { id: "red", color: "#ef4444" },       
  { id: "blue", color: "#3b82f6" },      
  { id: "green", color: "#22c55e" },     
  { id: "black", color: "#000000" },     
  { id: "gray", color: "#6b7280" },      
  { id: "navy", color: "#1e3a8a" },      
  { id: "darkGray", color: "#1f2937" },  
];

export interface ColorPickerProps {
  value?: string;
  onChange: (value: string) => void;
}

export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="flex flex-col gap-4  p-2"
    >
      {COLORS.map((item) => (
        <RadioGroupItem
          key={item.id}
          value={item.id}
          id={item.id}
          className={clsx(
            "w-6 h-6 rounded-full border-2 border-blue-300 focus:outline-none",
            value === item.id && "ring-2 ring-offset-2 ring-white"
          )}
          style={{ backgroundColor: item.color }}
        />
      ))}
    </RadioGroup>
  );
}
