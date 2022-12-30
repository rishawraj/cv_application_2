import { useContext } from "react";
import { GlobalContext } from "../../App";
import profilePic from "../../styles/profile.jpg";

const Input = ({ label, type, uref, req, placeholder }) => {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  if (type === "textarea") {
    const handleChange = (e) => {
      setGlobalState({ ...globalState, [label]: e.target.value });
    };

    return (
      <>
        <textarea
          type={type}
          id={label}
          ref={uref}
          onChange={handleChange}
          required={req}
          placeholder={placeholder}
          rows="4"
          cols="50"
          defaultValue=""
        ></textarea>
      </>
    );
  }

  if (type === "file") {
    const handleImage = (e) => {
      setGlobalState({
        ...globalState,
        [label]: URL.createObjectURL(e.target.files[0]),
      });
    };
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

  return (
    <>
      <input
        type={type}
        id={label}
        ref={uref}
        onChange={handleChange}
        required={req}
        placeholder={placeholder}
        // value={e.target.value}
        defaultValue=""
      />{" "}
      <br />
    </>
  );
};

export { Input };
