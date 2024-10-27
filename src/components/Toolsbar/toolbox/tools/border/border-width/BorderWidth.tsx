import { ChangeEvent, useState } from "react";
import BorderInput from "./BorderInput";
import { useTabStore } from "../../../../../../store/tabStore";
import TextLabel from "../../../../../TextLabel";

export default function BorderWidth() {
  const { activeObject, updateObjectBorder,updateObjectRadius } = useTabStore();
  const [border, setBorder] = useState(activeObject.border);
const [borderRadius, setBorderRadius] = useState(activeObject.radius)
  const updateBorder = (e: ChangeEvent<HTMLInputElement>) => {
    setBorder(Number(e.target.value));
    updateObjectBorder(
      activeObject.id,
      activeObject.type,
      Number(e.target.value)
    );
  };

  const updateBorderRadius = (e: ChangeEvent<HTMLInputElement>) => {
    setBorderRadius(Number(e.target.value));
    updateObjectRadius(
      activeObject.id,
      activeObject.type,
      Number(e.target.value)
    );
  };
  return (
    <div className="flex flex-col gap-3">
      <div>
        <TextLabel label="Border width" />
        <BorderInput
          value={border}
          type="number"
          handleChange={updateBorder}
          name="border"
        />
      </div>

      <div>
      <TextLabel label="Border radius" />
      <BorderInput
        value={borderRadius}
        type="number"
        handleChange={updateBorderRadius}
        name="border"
      />
      </div>
    </div>
  );
}
