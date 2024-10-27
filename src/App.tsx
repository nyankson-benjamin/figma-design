import "./App.css";
import RnDComponent from "./components/RnDComponent";
import ToolsBox from "./components/Toolsbar/toolbox/ToolsBox";
import Button from "./components/buttons/Button";
import ColorPalette from "./components/colors/ColorPalette";
import useTheme from "./hooks/useTheme";
import Layout from "./layout/Layout";
import { useTabStore } from "./store/tabStore";
export default function App() {
  const { toggleTheme } = useTheme();
  const { tabs, activeObject } = useTabStore();

  return (
    <div className="">
      <Layout>
        {/* <Button text="Toggle theme" onClick={() => toggleTheme()} /> */}
        <div className="flex justify-between">
          <RnDComponent />
          {activeObject.id && (
            <div className="absolute top-50 left-0 p-4">
              <ToolsBox />
            </div>
          )}
          {tabs.length > 0 && (
            <div className="absolute top-10 right-0 p-4">
              <ColorPalette />
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}
