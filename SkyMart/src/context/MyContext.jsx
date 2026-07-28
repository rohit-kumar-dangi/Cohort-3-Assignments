import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  // All product data
  const [productsData, setProductsData] = useState([]);
  //for cart open and close
  const [isCartOpen, setIsCartOpen] = useState(false);
  //Store cart items
  const cart = JSON.parse(localStorage.getItem("cartItem")) || [];
  const [cartItems, setCartItems] = useState(cart);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProductsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <MyStore.Provider value={{ productsData, setProductsData, isCartOpen, setIsCartOpen, cartItems, setCartItems }}>
      {children}
    </MyStore.Provider>
  );
};