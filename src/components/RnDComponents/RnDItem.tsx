// import StarIcon from "../../assets/icons/StarIcon";
import { RndItemProps } from "../../types/componentTypes";

import RnDRectangle from "./RnDRectangle";
import RnDStar from "./RnDStar";
function RnDItem({ item }: Readonly<RndItemProps>) {
  // if (item.type === "rectangle") return <RnDRectangle item={item} />;
  if (item.type === "star") return <RnDStar item={item}/>;

  return  <RnDRectangle item={item} />;
}

export default RnDItem;
