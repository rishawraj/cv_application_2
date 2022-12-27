import React, { useContext } from "react";
import { GlobalContext } from "../App";

const Text = () => {
  const { globalState } = useContext(GlobalContext);
  console.log(globalState);
  return (
    <>
      <h3>Text</h3>
      <p>{globalState.Name}</p>
      <p>{globalState.Age}</p>
      <p>{globalState.Date}</p>
    </>
  );
};

export { Text };
