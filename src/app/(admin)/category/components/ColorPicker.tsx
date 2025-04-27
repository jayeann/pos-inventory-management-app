import React from "react";
import { RadioGroup, Radio } from "@heroui/react";
import { colorMap } from "@/utils/colorMap";

interface ColorPickerProps {
  name: string;
  value?: string;
  onChange: (...event: any[]) => void;
  onBlur: (e: React.FocusEvent<Element>) => void;
}

const ColorPicker = ({
  name,
  value = "default",
  onChange,
  onBlur,
}: ColorPickerProps) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      onBlur={onBlur}
      name={name}
      orientation="horizontal"
      label="Pick a color"
    >
      <div className="flex flex-wrap gap-4">
        {Object.entries(colorMap).map(([colorName, hex]) => (
          <Radio
            key={colorName}
            value={colorName}
            className="relative w-10 h-10 m-2 rounded cursor-pointer ring-2 transition"
            style={{
              backgroundColor: hex,
              border: `2px solid ${value === colorName ? "#1E40AF" : "#ddd"}`, // Blue border when selected
              transform: value === colorName ? "scale(1.2)" : "scale(1)", // Make selected button bigger
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                value === colorName ? "scale(1.2)" : "scale(1)")
            }
          >
            {/* If you want an indicator or check icon, you can use RadioGroup.Indicator */}
            {/* <RadioGroup.Indicator className="absolute inset-0 flex items-center justify-center">
              {value === colorName && <CheckIcon size={18} color="#fff" />}
            </RadioGroup.Indicator> */}
          </Radio>
        ))}
      </div>
    </RadioGroup>
  );
};

export default ColorPicker;
