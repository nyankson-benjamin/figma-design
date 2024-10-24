import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ObjectTypes, StoreType } from "../types/tabStors";
import { v4 as uuidv4 } from "uuid";

const updateColor = (
  obj: ObjectTypes,
  newColor: string,
  changeType: "bg" | "border"
): ObjectTypes => {
  return changeType === "bg"
    ? { ...obj, bgColor: newColor }
    : { ...obj, borderColor: newColor };
};
export const initialObject: ObjectTypes = {
  id: "",
  text: "",
  bgColor: "",
  borderColor: "",
  type: "rectangle",
  size: {
    width: "",
    height: "",
  },
  position: {
    x: 0,
    y: 0,
  },
  tabId: "",
};

export const useTabStore = create<StoreType>()(
  persist(
    (set) => ({
      activeTab: 0,
      objects: [],
      tabs: [],
      currentTabId: "",
      activeObject: initialObject,
      setActiveTab: (tab) => {
        set(() => ({
          activeTab: tab,
        }));
      },
      addTab() {
        set((state) => ({
          tabs: [
            ...state.tabs,
            { name: `Tab ${state.tabs.length + 1}`, id: uuidv4() },
          ],
        }));
      },
      removeTab(id) {
        set((state) => {
          const filteredTabs = state.tabs.filter((tab) => tab.id !== id);
          const filteredObjects = state.objects.filter(
            (obj) => obj.tabId !== id
          );
          return {
            tabs: filteredTabs,
            objects: filteredObjects,
            activeTab:
              state.activeTab >= filteredTabs.length ? 0 : state.activeTab,
            activeObject:
              id === state.activeObject.tabId
                ? initialObject
                : state.activeObject,
          };
        });
      },
      renameTab(tabId, name) {
        set((state) => ({
          tabs: state.tabs.map((tab) =>
            tab.id === tabId ? { ...tab, name } : tab
          ),
        }));
      },
      addObject(newObject) {
        set((state) => ({
          objects: [...state.objects, newObject],
          activeObject: newObject,
        }));
      },
      removeObject() {
        set((state) => ({
          objects: state.objects.filter(
            (obj) =>
              !(
                obj.id === state.activeObject.id &&
                obj.tabId === state.activeObject.tabId
              )
          ),
        }));
      },
      changeObjectColor: (id, tabId, type, newColor, changeType) => {
        set((state) => ({
          objects: state.objects.map((obj) =>
            obj.id === id && obj.tabId === tabId && obj.type === type
              ? updateColor(obj, newColor, changeType)
              : obj
          ),
        }));
      },
      updateObjectPosition: (id, type, position) => {
        set((state) => ({
          objects: state.objects.map((obj) =>
            obj.id === id &&
            obj.tabId === state.currentTabId &&
            obj.type === type
              ? { ...obj, position }
              : obj
          ),
        }));
      },
      updateObjectSize: (id, type, size) => {
        set((state) => ({
          objects: state.objects.map((obj) =>
            obj.id === id &&
            obj.tabId === state.currentTabId &&
            obj.type === type
              ? { ...obj, size }
              : obj
          ),
        }));
      },
      setCurrentTabId: (tabId) => {
        set(() => ({
          currentTabId: tabId,
        }));
      },
      setActiveObject: (selectedObjec) => {
        set(() => ({
          activeObject: selectedObjec,
        }));
      },
      duplicateObject: (position) => {
        set((state) => {
          // Ensure there is an active object with a valid ID to duplicate
          const objectToDuplicate = state.activeObject;
          if (!objectToDuplicate.id) {
            return {}; // Return an empty object to avoid returning undefined
          }

          // Create a new object with a unique ID but otherwise identical properties
          const newObject = {
            ...objectToDuplicate, // Copy all properties
            id: uuidv4(), // Generate a new unique ID
            position,
          };

          return {
            objects: [...state.objects, newObject], // Add the duplicated object to the list
            activeObject: newObject,
          };
        });
      },
    }),
    {
      name: "tabStore", // Name of the store in localStorage
      storage: createJSONStorage(() => localStorage), // Persist using localStorage
    }
  )
);
