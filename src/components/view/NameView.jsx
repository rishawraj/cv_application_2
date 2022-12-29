import { useContext } from "react";
import { GlobalContext } from "../../App";

const NameView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  return (
    <div className="name-view">
      <h2>
        {globalState.Name} {globalState.LastName}
      </h2>
      <p>{globalState.Title}</p>
    </div>
  );
};

export { NameView };
