import React, { useState, useEffect } from "react";
import data from "../../Data/data";
import Dish from "../Dish/Dish";

const Search = ({ setCart }) => {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const onSearchHandler = (e) => {
    setInput(e.target.value);
  };

  const filteredData = () => {
    const filterDish = data.filter((item) =>
      item.dish.toLowerCase().includes(input.toLowerCase())
    );
    setSearchData(filterDish);
  };

  useEffect(filteredData, [input]);

  return (
    <>
      <input
        type="text"
        placeholder="Пошук по назві"
        value={input}
        onChange={onSearchHandler}
      />
      {(searchData.length > 0 ? searchData : data).map((item) => {
        return (
          <Dish
            item={item}
            setCart={setCart}
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
