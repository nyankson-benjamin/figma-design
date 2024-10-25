import { RndItemProps } from "../../types/componentTypes";
import RnDWrapper from "./RnDWrapper";
import RnDTextField from "../inputs/RnDTextField";
export default function TextRnD({ item }: Readonly<RndItemProps>) {
  return (
    <RnDWrapper item={{ item: item }}>
      <div className="mr-10">
        <RnDTextField bgColor={item.bgColor} />
      </div>
    </RnDWrapper>
  );
}
