import { RndItemProps } from "../../types/componentTypes";
import { rndStyle } from "../../styles/rndStyles";
import { useTabStore } from "../../store/tabStore";
import StarIcon from "../../assets/icons/StarIcon";
import RnDWrapper from "./RnDWrapper";

export default function RnDStart({ item }: Readonly<RndItemProps>) {
  

  const { activeObject } = useTabStore();
  return (
    <div>
      <RnDWrapper item={{item}}
      >

        <StarIcon
          style={{
            ...rndStyle(item.type, item.bgColor, item.id === activeObject.id),
            width: `${item.size.width}px`,
            height: `${item.size.height}`,
          }}
          fill={item.bgColor}
        />
      </RnDWrapper>
    </div>
  );
}
