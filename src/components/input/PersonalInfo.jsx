import { Input } from "./Input";

const PersonalInfo = () => {
  return (
    <>
      <Input label="Name" />
      <Input label="LastName" />
      <Input label="Title" />
      <Input label="photo" type="file" />
      <Input label="addresss" />
      <Input label="PhoneNumber" />
      <Input label="Email" type="email" />
      <Input label="Description" /> <br />
    </>
  );
};

export { PersonalInfo };
