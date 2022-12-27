import { useRef } from "react";
import { Input } from "./Input";

const Form = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const dateRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    nameRef.current.value = "";
    ageRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" uref={nameRef} req="required" />
        <Input label="Age" type="number" uref={ageRef} />
        <Input label="Date" type="date" uref={dateRef} />

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export { Form };
