import { useEffect } from "react";
import { useTabStore } from "../../store/tabStore";
import TabButton from "./TabButton";

export default function Tab() {
  const { tabs, currentTabId, setCurrentTabId } = useTabStore();

  useEffect(() => {
    if (!currentTabId && tabs?.length) {
      setCurrentTabId(tabs[0]?.id);
    }
  }, [currentTabId, setCurrentTabId, tabs]);

  return (
    <div className=" border-gray-300 overflow-x-auto">
      <ul className="flex ">
        {tabs?.map((tab, idx) => (
          <li key={tab.id} className="">
            <TabButton
              tab={tab}
              tabIndex={idx}
              isActive={tab.id === currentTabId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
