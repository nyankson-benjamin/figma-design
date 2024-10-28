import Accordion from "../../Accordion";
import BorderWidth from "./tools/border/border-width/BorderWidth";
import BoxShadow from "./tools/box-shadow/BoxShadow";
// import ObjectSize from "./tools/size/ObjectSize";
export default function ToolsBox() {
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("tool box")
  };
  return (
    <div
      onMouseDown={handleMouseDown}
      className="p-5 min-w-72 rounded-md shadow-md h-[80vh] overflow-y-auto cursor-pointer  bg-white flex flex-col gap-5"
    >
      {/* <Accordion title="Size">
        <ObjectSize />
      </Accordion> */}
      <Accordion title="Border">
        <BorderWidth />
      </Accordion>

      <Accordion title="Shadow">
        <BoxShadow />
      </Accordion>
    </div>
  );
}
