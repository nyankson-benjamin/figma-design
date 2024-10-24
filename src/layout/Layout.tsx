import React from "react";
import MenuBar from "../components/menubar/MenuBar";
import { initialObject, useTabStore } from "../store/tabStore";
import ToolsBar from "../components/Toolsbar/ToolsBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { setActiveObject, tabs } = useTabStore();
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setActiveObject(initialObject);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* MenuBar should always be at the top */}
      <header className="fixed top-0 left-0 w-full z-50">
        <MenuBar />
      </header>

      {/* Main content area */}
      <main className="flex-grow mt-16 p-4" onMouseDown={handleMouseDown}>
        {children}
        {tabs.length > 0 && (
          <div >
            <ToolsBar />
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
