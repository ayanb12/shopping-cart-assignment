import React, { useContext } from "react";
import { AiFillInfoCircle } from "../../common/icons";
import { FormContent } from "./Form";

let errorMessageStyles = {
  position: "absolute",
  right: "0",
  bottom: "-1.6rem",
  display: "flex",
  alignItems: "center",
  letterSpacing: "1.1px",
};

const FormInput = ({ type, name, labelContent }) => {
  const { form, error, handleChange } = useContext(FormContent);

  const renderError = () => {
    return (
      <small style={errorMessageStyles}>
        <AiFillInfoCircle
          style={{ color: "tomato", marginRight: "0.2rem", fontSize: "1rem" }}
        />{" "}
        {"  "}
        {error.message}
      </small>
    );
  };

  return (
    <div className="form-wrapper mb-2">
      <input
        type={type}
        className="forminput"
        autoComplete="off"
        placeholder=" "
        name={name}
        value={form[name] || ""}
        onChange={handleChange}
      />
      {error && error.key === name && renderError()}
      <label className="formlabel">{labelContent}</label>
    </div>
  );
};

export default FormInput;
