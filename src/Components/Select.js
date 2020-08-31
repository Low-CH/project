import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.css";

function RadioButton({
  label,
  name,
  values,
  register,
  selected = "",
  disabled = false,
}) {
  const options = values.map((value) => (
    <option value={value} key={value}>
      {value}
    </option>
  ));
  return (
    <div className="form-group">
      <label>{label}:</label>
      <select
        name={name}
        className="form-control"
        ref={register}
        disabled={disabled}
        defaultValue={selected}
      >
        {options}
      </select>
    </div>
  );
}

export default memo(RadioButton);
