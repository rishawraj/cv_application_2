import { useContext } from "react";
import { GlobalContext } from "../../App";
import { EducationView } from "./EducationVIew";
import { ExperienceView } from "./ExperienceVIew";

const MainView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  return (
    <div className="main-view">
      <h3>Description</h3>
      <hr />
      <p>{globalState.Description}</p>
      <h3>Experience</h3>
      <ExperienceView />
      <hr />
      <h3>Education</h3>
      <EducationView />
    </div>
  );
};

export { MainView };
