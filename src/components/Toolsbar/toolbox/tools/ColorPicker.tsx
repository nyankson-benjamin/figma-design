import { ChangeEvent, useState } from "react";

type IColorProps={
    handleColor:(color:string)=>void,
    initial:string
}
export default function ColorPicker({handleColor, initial}:IColorProps) {
  const [color, setColor] = useState(initial);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    
    handleColor(e.target.value)
  };
  return (
    <div
      className="color-container  bg-gray-50
    border 
    border-[#d8dae5]
    hover:border-[#8F95B2]
    text-gray-900
    rounded-lg
    focus:outline-[#E47A53] focus:ring-[#F2BEAB] focus:ring
    dark:bg-gray-700
    dark:border-gray-600
    dark:placeholder-gray-400
    dark:text-white
    dark:focus:ring-[#F2BEAB]
    dark:focus:border[#d8dae5] h-10 flex justify-center items-center"
    >
      <input
        type="color"
        value={color}
        id="color"
        className="mx-2 bg-transparent border-0 w-full"
        onChange={handleChange}
        name="color"
      />
    </div>
  );
}
