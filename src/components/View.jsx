import { EducationView } from "./view/EducationVIew";
import { ExperienceView } from "./view/ExperienceVIew";
import { PersonalInfoView } from "./view/PersonalInfoVIew";

const View = () => {
  return (
    <>
      <PersonalInfoView />
      <EducationView />
      <ExperienceView />
    </>
  );
};

export { View };
