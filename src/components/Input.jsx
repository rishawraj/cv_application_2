import { useContext } from "react";
import { GlobalContext } from "../App";

const Input = ({ label, type, uref, req }) => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const handleChange = (e) => {
    setGlobalState({ ...globalState, [label]: e.target.value });
  };
  console.log(globalState);

  return (
    <>
      <label htmlFor={label}>{label}</label> <br />
      <input
        type={type}
        id={label}
        ref={uref}
        onChange={handleChange}
        required={req}
      />{" "}
      <br />
    </>
  );
};

export { Input };
