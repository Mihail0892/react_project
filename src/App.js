import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import CartBox from "./components/CartBox/CartBox";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import SideDishes from "./pages/SideDishes/SideDishes";
import Footer from "components/Footer/Footer";
import Order from "pages/Order/Order";
import Soups from "pages/Soups/Soups";
import data from "Data/data";


function App() {
    const firstDishes = data.filter((item) => item.category === "Перші страви");
    const secondDishes = data.filter((item) => item.category === "Гарніри");
    const meatDishes = data.filter((item) => item.category === "М'ясні страви");
    const salatDishes = data.filter((item) => item.category === "Салати");
    const desertDishes = data.filter((item) => item.category === "Десерти");
    const drinkDishes = data.filter((item) => item.category === "Напої");
    const otherDishes = data.filter((item) => item.category === "Інше");

    const[cart,setCart]=useState([]);
    console.log(cart, 'cart');
    

  return (
    <>
      {/* <Search />  */}
      <Nav  />
      <Header cartItemsCounter={cart.length}/> 
      
      <Routes>
        <Route path="/CartBox" element={<CartBox setCart={setCart} cart={cart} />} />
        <Route path="/" element={<Home setCart={setCart}/>} />
        <Route
          path="/firstDishes"
          element={<SideDishes setCart={setCart} filterData={firstDishes}/>}
        />
        <Route
          path="/secondDishes"
          element={<SideDishes setCart={setCart} filterData={secondDishes}/>}
        />
        <Route
          path="/meatDishes"
          element={<SideDishes setCart={setCart} filterData={meatDishes}/>}
        />
        <Route
          path="/salatDishes"
          element={<SideDishes setCart={setCart} filterData={salatDishes}/>}
        />
        <Route
          path="/desertDishes"
          element={<SideDishes setCart={setCart} filterData={desertDishes}/>}
        />
        <Route
          path="/drinkDishes"
          element={<SideDishes setCart={setCart} filterData={drinkDishes}/>}
        />
        <Route
          path="/otherDishes"
          element={<SideDishes setCart={setCart} filterData={otherDishes}/>}
        />
        <Route path="/SearchPage" element={<SearchPage setCart={setCart}/>} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Soups" element={<Soups />} />
      </Routes> 
      {/* <Footer/> */}
    </>
  );
}

export default App;
