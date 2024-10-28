import "./App.css";
import RnDComponent from "./components/RnDComponent";
import ToolsBox from "./components/Toolsbar/toolbox/ToolsBox";
import ColorPalette from "./components/colors/ColorPalette";
import Layout from "./layout/Layout";
import { useTabStore } from "./store/tabStore";
export default function App() {
  const { tabs, activeObject } = useTabStore();

  return (
    <div className="">
      <Layout>
        <div className="flex justify-between">
          <RnDComponent />
          {activeObject.id && (
            <div className="absolute top-50 right-100 p-4">
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
