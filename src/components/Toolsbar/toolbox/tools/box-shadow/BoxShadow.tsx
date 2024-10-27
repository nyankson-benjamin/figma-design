import { ChangeEvent, useState } from "react";
import { useTabStore } from "../../../../../store/tabStore";
import TextLabel from "../../../../TextLabel";
import BorderInput from "../border/border-width/BorderInput";
import ColorPicker from "../ColorPicker";
import { IShadow } from "../../../../../types/tabStors";

export default function BoxShadow() {
  const { activeObject, updateObjectShadow } = useTabStore();

  const [shadow, setShadow] = useState<IShadow>({
    blur: activeObject.shadowEffect?.blur,
    color: activeObject.shadowEffect?.color,
    horizontal: activeObject.shadowEffect?.horizontal,
    vertical: activeObject.shadowEffect?.vertical,
    spread:activeObject.shadowEffect?.spread
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShadow((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    updateObjectShadow(activeObject.id, activeObject.type, shadow);
  };

  const getColor = (color: string) => {
    setShadow((prev) => ({
      ...prev,
      color: color,
    }));

    updateObjectShadow(activeObject.id, activeObject.type, shadow);
  };

  return (
    <div className="flex flex-col gap-3">
     

      <div>
        <TextLabel label="Horizontal" />
        <BorderInput
          value={shadow.horizontal}
          type="number"
          handleChange={handleInputChange}
          name="horizontal"
        />
      </div>

      <div>
        <TextLabel label="Vertical" />
        <BorderInput
          value={shadow.vertical}
          type="number"
          handleChange={handleInputChange}
          name="vertical"
        />
      </div>

      <div>
        <TextLabel label="Shadow color" />
        <ColorPicker
          handleColor={getColor}
          initial={activeObject.shadowEffect?.color}
        />
      </div>
      <div>
        <TextLabel label="Blur" />
        <BorderInput
          value={shadow.blur}
          type="number"
          handleChange={handleInputChange}
          name="blur"
        />
      </div>

      <div>
        <TextLabel label="Spread radius" />
        <BorderInput
          value={shadow.spread}
          type="number"
          handleChange={handleInputChange}
          name="spread"
        />
      </div>
    </div>
  );
}
