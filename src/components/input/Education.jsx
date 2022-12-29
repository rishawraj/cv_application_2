import { Input } from "./Input";

const Education = ({ count }) => {
  return (
    <div className="border education-form">
      <Input label={`University-${count}`} placeholder="University" />
      <Input label={`City-${count}`} placeholder="City" />
      <Input label={`Degree-${count}`} placeholder="Degree" />
      <Input label={`Subject-${count}`} placeholder="Subject" />
      <Input label={`From-${count}`} placeholder="From" />
      <Input label={`To-${count}`} placeholder="To" />
      {/* <hr /> */}
    </div>
  );
};

export { Education };
