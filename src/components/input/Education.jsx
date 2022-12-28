import { Input } from "./Input";

const Education = ({ count }) => {
  return (
    <>
      <Input label={`University-${count}`} />
      <Input label={`City-${count}`} />
      <Input label={`Degree-${count}`} />
      <Input label={`Subject-${count}`} />
      <Input label={`From-${count}`} />
      <Input label={`To-${count}`} />
    </>
  );
};

export { Education };
