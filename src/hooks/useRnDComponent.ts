import { useTabStore } from "../store/tabStore";
import { v4 as uuidv4 } from "uuid";
import { ObjectType, ObjectTypes } from "../types/tabStors";

export default function useRnDComponent() {
 const random = Math.floor(Math.random() * 10000);
 const {tabs, addObject,currentTabId} = useTabStore()

  const addObjectToScreen = (objectType: ObjectType) => {
    const objectToAdd: ObjectTypes = {
      id: uuidv4(),
      text: `Item ${tabs.length+1}`,
      bgColor: "",
      borderColor: "string",
      radius: objectType === "oval" ? 100 : 0,
      type: objectType,
      size: {
        width: 200,
        height: 200,
      },
      position: {
        x: random / 100 + 100,
        y: random / 100 + 100,
      },
      tabId:currentTabId
    };

    addObject(objectToAdd);
  };

  return {
    addObjectToScreen,
  };
}
