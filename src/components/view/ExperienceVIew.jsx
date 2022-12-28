import { useContext } from "react";
import { GlobalContext } from "../../App";

const ExperienceView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  return (
    <div className="experience-container">
      {globalState.count2.map((count) => {
        return (
          <div className="experience-view" key={count}>
            <p>Position: {globalState[`Position-${count}`]}</p>
            <p>Company: {globalState[`Company-${count}`]}</p>
            <p>City: {globalState[`City-exp-${count}`]}</p>
            <p>From: {globalState[`From-exp-${count}`]}</p>
            <p>To: {globalState[`To-exp-${count}`]}</p>
          </div>
        );
      })}
    </div>
  );
};

export { ExperienceView };
