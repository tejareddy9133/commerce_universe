// src/Redux/actions/authActions.js
import axios from "axios";
import * as types from "./auth.action.types";

export const User_Registration = (userdetails) => (dispatch) => {
  fetch("http://localhost:6800/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdetails),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: types.USER_REGISTER_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: types.USER_REGISTER_FAILURE, payload: error.message });
    });
};

export const User_Login = (credentials) => (dispatch) => {
  fetch("http://localhost:6800/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.msg === "credintials wrong") {
        dispatch({ type: types.USER_LOGIN_FAILURE, payload: data });
      } else {
        if (data.token) {
          dispatch({ type: types.USER_LOGIN_SUCCESS, payload: data });
        }
      }
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: error.message });
    });
};
