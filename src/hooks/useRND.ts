import {  useEffect, useState } from "react";
import { RndItemProps } from "../types/componentTypes";
import { Rnd, RndResizeCallback } from "react-rnd";
import { useTabStore } from "../store/tabStore";

export default function useRND({ item }: Readonly<RndItemProps>) {
  const [rnd, setRnd] = useState({
    width: `${item.size.width}px`,
    height: `${item.size.height}px`,
    x: item.position.x,
    y: item.position.y,
  });

  const {
    updateObjectPosition,
    updateObjectSize,
     activeObject,
    setActiveObject,
  } = useTabStore();
  // Handle dragging
  const handleDragStop: Rnd["props"]["onDragStop"] = (_e, data) => {
    setRnd((prev) => ({
      ...prev,
      x: data.x,
      y: data.y,
    }));
  };

  function removePx(value: string): number {
    if (value.endsWith("px")) {
      return parseInt(value.slice(0, -2), 10); // Remove "px" and convert to number
    }
    return NaN; // Return NaN if the value does not end with "px"
  }

  const onResizeStop: RndResizeCallback = (_e, _dir, ref, _delta, position) => {
    setRnd((prev) => ({
      ...prev,
      width: `${ref.style.width}`, // Update width from the ref
      height: `${ref.style.height}`, // Update height from the ref
      x: position.x, // Update position
      y: position.y, // Update position
    }));
  };

  // Update position and size whenever rnd changes
  useEffect(() => {
    updateObjectPosition(item.id, item.type, { x: rnd.x, y: rnd.y });
  }, [item.id, item.type, rnd.x, rnd.y, updateObjectPosition]);

  useEffect(() => {
    updateObjectSize(item.id, item.type, {
      width: removePx(rnd.width),
      height: removePx(rnd.height),
    });
  }, [rnd.width, rnd.height, updateObjectSize, item.id, item.type]);



  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveObject(item);
  };

  

  return {
    handleDragStop,
    rnd,
    onResizeStop,
    handleMouseDown,
    activeObject
  };
}
