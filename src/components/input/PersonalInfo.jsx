import { Input } from "./Input";

const PersonalInfo = () => {
  return (
    <div className="border personal-info-form">
      <Input label="Name" placeholder="Name" />
      <Input label="LastName" placeholder="LastName" />
      <Input label="Title" placeholder="Title" />
      <Input label="Photo" type="file" />
      <Input label="Address" placeholder="Address" />
      <Input label="PhoneNumber" placeholder="Phone Number" />
      <Input label="Email" placeholder="Email" />
      <Input
        label="Description"
        placeholder="Description"
        type="textarea"
      />{" "}
      {/* <br /> */}
    </div>
  );
};

export { PersonalInfo };
