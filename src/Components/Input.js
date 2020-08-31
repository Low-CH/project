import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Input({
  label,
  name,
  nameErrors = "",
  register = () => {},
  onChange = () => {},
  minLength = 0,
  disabled = false,
  value = "",
}) {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <input
        name={name}
        className={nameErrors ? "form-control is-invalid" : "form-control"}
        placeholder={label}
        ref={register({ required: true, minLength })}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {nameErrors && nameErrors.type === "required" && (
        <p className="invalid-feedback">This field is required</p>
      )}
      {minLength !== 0 && nameErrors && nameErrors.type === "minLength" && (
        <p className="invalid-feedback">This field min length of {minLength}</p>
      )}
    </div>
  );
}

export default memo(Input);
