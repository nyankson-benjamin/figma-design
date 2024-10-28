import React, { useState } from "react";
import ToggleUpDownArrow from "../assets/icons/ToggleUpDownArrow";

export default function Accordion({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="border p-2 shadow-sm rounded-lg flex flex-col gap-1">
      <div className="flex items-center justify-between w-full" onClick={toggle}>
        <p className="font-bold text-lg">{title}</p>
        <ToggleUpDownArrow  open={open} />
      </div>
      {open && <div>{children}</div>}
    </div>
  );
}
