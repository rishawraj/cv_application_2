import { useContext } from "react";
import { GlobalContext } from "../../App";

const PersonalInfoView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  return (
    <div className="personal-info">
      <div>
        <div>
          <h2>
            Name: {globalState.Name} {globalState.LastName}
          </h2>
          <p>Title: {globalState.Title}</p>
        </div>
        <div>
          <img src={globalState.Photo} alt="Profile Pic" width="200px" />
        </div>
      </div>

      <p> address:{globalState.addresss}</p>
      <p> Phone Number:{globalState.PhoneNumber}</p>
      <p> Email:{globalState.Email}</p>
      <p> Description:{globalState.Description}</p>
    </div>
  );
};

export { PersonalInfoView };
