import React, { createContext, useState } from "react";
// import { Input } from "./components/Input";
import { Form } from "./components/Form";
import { Text } from "./components/Text";

export const GlobalContext = createContext();

const App = () => {
  const [globalState, setGlobalState] = useState({ Name: "rishaw" });
  console.log(globalState);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <h1>CV Application</h1>
      <Form />
      <Text />
    </GlobalContext.Provider>
  );
};

export default App;
