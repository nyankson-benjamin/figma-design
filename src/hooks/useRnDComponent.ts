import { useTabStore } from "../store/tabStore";
import { v4 as uuidv4 } from "uuid";
import { ObjectType, ObjectTypes } from "../types/tabStors";

export default function useRnDComponent() {
 const random = Math.floor(Math.random() * 10000);
 const {tabs, addObject,currentTabId} = useTabStore()

  const addObjectToScreen = (objectType: ObjectType) => {
    const objectToAdd: ObjectTypes = {
      id: uuidv4(),
      text: `Item ${tabs.length + 1}`,
      bgColor: "",
      borderColor: "black",
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
      tabId: currentTabId,
      // borderWidth: {
      //   top: 0,
      //   bottom: 0,
      //   left: 0,
      //   right: 0,
      //   border: 4
      // },
      border: 0,
      shadowEffect: {
        horizontal: 0,
        vertical: 0,
        blur: 0,
        color: "",
        spread: 0
      }
    };

    addObject(objectToAdd);
  };

  return {
    addObjectToScreen,
  };
}
