import React from 'react';

function RegisterField(props) {
  const valid = props.valid === false ? "form-control-danger" : "form-control"
  const message = <p className="text-red-500 text-sm">{props.message}</p>
  return (
    <div className={props.className}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        id={props.label}
        className={valid}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.valid === false ? message : ""}
    </div>
  );
}

export default RegisterField;