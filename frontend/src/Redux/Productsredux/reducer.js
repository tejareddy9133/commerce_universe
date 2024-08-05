import * as types from "./action.types";
const Initialstate = {
  products: [],
  isPending: false,
  isFailure: false,
  isSucess: false,
};

export const ProductReducer = (state = Initialstate, { type, payload }) => {
  switch (type) {
    case types.DATA_REQUEST_PENDING:
      return { ...state, isPending: true };
    case types.DATA_REQUEST_FAILURE:
      return { ...state, isFailure: true };
    case types.DATA_REQUEST_SUCESS:
      return {
        ...state,
        products: payload,
        isPending: false,
        isFailure: false,
        isSucess: true,
      };
    default:
      return state;
  }
};
