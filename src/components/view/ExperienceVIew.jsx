import { useContext } from "react";
import { GlobalContext } from "../../App";

const ExperienceView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  return (
    <div className="experience-container">
      {globalState.count2.map((count) => (
        <div className="experience-view" key={count}>
          <div>
            <p>
              {globalState[`From-exp-${count}`]}
              {" - "}
              {globalState[`To-exp-${count}`]}
            </p>
          </div>
          <div>
            <p>{globalState[`Position-${count}`]}</p>
            <p>
              {globalState[`Company-${count}`]}{" "}
              {globalState[`City-exp-${count}`]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ExperienceView };
