import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../component/Form/Form";
import FormInput from "../component/Form/FormInput";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { setDataToStorage } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setDataToStorage(values);
    navigate("/");
  };

  return (
    <>
      <div className="login-wrapper my-2 py-2">
        <div className="heading p-3">
          <h2 className="my-1">Register</h2>
          <p>We do not share your personal details with anyone.</p>
        </div>
        <Form
          submit={handleSubmit}
          initialValue={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
        >
          <FormInput type="text" name="firstname" labelContent="First Name" />
          <FormInput type="text" name="lastname" labelContent="Last Name" />
          <FormInput type="email" name="email" labelContent="Email" />
          <FormInput type="password" name="password" labelContent="Password" />
          <FormInput
            type="password"
            name="confirmpassword"
            labelContent="Confirm Password"
          />
        </Form>
      </div>
    </>
  );
};

export default Register;
