export type Id = string | number;
export type ObjectType = "rectangle" | "oval" | "text" | "star";

export type ObjectPosition = {
  x: number;
  y: number;
};
export type ObjectSize = {
  width: Id;
  height: Id;
};
export type ObjectTypes = {
  id: Id;
  text: string;
  bgColor: string;
  borderColor: string;
  radius?: number;
  type: ObjectType;
  size: ObjectSize;
  position: ObjectPosition;
  tabId: Id;
};
export type Tab = {
  tabId: Id;
  name: string;
  objects: ObjectTypes[];
};

export type ITab = {
  name: string;
  id: Id;
};
export type StoreType = {
  activeTab: number;
  objects: ObjectTypes[];
  tabs: ITab[];
  setActiveTab: (tab: number) => void;
  addTab: () => void;
  removeTab: (id: Id) => void;
  renameTab: (tabId: Id, name: string) => void;
  addObject: (newObject: ObjectTypes) => void;
  removeObject: () => void;
  changeObjectColor: (
    id: Id,
    tabId: Id,
    type: ObjectType,
    newColor: string,
    changeType: "bg" | "border"
  ) => void;
  updateObjectPosition: (
    id: Id,
    typpe: ObjectType,
    postion: ObjectPosition
  ) => void;
  updateObjectSize: (id: Id, typpe: ObjectType, size: ObjectSize) => void;
  currentTabId: Id;
  setCurrentTabId: (tabId: Id) => void;
  activeObject: ObjectTypes;
  setActiveObject: (selectedObjec: ObjectTypes) => void;
  duplicateObject: (position:ObjectPosition) => void;
};
