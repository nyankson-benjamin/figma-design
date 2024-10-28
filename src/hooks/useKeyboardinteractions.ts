import { useCallback, useEffect } from "react";
import { useTabStore } from "../store/tabStore";

export default function useKeyBoardInteractions() {
  const {
    removeObject,
    duplicateObject,
    activeObject,
  } = useTabStore();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const position = {
        x: activeObject.position.x + 100,
        y: activeObject.position.y + 100,
      };
      e.preventDefault(); // Prevent default browser action for Ctrl + D
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (e.ctrlKey && e.key === "d") {
        duplicateObject(position);
      }
      if (e.key === "Delete") {
        removeObject();
      }
    },
    [
      activeObject.position.x,
      activeObject.position.y,
      duplicateObject,
      removeObject,
    ]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

return {activeObject}
}
