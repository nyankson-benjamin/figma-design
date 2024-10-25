import ObjectsContainer from "./ObjectsContainer";
export default function ToolsBar() {
  return (
    <div className="absolute  bottom-10 left-1/2 transform -translate-x-1/2 z-[100] shadow-md hover:scale-105">
      <ObjectsContainer />
    </div>
  );
}
