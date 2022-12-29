// import { useRef } from "react";
import { Education } from "./input/Education";
import { Experience } from "./input/Experience";
import { PersonalInfo } from "./input/PersonalInfo";
import { GlobalContext } from "../App";
import { useContext } from "react";

const Form = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Pesonal Info</h2>
        <PersonalInfo />
        <hr />
        <h2>Education</h2>
        {globalState.count1.map((count) => {
          // console.log(count);
          return <Education key={count} count={count} />;
        })}
        <button
          onClick={(e) => {
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

        <hr />
        <h2>Experience</h2>
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

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export { Form };
