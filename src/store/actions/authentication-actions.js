import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REQUEST_PASSWORD_RESET_LINK,
  RESET_PASSWORD
} from "../types/authentication-types";

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  email,
  password
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const requestPasswordResetLink = (email) => ({
  type: REQUEST_PASSWORD_RESET_LINK,
  email
});

export const resetPassword = (email, token, newPassword, confirmPassword) => ({
  type: RESET_PASSWORD,
  email,
  token,
  newPassword,
  confirmPassword
});
