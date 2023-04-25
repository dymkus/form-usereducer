import React, { useEffect, useReducer, useState } from "react";
import RegisterField from "../../components/RegisterField";
import { emailReducer, nameReducer, passwordReducer, ACTIONS } from "../../actions/RegisterReducer";

function Register() {
  const [validForm, setValidform] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const validation = setTimeout(() => {
      setValidform(
        emailState.isValid && nameState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      clearTimeout(validation);
    };
  }, [emailState.isValid, nameState.isValid, passwordState.isValid]);

  const emailHandler = (e) => {
    dispatchEmail({ type: ACTIONS.INPUT_EMAIL, value: e.target.value });
  };
  const nameHandler = (e) => {
    dispatchName({ type: ACTIONS.INPUT_NAME, value: e.target.value });
  };
  const passwordHandler = (e) => {
    dispatchPassword({ type: ACTIONS.INPUT_PASSWORD, value: e.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: ACTIONS.EMAIL_BLUR });
  };

  const validateNameHandler = () => {
    dispatchName({ type: ACTIONS.NAME_BLUR });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: ACTIONS.PASSWORD_BLUR });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded shadow-xl md:p-6 p-2 md:w-1/3 w-3/4">
      <h1 className="text-2xl text-center">Register Form</h1>
      <form className="mt-2" onSubmit={submitHandler}>
        <RegisterField
          className="md:m-5 md:mx-10"
          label="Email"
          type="email"
          placeholder="Enter Email"
          onChange={emailHandler}
          onBlur={validateEmailHandler}
          valid={emailState.isValid}
          message="Email should be in format xxx@xxx"
        />

        <RegisterField
          className="md:m-5 md:mx-10"
          label="Name"
          type="text"
          placeholder="Enter Name"
          onChange={nameHandler}
          onBlur={validateNameHandler}
          valid={nameState.isValid}
          message="Name should not be empty"
        />

        <RegisterField
          className="md:m-5 md:mx-10"
          label="Password"
          type="password"
          placeholder="Enter Password"
          onChange={passwordHandler}
          onBlur={validatePasswordHandler}
          valid={passwordState.isValid}
          message="Password should be more > 8 character"
        />

        <div className="flex justify-center mx-10 my-5">
          <button
            type="submit"
            className="p-2 bg-cyan-500 text-white rounded w-full active:bg-cyan-300 uppercase font-bold disabled:bg-black"
            disabled={!validForm}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
