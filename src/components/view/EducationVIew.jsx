import { useContext } from "react";
import { GlobalContext } from "../../App";

const EducationView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  return (
    <div className="education-container">
      {globalState.count1.map((count) => {
        return (
          <div className="education-view" key={count}>
            <div>
              <p>
                From {globalState[`From-${count}`]} To{" "}
                {globalState[`To-${count}`]}
              </p>
            </div>
            <div>
              <p>
                University: {globalState[`University-${count}`]} City:{" "}
                {globalState[`City-${count}`]}
              </p>
              <p>Degree: {globalState[`Degree-${count}`]}</p>
              <p>Subject: {globalState[`Subject-${count}`]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { EducationView };
