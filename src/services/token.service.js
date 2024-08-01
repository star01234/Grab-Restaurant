const getlocalAccessToken = () => {
  const user = getUser();
  return user?.accessToken;
};
const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const removeUser = () => {
  localStorage.removeItem("user");
};
const TokenService = {
  getlocalAccessToken,
  setUser,
  getUser,
  removeUser,
};
