import api from "../config/axios";

export const signUpApi = (payload) => {
  return api
    .post("/register", payload)
    .then((response) => response)
    .catch((err) => err);
};

export const loginApi = (payload) => {
  return api
    .post("/login", payload)
    .then((response) => response)
    .catch((err) => err);
};

export const profileApi = () => {
  return api
    .get("/profile")
    .then((response) => response)
    .catch((err) => err);
};

export const profileUpdateApi = () => {
  return api
    .put("/profile-update")
    .then((response) => response)
    .catch((err) => err);
};
