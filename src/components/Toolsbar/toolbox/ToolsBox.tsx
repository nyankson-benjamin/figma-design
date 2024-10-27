import Accordion from "../../Accordion";
import BorderComponents from "./tools/border/BorderComponents";
import BoxShadow from "./tools/box-shadow/BoxShadow";
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
      <Accordion title="Border">
        <BorderComponents />
      </Accordion>

      <Accordion title="Shadow">
        <BoxShadow />
      </Accordion>
    </div>
  );
}
