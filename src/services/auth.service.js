import api from "./api";
import TokenService from "./token.service";

const API_URL = "/api/v1/auth";

const register = (username, email, password) => {
  await.api.post(API_URL + "/signup", { username, email, password });
};

const AuthService = {
  register,
};
