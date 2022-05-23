import React from "react";
import Form from "../component/Form/Form";
import FormInput from "../component/Form/FormInput";

const Login = () => {
  return (
    <>
      <div className="login-wrapper my-2 py-2">
        <div className="heading p-3">
          <h2 className="my-1">Login</h2>
          <p>Get access to your Orders. Whishlist and Recommendations.</p>
        </div>
        <Form
          submit={() => alert("Submitted")}
          initialValue={{ email: "", password: "" }}
        >
          <FormInput type="email" name="email" labelContent="Email" />
          <FormInput type="password" name="password" labelContent="Password" />
        </Form>
      </div>
    </>
  );
};

export default Login;
