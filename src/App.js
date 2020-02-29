import React from "react";
import "./App.css";
import ApplePage from "./pages/apples";
import ApplePageHooks from "./pages/apples_hooks";
function App() {
  return (
    <div className="App">
      <ApplePageHooks></ApplePageHooks>
      <ApplePage></ApplePage>
    </div>
  );
}

export default App;
