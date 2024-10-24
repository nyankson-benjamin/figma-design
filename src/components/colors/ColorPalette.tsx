import React, { useState } from "react";
import { colors } from "../../constants/colors";
import { useTabStore } from "../../store/tabStore";
import Button from "../buttons/Button";
// Function to generate color shades
const generateShades = (hexColor: string, numberOfShades: number): string[] => {
  const shades: string[] = [];
  const lightenOrDarken = (col: string, amt: number): string => {
    let usePound = false;
    if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
    }

    const num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    let g = ((num >> 8) & 0x00ff) + amt;
    let b = (num & 0x0000ff) + amt;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return (
      (usePound ? "#" : "") +
      ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
  };

  for (let i = 0; i < numberOfShades; i++) {
    shades.push(lightenOrDarken(hexColor, i * 20 - 40)); // Create lighter and darker shades
  }

  return shades;
};

const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();
};

const ColorPalette: React.FC = () => {
  const [activeColor, setActiveColor] = useState("")
  const { changeObjectColor, activeObject } = useTabStore();
  const setColor = (color: string) => {
    if (!activeObject.id) return;
    changeObjectColor(
      activeObject.id,
      activeObject.tabId,
      activeObject.type,
      color,
      "bg"
    );
    setActiveColor(color)
  };
  return (
    <div onMouseDown={handleMouseDown}>
      <div className="">
        <Button text="Remove Color" onClick={() => setColor("")} />
      </div>
      <div className="flex flex-wrap justify-center  w-32 h-[80vh] overflow-y-auto cursor-pointer">
        {colors.map((baseColor, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="flex flex-wrap w-full">
              {generateShades(baseColor, 12).map((shade, shadeIndex) => (
                <div key={shadeIndex} className="flex flex-col items-center">
                  {/* Color Swatch */}
                  <div
                    className={`w-5 h-5 border-gray-300 hover:border-2 ${activeColor===shade ? "border-2 border-white" : ""}`}
                    style={{ backgroundColor: shade }}
                    title={shade}
                    onClick={() => setColor(shade)}
                  >{activeColor === shade}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
