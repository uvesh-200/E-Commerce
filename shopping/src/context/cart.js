import { useState, useContext, createContext } from "react";
const Cartcontext = createContext();


const CartProviders = ({children}) => {
  const [cart, setCart] = useState([]);
  
return (
  <Cartcontext.Provider value={[cart, setCart]}>{children}</Cartcontext.Provider>
);
};

const useCart = () => useContext(Cartcontext);

export { useCart, CartProviders };
