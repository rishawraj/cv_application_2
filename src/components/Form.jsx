import { Education } from "./input/Education";
import { Experience } from "./input/Experience";
import { PersonalInfo } from "./input/PersonalInfo";
import { GlobalContext } from "../App";
import { useContext, useRef } from "react";

const Form = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };

  return (
    <div className="form-container no-print">
      <form onSubmit={handleSubmit} ref={formRef}>
        <h2>Pesonal Info</h2>
        <PersonalInfo />
        <h2>Education</h2>
        {globalState.count1.map((count) => {
          return <Education key={count} count={count} />;
        })}
        <button
          onClick={(e) => {
            console.log(e.target);
            console.log(globalState.count1);
            setGlobalState({
              ...globalState,
              count1: [...globalState.count1, globalState.count1.length + 1],
            });
          }}
        >
          add
        </button>
        <button
          onClick={(e) => {
            setGlobalState({
              ...globalState,
              count1: globalState.count1.filter(
                (v) => v !== globalState.count1.length
              ),
            });
          }}
        >
          delete
        </button>

        <h2 className="mt-1">Experience</h2>
        {globalState.count2.map((count) => {
          return <Experience key={count} count={count} />;
        })}
        <button
          onClick={(e) => {
            setGlobalState({
              ...globalState,
              count2: [...globalState.count2, globalState.count2.length + 1],
            });
          }}
        >
          add
        </button>
        <button
          onClick={(e) => {
            console.log(globalState);
            setGlobalState({
              ...globalState,
              count2: globalState.count2.filter(
                (v) => v !== globalState.count2.length
              ),
            });
          }}
        >
          delete
        </button>

        <hr />
        <button id="blue-btn" onClick={(e) => window.print()}>
          print
        </button>

        <button id="red-btn" type="submit">
          reset
        </button>
      </form>
    </div>
  );
};

export { Form };
