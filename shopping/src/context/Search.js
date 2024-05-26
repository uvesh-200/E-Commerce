import { useState, useContext, createContext } from "react";
const Scontext = createContext();


const SearchProviders = ({children}) => {
  const [auth, setAuth] = useState({
    keyword: "",
    results: [],
  });
  
return (
  <Scontext.Provider value={[auth, setAuth]}>{children}</Scontext.Provider>
);
};

const useSearch = () => useContext(Scontext);

export { useSearch, SearchProviders };
