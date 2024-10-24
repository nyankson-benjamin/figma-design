import HomeIcon from "../../assets/icons/HomeIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import { useTabStore } from "../../store/tabStore";
import IconButton from "../buttons/IconButton";
import Tab from "../tabs/Tab";

export default function MenuBar() {
  const { addTab, tabs, setActiveTab } = useTabStore();

  const handleAddTab = () => {
    const newTabId = tabs.length + 1;
    addTab();
    setActiveTab(newTabId - 1);
  };

  return (
    <div className="bg-mainBg flex items-center gap-3 w-full">
      <HomeIcon />
      {tabs.length>0 && <Tab />}
      <IconButton onClick={handleAddTab}>
        <PlusIcon />
      </IconButton>
    </div>
  );
}
