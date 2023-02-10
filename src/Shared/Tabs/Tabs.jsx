import Tab from "../Tab/Tab";
import { TABS } from "./../../Lists/Tabs";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTAb] = useState(TABS[0].name);
  const [tmepIdx, setTempIdx] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center">
        {TABS.map((tab, idx) => (
          <Tab key={tab.id} onClick={() => setTempIdx(idx)}>
            {tab.title}
          </Tab>
        ))}
      </div>
      <div className="pt-4">{TABS[tmepIdx].tabPanel}</div>
    </>
  );
};

export default Tabs;
