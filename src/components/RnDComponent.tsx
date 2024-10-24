import React from "react";
import { useTabStore } from "../store/tabStore";
import RnDItem from "./RnDComponents/RnDItem";

const RnDComponent = React.memo(() => {
  const { objects, currentTabId } = useTabStore();

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    console.log("Mouse down event triggered", e);
    // If you need to stop propagation
    // e.stopPropagation();
  };

  // Filter the items belonging to the active tab
  const items = objects.filter((obj) => obj.tabId === currentTabId);

  return (
    <div key={currentTabId} onMouseDown={handleMouseDown} className="relative">
      {items?.map((obj) => (
        <RnDItem key={obj.id} item={obj} />
      ))}
    </div>
  );
});

export default RnDComponent;
