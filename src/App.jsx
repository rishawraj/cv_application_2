import React, { createContext, useState } from "react";
import { Form } from "./components/Form";
import { View } from "./components/View";
import "./App.css";

export const GlobalContext = createContext();

const App = () => {
  const [globalState, setGlobalState] = useState({
    Name: "rishaw",
    count1: [1],
    count2: [1],
  });

  // console.log(globalState.count1);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <h1>CV Application</h1>
      <div className="Container">
        <Form />
        <View />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
