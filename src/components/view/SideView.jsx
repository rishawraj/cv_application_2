import { useContext } from "react";
import { GlobalContext } from "../../App";

const SideView = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  return (
    <div className="side-view">
      <div className="profile-pic">
        <img src={globalState.Photo} alt="Profile Pic" />
      </div>
      <div className="personal-details">
        <h3>Personal Details</h3>
        <p className="b">Address</p>
        <p>{globalState.Address}</p>
        <p className="b">Phone Number</p>
        <p>{globalState.PhoneNumber}</p>
        <p className="b">Email</p>
        <p>{globalState.Email}</p>
      </div>
    </div>
  );
};

export { SideView };
