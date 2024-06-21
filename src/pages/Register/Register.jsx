import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
const initialState = {
  Username: "",
  Password: "",
  FirstName: "",
  LastName: "",
  Phones: "",
};

const Register = () => {
  const { formData, handleChange } = useGetInputValue(initialState);
  console.log(formData);
  return (
    <div>
      <form action="">
        <input
          value={formData.Username}
          onChange={handleChange}
          name="Username"
          type="text"
        />
        <input
          value={formData.Password}
          onChange={handleChange}
          name="Password"
          type="text"
        />
        <input
          value={formData.FirstName}
          onChange={handleChange}
          name="FirstName"
          type="text"
        />
        <input
          value={formData.LastName}
          onChange={handleChange}
          name="LastName"
          type="text"
        />
        <input
          value={formData.Phones}
          onChange={handleChange}
          name="Phones"
          type="text"
        />
      </form>
    </div>
  );
};

export default Register;
