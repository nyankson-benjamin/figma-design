import { RndItemProps } from "../../types/componentTypes";
import { rndStyle } from "../../styles/rndStyles";
import { useTabStore } from "../../store/tabStore";
import RnDWrapper from "./RnDWrapper";
// import { useState } from "react";
// import TextField from "../inputs/TextField";

export default function RnDRectangle({ item }: Readonly<RndItemProps>) {
  // const [text, setText] = useState("")
  
  const { activeObject } = useTabStore();
  return (
    <RnDWrapper item={{ item: item }}>
      <div
        style={{
          ...rndStyle(item.type, item.bgColor, item.id === activeObject.id), border:`${Number(item.objectBoarder.width )|| 1}px solid ${item.objectBoarder.color ||'black'}`, borderRadius:`${item.objectBoarder.radius}px`, boxShadow:`${item.shadowEffect.horizontal}px ${item.shadowEffect.vertical}px ${item.shadowEffect.blur}px ${item.shadowEffect.spread}px ${!item.shadowEffect.color ? 'black' : item.shadowEffect.color}`
        }} 
        className={`h-full  text-white dark:text-black `}
        tabIndex={0} // Allow div to capture keyboard events
      >
        {item.objectBoarder.width}
        {/* <TextField value={text} onChange={(e)=>setText(e.target.value)} bgColor={item.bgColor} height={item.size.height as number}/> */}
      </div>
    </RnDWrapper>
  );
}
