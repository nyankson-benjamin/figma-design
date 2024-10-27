import { Rnd } from "react-rnd";
import { RndItemProps } from "../../types/componentTypes";
import useRND from "../../hooks/useRND";
// import { useTabStore } from "../../store/tabStore";
// import { rndStyle } from "../../styles/rndStyles";
// import useKeyBoardInteractions from "../../hooks/useKeyboardinteractions";

interface RnDWrapperProps {
  item: RndItemProps;
  children: React.ReactNode; // Pass the content (like a star icon or rectangle)
}

export default function RnDWrapper({ item, children }: Readonly<RnDWrapperProps>) {
  const { handleDragStop, rnd, onResizeStop, handleMouseDown } = useRND( item );
  // const {activeObject} =  useKeyBoardInteractions()
//   const { activeObject } = useTabStore();
// const {item:rndItem} = item
  return (
    <Rnd
      style={{
        background:"transparent",

        // borderRadius:`${rndItem.radius}%` 
      }}
      size={{ width: rnd.width, height: rnd.height }}
      position={{ x: rnd.x, y: rnd.y }}
      onDragStop={handleDragStop}
      onResizeStop={onResizeStop}
      onMouseDown={handleMouseDown}
    >
      {children}
    </Rnd>
  );
}
