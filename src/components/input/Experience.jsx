import { Input } from "./Input";

const Experience = ({ count }) => {
  return (
    <>
      <Input label={`Position-${count}`} placeholder="Position" />
      <Input label={`Company-${count}`} placeholder="Company" />
      <Input label={`City-exp-${count}`} placeholder="City" />
      <Input label={`From-exp-${count}`} placeholder="From" />
      <Input label={`To-exp-${count}`} placeholder="To" />
      <hr />
    </>
  );
};

export { Experience };
