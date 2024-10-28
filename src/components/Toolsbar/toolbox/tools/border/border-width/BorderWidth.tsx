import { ChangeEvent, useEffect, useState } from "react";
import BorderInput from "./BorderInput";
import { useTabStore } from "../../../../../../store/tabStore";
import TextLabel from "../../../../../TextLabel";
import ColorPicker from "../../ColorPicker";
import { IBorder } from "../../../../../../types/tabStors";
import BoxItemsWrapper from "../../BoxItemsWrapper";

export default function BorderWidth() {
  const { activeObject, updateBoarder } = useTabStore();
  const [border, setBorder] = useState<IBorder>({
    color: activeObject.objectBoarder?.color,
    radius: activeObject.objectBoarder?.radius,
    width: activeObject.objectBoarder?.width,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBorder((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  
  const getColor = (color: string) => {
    setBorder((prev) => ({
      ...prev,
      color: color,
    }));
  };
  useEffect(()=>{
    updateBoarder(activeObject.id, border);
  },[activeObject.id, border, updateBoarder])
  return (
    <BoxItemsWrapper>
      <div>
        <TextLabel label="Border color" />
        <ColorPicker
          handleColor={getColor}
          initial={activeObject.borderColor}
        />
      </div>
      <div>
        <TextLabel label="Border width" />
        <BorderInput
          value={border.width}
          type="number"
          handleChange={handleInputChange}
          name="width"
        />
      </div>

      <div>
        <TextLabel label="Border radius" />
        <BorderInput
          value={border.radius}
          type="number"
          handleChange={handleInputChange}
          name="radius"
        />
      </div>
    </BoxItemsWrapper>
  );
}
