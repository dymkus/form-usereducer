export const ACTIONS = {
  INPUT_EMAIL: "INPUT_EMAIL",
  EMAIL_BLUR: "EMAIL_BLUR",
  INPUT_NAME: "INPUT_NAME",
  NAME_BLUR: "NAME_BLUR",
  INPUT_PASSWORD: "INPUT_PASSWORD",
  PASSWORD_BLUR: "PASSWORD_BLUR",
};

export const emailReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_EMAIL:
      return { value: action.value, isValid: action.value.includes("@") };
    case ACTIONS.EMAIL_BLUR:
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: null };
  }
};

export const nameReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_NAME:
      return { value: action.value, isValid: action.value !== "" };
    case ACTIONS.NAME_BLUR:
      return { value: state.value, isValid: state.value !== "" };
    default:
      return { value: "", isValid: null };
  }
};

export const passwordReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_PASSWORD:
      return { value: action.value, isValid: action.value.trim().length > 8 };
    case ACTIONS.PASSWORD_BLUR:
      return { value: state.value, isValid: state.value.trim().length > 8 };
    default:
      return { value: "", isValid: null };
  }
};