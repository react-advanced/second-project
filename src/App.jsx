import React, { useState } from "react";
import ToggleDarkMode from "./Components/ToggleDarkMode/ToggleDarkMode";
import Tabs from "./Shared/Tabs/Tabs";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <ToggleDarkMode isDark={isDark} setIsDark={setIsDark} />
      <div className={isDark ? "dark" : ""}>
        <div className="dark:bg-slate-800 bg-slate-300 py-8 min-h-screen">
          <div className="container ">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
