import { RndItemProps } from "../../types/componentTypes";
import RnDWrapper from "./RnDWrapper";

export default function TextRnD({ item }: Readonly<RndItemProps>) {
    return (
      <RnDWrapper item={{item:item}}>
          <input type="text" className="text-[red] h-full w-full" autoFocus/>
      </RnDWrapper>
    )
  }
  