import { NameView } from "./view/NameView";
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
