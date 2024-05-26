import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
const Acontext = createContext();

const AuthProviders = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  axios.defaults.headers.common["Authorization"] = auth?.token;
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <Acontext.Provider value={[auth, setAuth]}>{children}</Acontext.Provider>
  );
};

const useAuth = () => useContext(Acontext);

export { useAuth, AuthProviders };
