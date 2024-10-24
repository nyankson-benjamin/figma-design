import { ChangeEvent } from "react";
import { isColorLight } from "../../utils/util";

export default function TextField({
  value,
  onChange,
  bgColor,
  height
}: {
  value: string;
  height:number
  onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void;
  bgColor:string
}) {
  const stopPropagation = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
  };
  return (
    <div >
      <textarea
        className="h-10 w-full bg-transparent outline-none p-2 resize-none m-5"
        onMouseDown={stopPropagation}
        onClick={stopPropagation}
        onKeyDown={stopPropagation}
        value={value}
        onChange={onChange}
        autoFocus
        style={{color:!bgColor ? "black" :isColorLight(bgColor) ? "black" :"white", height:`${height}px`}}
      />
    </div>
  );
}
