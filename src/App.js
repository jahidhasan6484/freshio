import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import HandleCategory from './components/HandleCategory/HandleCategory';
import All from './components/All/All';
import FullBlog from './components/Blog/FullBlog';


function App() {
  return (
    <Routes>
       <Route path="/" element={<All />} />
       <Route path="/handleCategory/:category" element={<HandleCategory />} />
       <Route path="/blogs/:key" element={<FullBlog />} />
    </Routes>
  );
}

export default App;
