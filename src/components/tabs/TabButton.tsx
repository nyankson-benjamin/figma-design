import { useState } from "react";
import { useTabStore } from "../../store/tabStore";
import { ITab } from "../../types/tabStors";

export default function TabButton(props: {
  tab: ITab;
  tabIndex: number;
  isActive: boolean;
}) {
  const [toggleClose, setToggleClose] = useState(false);
  const { removeTab, setActiveTab, setCurrentTabId } = useTabStore();
  return (
    <div
      className={
        " py-2 px-3 flex items-center gap-2 cursor-pointer h-full" +
        (props.isActive ? " border-r  " : " border-none  ")
      }
      onMouseOver={() => setToggleClose(true)}
      onMouseLeave={() => setToggleClose(false)}
    >
      <button
        onClick={() => {
          setCurrentTabId(props.tab.id)
          setActiveTab(props.tabIndex);
        }}
        className="whitespace-nowrap"
      >
        {props.tab.name}
      </button>
      <button
        className={
          (toggleClose ? " visible " : "invisible") +
          "  h-full flex items-center justify-center px-2 rounded-md"
        }
        onClick={() => {
          removeTab(props.tab.id);
          setActiveTab(props.tabIndex - 1);
        }}
      >
        <p>x</p>
      </button>
    </div>
  );
}
