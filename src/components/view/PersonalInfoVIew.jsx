import { useContext } from "react";
import { GlobalContext } from "../../App";

const PersonalInfoView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  return (
    <div className="personal-info">
      <p>Name: {globalState.Name}</p>
      <p>Last Name: {globalState.LastName}</p>
      <p>Title: {globalState.Title}</p>
      <p> photo:{globalState.Photo}</p>
      <p> address:{globalState.addresss}</p>
      <p> Phone Number:{globalState.PhoneNumber}</p>
      <p> Email:{globalState.Email}</p>
      <p> Description:{globalState.Description}</p>
    </div>
  );
};

export { PersonalInfoView };
