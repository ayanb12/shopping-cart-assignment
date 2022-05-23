import React, { useContext } from "react";
import { FormContent } from "./Form";

const FormInput = ({ type, name, labelContent }) => {
  const { form, error, handleChange } = useContext(FormContent);

  const renderError = () => {
    return <small>{error.message}</small>;
  };

  return (
    <div className="form-wrapper mb-2">
      <input
        type={type}
        className="forminput"
        autoComplete="off"
        placeholder=" "
        name={name}
        value={form[name]}
        onChange={handleChange}
      />
      {error && error.key === name && renderError()}
      <label className="formlabel">{labelContent}</label>
    </div>
  );
};

export default FormInput;
