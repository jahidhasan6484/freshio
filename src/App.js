import { React, createContext, useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import HandleCategory from './components/HandleCategory/HandleCategory';
import FullBlog from './components/Blog/FullBlog';
import All from './components/All/All';

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  console.log("CART: ",cart)
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/handleCategory/:category" element={<HandleCategory />} />
        <Route path="/blogs/:key" element={<FullBlog />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
