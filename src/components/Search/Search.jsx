import React, { useState, useEffect } from "react";
import styles from './Search.module.scss';
import data from "../../Data/data";
import Dish from "../Dish/Dish";

const Search = () => {
  const [dish, setDish] = useState(data);
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const onSearchHandler = (e) => {
    setInput(e.target.value);
  };

  const filteredData = () => {
    const filterDish = dish.filter((item) =>
      item.dish.toLowerCase().includes(input.toLowerCase())
    );
    setSearchData(filterDish);
  };
  
   useEffect(filteredData,[input]);

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={input}
        onChange={onSearchHandler}
      />
      {(searchData.length > 0 ? searchData : dish).map((item) => {
        return (
          <Dish
            key={item.id}
            description={item.description}
            img={item.img}
            dish={item.dish}
            price={item.price}
          />
        );
      })}
    </>
  );
};

export default Search;
