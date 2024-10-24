import { RndItemProps } from "../../types/componentTypes";
import { rndStyle } from "../../styles/rndStyles";
import { useTabStore } from "../../store/tabStore";
import RnDWrapper from "./RnDWrapper";

export default function RnDRectangle({ item }: Readonly<RndItemProps>) {


  const { activeObject } = useTabStore();
  return (
    <RnDWrapper item={{item:item}}>
      <div
        style={{
          ...rndStyle(item.type, item.bgColor, item.id === activeObject.id),
        }}
        className={`h-full shadow-lg  text-white dark:text-black `}
        tabIndex={0} // Allow div to capture keyboard events
      >

      </div>
    </RnDWrapper>
  );
}
