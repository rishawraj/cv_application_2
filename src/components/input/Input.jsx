import { useContext } from "react";
import { GlobalContext } from "../../App";

const Input = ({ label, type, uref, req, placeholder, count }) => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  if (type === "file") {
    const handleImage = (e) => {
      setGlobalState({
        ...globalState,
        [label]: URL.createObjectURL(e.target.files[0]),
      });
    };
    // console.log(globalState);
    return (
      <>
        <label htmlFor={label} className="custom-file-upload">
          {label}
        </label>{" "}
        <br />
        <input type="file" id={label} onChange={handleImage} /> <br />
      </>
    );
  }

  const handleChange = (e) => {
    setGlobalState({ ...globalState, [label]: e.target.value });
  };
  // console.log(globalState);

  return (
    <>
      {/* <label htmlFor={label}>{label}</label> <br /> */}
      <input
        type={type}
        id={label}
        ref={uref}
        onChange={handleChange}
        required={req}
        placeholder={placeholder}
      />{" "}
      <br />
    </>
  );
};

export { Input };
