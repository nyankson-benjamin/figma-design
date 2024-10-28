import { useTabStore } from "../../../../../store/tabStore";
import TextLabel from "../../../../TextLabel";
import BoxItemsWrapper from "../BoxItemsWrapper";
import ColorPicker from "../ColorPicker";
import BorderWidth from "./border-width/BorderWidth";

export default function BorderComponents() {
    const { changeObjectColor, activeObject } = useTabStore();

    const handleColor = (color:string)=>{
        changeObjectColor(
            activeObject.id,
            activeObject.tabId,
            activeObject.type,
            color,
            "border"
          );
    }
  return (
    <BoxItemsWrapper>
      <div>
        <TextLabel label="Border color"/>
        <ColorPicker handleColor={handleColor} initial={activeObject.borderColor} />
      </div>

      <div>
        <BorderWidth />
      </div>
    </BoxItemsWrapper>
  );
}
