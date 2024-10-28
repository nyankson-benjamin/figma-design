import { ChangeEvent } from "react";
import { Id } from "../../../../../../types/tabStors";
import { stopPropagation } from "../../../../../../constants/propagstion";

type InputProps = {
  value: Id;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name:string,
};
export default function BorderInput({ value, type="number", handleChange, name

 }: InputProps) {
  return (
   <div>
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
    dark:focus:border[#d8dae5] h-10 flex justify-center items-center "

    >
    
      <input
        type={type}
        value={value}
        className="mx-2 bg-transparent border-0 w-full outline-none text-center "
        onChange={handleChange}
        name={name}
        id={name}
        onMouseDown={stopPropagation}
        onClick={stopPropagation}
        onKeyDown={stopPropagation}
      />
      <p className="pr-2">px</p>
    </div>
   </div>
  );
}
