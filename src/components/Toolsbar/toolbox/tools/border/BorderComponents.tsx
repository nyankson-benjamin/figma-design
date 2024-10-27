import { useTabStore } from "../../../../../store/tabStore";
import TextLabel from "../../../../TextLabel";
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
    <div className="flex flex-col gap-3">
      <div>
        <TextLabel label="Border color"/>
        <ColorPicker handleColor={handleColor} initial={activeObject.borderColor} />
      </div>

      <div>
        <BorderWidth />
      </div>
    </div>
  );
}
