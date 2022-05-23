import React, { createContext, useState } from "react";

export const FormContent = createContext({
  form: {},
  error: null,
});

const Form = ({ initialValue, submit, children }) => {
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    for (let key in form) {
      if (form[key] === "") {
        setError({
          key,
          message: `Please fill the details!`,
        });
        return false;
      }
    }
    setError(null);
    return true;
  };

  return (
    <>
      <form
        className="form px-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (validate()) submit();
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

        <button className="btn btn-primary submit-btn">Login</button>
      </form>
    </>
  );
};

export default Form;
