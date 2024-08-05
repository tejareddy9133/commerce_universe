import * as types from "./auth.action.types";

const initialState = {
  isAuth: false,
  userDetails: null,
  accountCreated: false,
  error: null,
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case types.USER_REGISTER_PENDING:
    //   return { ...state, accountCreated: false, error: null };
    case types.USER_REGISTER_SUCCESS:
      return {
        ...state,
        accountCreated: true,
        userDetails: payload,
        error: null,
      };
    case types.USER_REGISTER_FAILURE:
      return { ...state, accountCreated: false, error: payload };

    // case types.USER_LOGIN_PENDING:
    //   return { ...state, isAuth: false, error: null };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isAuth: true, userDetails: payload, error: null };
    case types.USER_LOGIN_FAILURE:
      return { ...state, isAuth: false, error: payload };

    default:
      return state;
  }
};
