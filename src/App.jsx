import React, { createContext, useState } from "react";
import { Form } from "./components/Form";
import { View } from "./components/View";
import profilePic from "./styles/profile.jpg";
import "./App.css";

export const GlobalContext = createContext();
export const state = {
  Name: "Rishaw",
  LastName: "Raj Bharti",
  Title: "Web Developer",
  Photo: profilePic,
  Address: "Gazebo House, Link Road, Juhu, Mumbai",
  PhoneNumber: "8793052545",
  Email: "rishawraj@gmail.com",
  Description:
    "I am a web developer with experience in creating and maintaining modern, responsive websites and web applications. I have a strong foundation in HTML, CSS, and JavaScript, and am skilled in using various frameworks and libraries such as React, Angular, and Vue.js. I am highly collaborative and enjoy working on cross-functional teams to bring projects from conception to launch. I am always looking to learn and grow as a developer, and am excited to tackle new challenges and technologies.",
  "From-1": "12 Dec 2020",
  "To-1": "12 Dec 2021",
  "University-1": "JP University",
  "City-1": "Mumbai",
  "Degree-1": "Degree",
  "Subject-1": "Subject",
  count1: [1],
  count2: [1],
  "From-exp-1": "12 Jan 2022",
  "To-exp-1": "Present",
  "Position-1": "Position",
  "Company-1": "Company",
  "City-exp-1": "City",
};

const App = () => {
  const [globalState, setGlobalState] = useState(state);

  // console.log(globalState.count1);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {/* <h1 className="nav-bar">CV Application</h1> */}
      <div className="nav-bar no-print">
        <h1>CV Application</h1>
      </div>
      <div className="container">
        <Form />
        <View />
      </div>{" "}
    </GlobalContext.Provider>
  );
};
export default App;
