import { useContext } from "react";
import { GlobalContext } from "../../App";

const EducationView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  return (
    <div className="education-container">
      {globalState.count1.map((count) => {
        return (
          <div className="education-view" key={count}>
            <p>University: {globalState[`University-${count}`]}</p>
            <p>City: {globalState[`City-${count}`]}</p>
            <p>Degree: {globalState[`Degree-${count}`]}</p>
            <p>Subject: {globalState[`Subject-${count}`]}</p>
            <p>From: {globalState[`From-${count}`]}</p>
            <p>To: {globalState[`To-${count}`]}</p>
          </div>
        );
      })}
    </div>
  );
};

export { EducationView };
