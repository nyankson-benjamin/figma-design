import { ChangeEvent } from "react";
import { isColorLight } from "../../utils/util";
import { ObjectType } from "../../types/tabStors";
import { stopPropagation } from "../../constants/propagstion";


export default function TextField({
  value,
  onChange,
  bgColor,
  height,
  type
}: {
  value?: string;
  height:number
  onChange?: (e:ChangeEvent<HTMLTextAreaElement>) => void;
  bgColor:string,
  type:ObjectType
}) {
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
        style={{color: type ==="text" ? bgColor : !bgColor ? "black" :isColorLight(bgColor) ? "black" :"white", height:`${height}px`}}
        placeholder="Enter text"
      />
    </div>
  );
}
