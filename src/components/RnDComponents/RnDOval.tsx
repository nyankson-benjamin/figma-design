import { Rnd } from "react-rnd";
import { RndItemProps } from "../../types/componentTypes";
import useRND from "../../hooks/useRND";

export default function RndRectangle({ item }: Readonly<RndItemProps>) {
  const { handleDragStop, rnd, onResizeStop,handleMouseDown } = useRND({ item });

  return (
    <div>
      <Rnd
        style={{ backgroundColor: item.bgColor, borderRadius: "100%",     transform: `translate(${rnd.x}px, ${rnd.y}px)`,
 }}
        size={{ width: rnd.width, height: rnd.height }}
        position={{ x: rnd.x, y: rnd.y }}
        onDragStop={handleDragStop}
        onResizeStop={onResizeStop}
        onMouseDown={handleMouseDown} 

      >
        <div
          className="h-full shadow-lg bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center"
          tabIndex={0} // Allow div to capture keyboard events
        >
          <p> {item.text}</p>{" "}
        </div>
      </Rnd>
    </div>
  );
}
