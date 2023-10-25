import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(false);

  //  Event handler to toggle between dark and light modes
  const toggleMode = () => {
    console.log("Button clicked");
    setIsDarkMode(!isDarkMode);
  };

  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Add an event handler to the button */}
        <button onClick={toggleMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

