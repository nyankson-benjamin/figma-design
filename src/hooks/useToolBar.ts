import { useState } from "react";

export default function useToolBar() {
  const [openObjects, setOpenObjects] = useState(false);

  const toggleObjects = () => {
    setOpenObjects((prev) => !prev);
  };

  return {
    openObjects,
    setOpenObjects,
    toggleObjects,
  };
}
