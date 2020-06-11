import React from "react";
import "./App.css";
import ApplePage from "./pages/apples";
import ApplePageHooks from "./pages/apples_hooks";
import Caculate from "./pages/caculate";
function App() {
  return (
    <div className="App">
      <div className="row">
        <ApplePageHooks></ApplePageHooks>
        <ApplePage></ApplePage>
      </div>
      <Caculate />
    </div>
  );
}

export default App;
