import React, { useState, useEffect } from "react";
import styles from "./Soups.module.scss";
import Select from "../../components/Select/Select";
import data from "../../Data/data";
import Dish from "../../components/Dish/Dish";

const Soups = () => {
  const [soups, setSoups] = useState([]);
  const filterData = () => {
    setSoups(data.filter((item) => item.category === "Перші страви"));
  };

  useEffect(filterData, []);

  return (
    <>
      <div className={styles.all_box}>
        <div className={styles.flex}>
          <p className={styles.left_text}>Перші страви</p>
          <div className={styles.select}>
            <p className={styles.right_text}>Сортувати:</p>
            <Select />
          </div>
        </div>
        <div className={styles.grid}>
          {soups.map((item) => (
            <Dish
              key={item.id}
              description={item.description}
              img={item.img}
              dish={item.dish}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Soups;
