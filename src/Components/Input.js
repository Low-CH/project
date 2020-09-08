import React, { memo } from "react";
import { useCountRenders } from "../useCountRenders";
import "bootstrap/dist/css/bootstrap.css";

const Input = ({
  label,
  name,
  nameErrors = "",
  register = () => {},
  onChange = () => {},
  minLength = 0,
  disabled = false,
  value = "",
}) => {
  useCountRenders(name);
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
};

export default memo(Input);
