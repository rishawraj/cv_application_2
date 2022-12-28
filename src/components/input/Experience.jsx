import { Input } from "./Input";

const Experience = ({ count }) => {
  return (
    <>
      {/* <Input label={`University-${count}`} /> */}

      <Input label={`Position-${count}`} />
      <Input label={`Company-${count}`} />
      <Input label={`City-exp-${count}`} />
      <Input label={`From-exp-${count}`} />
      <Input label={`To-exp-${count}`} />
    </>
  );
};

export { Experience };
