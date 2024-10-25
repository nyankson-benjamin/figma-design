import { ObjectType } from "../types/tabStors";

const isActiveStyle = (isActive: boolean, bgColor:string): React.CSSProperties => {
  return isActive || !bgColor
    ? {
        border: "1px solid black",
      }
    : {};
};

// const sharedStyles = (bgColor: string): React.CSSProperties => {
//   return {
//     background: bgColor,
//     border: !bgColor ? "1px solid black" : "",
//   };
// };
export const rndStyle = (
  type: ObjectType,
  bgColor: string,
  isActive: boolean
): React.CSSProperties => {
  switch (type) {
    case "oval":
      return {
        background: bgColor,
        borderRadius: "100%",
        ...isActiveStyle(isActive,bgColor),
      };
    case "rectangle":
      return {
        background: bgColor,
        borderRadius: "0%",
        ...isActiveStyle(isActive,bgColor),
      };
      case "star":
        return{
          // ...isActiveStyle(isActive)
        }
        case "text":
          return{
            color:'blue',
          }

    default:
      return { ...isActiveStyle(isActive,bgColor) };
  }
};
