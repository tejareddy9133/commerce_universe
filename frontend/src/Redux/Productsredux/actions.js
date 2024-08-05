import * as types from "./action.types";

export const Get_Data = () => (dispatch) => {
  dispatch({ type: types.DATA_REQUEST_PENDING });
  fetch("http://localhost:6800/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: types.DATA_REQUEST_SUCESS, payload: data.data });
    })
    .catch((err) => {
      dispatch({ type: types.DATA_REQUEST_FAILURE });
    });
};
