import { EducationView } from "./view/EducationVIew";
import { ExperienceView } from "./view/ExperienceVIew";
import { NameView } from "./view/NameView";
import { PersonalInfoView } from "./view/PersonalInfoVIew";
import { MainView } from "./view/MainView";
import { SideView } from "./view/SideView";

const View = () => {
  return (
    <div className="view-container" id="section-to-print">
      <NameView />
      <MainView />
      <SideView />
    </div>
  );
};

export { View };
