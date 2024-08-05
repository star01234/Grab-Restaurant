import {
  useState, useContext, createContext, useEffect, Children,} from "react";
import AuthService from "../services/auth.service";

const AuthContext = createContext(null);
export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(getUser);
  const login = (user) => setUser(user);
  const logout = () => {
    AuthService.logout();
    setUser(null);
  };
  function getUser  () {
    const temp = localStorage.getItem("user");
    const saverUser = JSON.parse(temp);
    return saverUser || null;
  };
  useEffect(() => {
    const temp  = JSON.stringify(user);
    localStorage.setItem("user", temp)
  }, [user]);
  return (
    <AuthContext.Provider value={{user, login, logout}}>
        {Children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
