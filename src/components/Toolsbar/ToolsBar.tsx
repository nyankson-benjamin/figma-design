import Button from "../buttons/Button";
import ObjectsContainer from "./ObjectsContainer";
import useToolBar from "../../hooks/useToolBar";
export default function ToolsBar() {
  const {openObjects, toggleObjects} = useToolBar()
 
  return (
    <div className="absolute  bottom-10 left-1/2 transform -translate-x-1/2 z-[100]">
      
     { openObjects && <ObjectsContainer/>}
      <div className="flex gap-3  bg-white shadow-md p-5 rounded-2xl">
        <Button
          onClick={() => toggleObjects()}
          text="Objects"
        >
        </Button>
    </div>
    </div>
  );
}
