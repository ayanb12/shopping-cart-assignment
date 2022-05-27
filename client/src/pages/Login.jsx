import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../component/Form/Form";
import FormInput from "../component/Form/FormInput";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { setDataToStorage } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setDataToStorage(values);
    navigate("/");
  };

  const printwidth = () => {
    console.log("innerWidth : ", window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", printwidth);
    return () => {
      window.removeEventListener("resize", printwidth);
    };
  }, []);

  return (
    <>
      <div className="login-wrapper my-2 py-2">
        <div className="heading p-3">
          <h2 className="my-1">Login</h2>
          <p>Get access to your Orders. Whishlist and Recommendations.</p>
        </div>
        <Form submit={handleSubmit} initialValue={{ email: "", password: "" }}>
          <FormInput type="email" name="email" labelContent="Email" />
          <FormInput type="password" name="password" labelContent="Password" />
        </Form>
      </div>
    </>
  );
};

export default Login;
