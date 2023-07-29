import React, { createContext, useState, useEffect, useContext } from "react";
import { loginWithEmail, logout, getOrders } from "../lib/appwrite";
// import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const addOrder = (item) => {
    setOrders((prevOrder) => [...prevOrder, item]);
  };

  const removeFromOrders = (itemId) => {
    setOrders((prevOrder) => prevOrder.filter((item) => item.id !== itemId));
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const removeAllFromCart = () => {
    setCart([]);
  };



  const [user, setUser] = useState(null);

  // This delays loading if till the data is ready
  const [isLoading, setLoading] = useState(false);

  // executed on first app load
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const jsonValue =  localStorage.getItem('bakery:user')
        console.log("jsonValue", jsonValue)
        let data = jsonValue;
        if (data) {
          const user_id = JSON.parse(data).userId;
          console.log("User ID  Received from Async Storage Data  :", JSON.parse(data).userId);
          setUser(data);
          const orders = await getOrders(user_id);
          console.log("Order of User", orders.documents);
          setOrders(orders);
        }
      } catch (err) {
        console.log("err: ", err);
      }
      finally {
        setLoading(false)
      }
    })();
  }, []);


  const loginUser = async (email, password) => {
    const response = await loginWithEmail(email, password);
    const jsonValue = JSON.stringify(response);
    localStorage.setItem('bakery:user', jsonValue)
    setUser(response);
  }

  const logOut = async () => {
    try {
      await logout()
      setUser(null);
    }
    catch (e) {
      console.log("ERROR", e);
    }
    finally {
      await AsyncStorage.removeItem('bakery:user', null);
    }

  }

  const value = {
    loginUser,
    logOut,
    isLoading,
    orders,
    addOrder,
    removeFromOrders,
    setLoading,
    user,
    setUser,
    isLoggedIn: !!user,
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export function useCart() {
  const context = useContext(AuthContext);
  const { cart, addToCart, removeFromCart, removeAllFromCart } = context
  return {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  };
}

export function useOrders() {
  const context = useContext(AuthContext);
  const { orders,
    addOrder,
    removeFromOrders } = context
  return {
    orders,
    addOrder,
    removeFromOrders
  }
}