import Star from "../../assets/icons/toolbar/Star";
import { RnDItems } from "../../constants/RnDItems";
import useRnDComponent from "../../hooks/useRnDComponent";
import { ObjectType } from "../../types/tabStors";
import Button from "../buttons/Button";

export default function ObjectsContainer() {
  const { addObjectToScreen } = useRnDComponent();

  const returnIcon = (text: ObjectType) => {
    switch (text) {
      case "star":
        return <Star />;

      case "rectangle":
        return <div className="h-5 w-5 border-2 border-black rounded-sm"></div>;

      case "oval":
        return (
          <div className="h-5 w-5 border-2 border-black rounded-full"></div>
        );

      default:
        return <div className="">T</div>;
    }
  };
  return (
    <div className="flex bg-gray-200 items-center w-1/2 flex-wrap mb-3">
      {RnDItems.map((item) => (
        <div key={item} title={item}>
          <Button onClick={() => addObjectToScreen(item)} text={""}>
            {returnIcon(item)}
          </Button>
        </div>
      ))}
    </div>
  );
}
