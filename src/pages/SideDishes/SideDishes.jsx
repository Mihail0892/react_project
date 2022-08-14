import React, { useState, useEffect } from "react";
import styles from "./SideDishes.module.scss";
import Select from "../../components/Select/Select";
import data from "../../Data/data";
import Dish from "../../components/Dish/Dish";
import Footer from "components/Footer/Footer";
import { cleanup } from "@testing-library/react";

const SideDishes = ({ filterData, setCart }) => {
  const [price, setPrice] = useState("");
  const [sorted, setSorted] = useState([]);
  console.log(filterData, "sidedishes");

  console.log("jjjjj", price);

  useEffect(() => {
    if (price === "min") {
      const fromMinToMax = filterData.sort((a, b) => a.price - b.price);
      setSorted([...fromMinToMax]);
      console.log(fromMinToMax);
    } else if (price === "max") {
      const fromMaxToMin = filterData.sort((a, b) => b.price - a.price);
      setSorted([...fromMaxToMin]);
      console.log(fromMaxToMin);
    }
  }, [price,filterData]);

  useEffect(() => {
    setSorted(filterData)
  }, [filterData]);

  console.log("sorted", sorted);

  return (
    <>
      <div className={styles.all_box}>
        <div className={styles.flex}>
          <p className={styles.left_text}>{filterData[0].category}</p>
          {/* <p className={styles.right_text}>Сортувати:</p> */}
          <div className={styles.select}>
            <Select setPrice={setPrice} price={price} />
          </div>
        </div>
        <div className={styles.grid}>
          {(sorted.length > 0 ? sorted : filterData).map((item) => (
            <Dish
              setCart={setCart}
              item={item}
              key={item.id}
              description={item.description}
              img={item.img}
              dish={item.dish}
              price={item.price}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SideDishes;
