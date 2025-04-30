import React from "react";
import { RadioGroup, Radio } from "@heroui/react";
import categorizedIcons from "./IconCategories";
interface IconPickerProps {
  name: string;
  value?: string;
  onChange: (...event: any[]) => void;
  onBlur: (e: React.FocusEvent<Element>) => void;
}

const IconPicker = ({
  name,
  value = "Package", // Default icon is Package
  onChange,
  onBlur,
}: IconPickerProps) => {
  return (
    <>
      <RadioGroup
        id="iconpicker-radio"
        value={value}
        onValueChange={onChange}
        onBlur={onBlur}
        name={name}
        orientation="horizontal"
        label="Pick an icon"
      >
        <div className="h-80 flex flex-col p-4 border border-gray-300 rounded-md bg-gray-50">
          <div className="flex-1 overflow-y-auto pr-2">
            {Object.entries(categorizedIcons).map(([category, icons]) => (
              <div key={category} className="mb-4">
                <h5 className="mb-2 text-xs capitalize text-gray-700">
                  {category}
                </h5>
                <div className="grid grid-cols-5 gap-4">
                  {icons.map((icon) => (
                    <Radio
                      key={icon.name}
                      value={icon.name}
                      className={`icon-radio-btn m-0 flex flex-col items-center justify-center w-16 h-16 aspect-square border-2 rounded-lg cursor-pointer transition-transform ${
                        value === icon.name
                          ? "border-blue-600 scale-110"
                          : "border-gray-300"
                      } bg-white`}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        {icon.component}
                      </div>
                    </Radio>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RadioGroup>
    </>
  );
};

export default IconPicker;
