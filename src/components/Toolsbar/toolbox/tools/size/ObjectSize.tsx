import { ChangeEvent, useEffect, useState } from "react";
import { useTabStore } from "../../../../../store/tabStore";
import TextLabel from "../../../../TextLabel";
import BorderInput from "../border/border-width/BorderInput";
import BoxItemsWrapper from "../BoxItemsWrapper";
import { ObjectSize as objSize } from "../../../../../types/tabStors";

export default function ObjectSize() {
  const { activeObject, updateObjectSize } = useTabStore();

  const [size, setSize] = useState<objSize>({
    height: activeObject.size.height,
    width: activeObject.size.width,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSize((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    // updateObjectSize(activeObject.id, activeObject.type, size);
  };

  useEffect(() => {
    updateObjectSize(activeObject.id, activeObject.type, size);
  }, [activeObject.id, activeObject.type, size, updateObjectSize]);
  return (
    <BoxItemsWrapper>
      <div>
        {size.height}
        {size.width}
        <TextLabel label="Width" />
        <BorderInput
          value={size.width}
          type="number"
          handleChange={handleInputChange}
          name="width"
        />
      </div>

      <div>
        <TextLabel label="Height" />
        <BorderInput
          value={size.height}
          type="number"
          handleChange={handleInputChange}
          name="height"
        />
      </div>
    </BoxItemsWrapper>
  );
}
