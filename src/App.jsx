import React, { createContext, useState } from "react";
import { Form } from "./components/Form";
import { View } from "./components/View";
import profilePic from "./styles/profile.jpg";
import "./App.css";

export const GlobalContext = createContext();

const App = () => {
  const [globalState, setGlobalState] = useState({
    Name: "Name",
    LastName: "Last Name",
    Title: "Web Developer",
    count1: [1],
    count2: [1],
    Photo: profilePic,
    "From-exp-1": "from",
    "To-exp-1": "to",
    "Position-1": "Position",
    "Company-1": "Company",
    "City-exp-1": "City",
  });

  // console.log(globalState.count1);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <h1>CV Application</h1>
      <div className="container">
        <Form />
        <View />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
