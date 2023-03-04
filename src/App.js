import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import CartBox from "./pages/CartBox/CartBox";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import SideDishes from "./pages/SideDishes/SideDishes";
import Order from "pages/Order/Order";
import data from "Data/data";

function App() {
  const firstDishes = data.filter((item) => item.category === "Перші страви");
  const secondDishes = data.filter((item) => item.category === "Гарніри");
  const meatDishes = data.filter((item) => item.category === "М'ясні страви");
  const salatDishes = data.filter((item) => item.category === "Салати");
  const desertDishes = data.filter((item) => item.category === "Десерти");
  const drinkDishes = data.filter((item) => item.category === "Напої");
  const otherDishes = data.filter((item) => item.category === "Інше");

  return (
    <>
      <div className={styles.wrapper}>
        <Nav />
        <Header />
        <Routes>
          <Route path="/CartBox" element={<CartBox />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/firstDishes"
            element={<SideDishes filterData={firstDishes} />}
          />
          <Route
            path="/secondDishes"
            element={<SideDishes filterData={secondDishes} />}
          />
          <Route
            path="/meatDishes"
            element={<SideDishes filterData={meatDishes} />}
          />
          <Route
            path="/salatDishes"
            element={<SideDishes filterData={salatDishes} />}
          />
          <Route
            path="/desertDishes"
            element={<SideDishes filterData={desertDishes} />}
          />
          <Route
            path="/drinkDishes"
            element={<SideDishes filterData={drinkDishes} />}
          />
          <Route
            path="/otherDishes"
            element={<SideDishes filterData={otherDishes} />}
          />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
