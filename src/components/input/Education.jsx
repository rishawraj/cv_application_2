import { Input } from "./Input";

const Education = ({ count }) => {
  return (
    <>
      <Input label={`University-${count}`} placeholder="University" />
      <Input label={`City-${count}`} placeholder="City" />
      <Input label={`Degree-${count}`} placeholder="Degree" />
      <Input label={`Subject-${count}`} placeholder="Subject" />
      <Input label={`From-${count}`} placeholder="From" />
      <Input label={`To-${count}`} placeholder="To" />
      <hr />
    </>
  );
};

export { Education };
