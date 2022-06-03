import React, { createContext } from "react";
import useFormValidation from "../../hooks/useFormValidation";
import { useLocation } from "react-router-dom";

export const FormContent = createContext({
  form: {},
  error: null,
});

const Form = ({ initialValue, submit, children }) => {
  const { form, error, validating, setForm } = useFormValidation(initialValue);
  const location = useLocation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        autoComplete="off"
        className="form px-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (validating()) {
            submit({ ...form });
            setForm({});
          }
        }}
      >
        <FormContent.Provider
          value={{
            form,
            error,
            handleChange,
          }}
        >
          {children}
        </FormContent.Provider>

        <button className="btn btn-primary submit-btn">
          {location.pathname === "/register" ? "Register" : "Login"}
        </button>
      </form>
    </>
  );
};

export default Form;
