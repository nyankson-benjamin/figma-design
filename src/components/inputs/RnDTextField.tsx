import { ChangeEvent } from "react";

export default function RnDTextField({
  value,
  onChange,
  bgColor,

}: {
  value?: string;
  onChange?: (e:ChangeEvent<HTMLTextAreaElement>) => void;
  bgColor:string,
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
        style={{color: bgColor}}
        placeholder="Enter text"
      />
    </div>
  );
}
