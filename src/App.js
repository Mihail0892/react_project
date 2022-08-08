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


function App() {
  const [filteredData, setFilteredData] = useState([]);
  const getFilteredData = (filterData) => {
    setFilteredData(filterData);
  };

  return (
    <>
      {/* <Search /> */}
      <Nav getFilteredData={getFilteredData} />
      <Header /> 
       {/* <Footer/> */}
      <Routes>
        <Route path="/CartBox" element={<CartBox />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/SideDishes"
          element={<SideDishes filteredData={filteredData} />}
        />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Soups" element={<Soups />} />
      </Routes> 
    </>
  );
}

export default App;
