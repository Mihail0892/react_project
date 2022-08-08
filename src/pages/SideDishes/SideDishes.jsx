import React, { useState, useEffect } from "react";
import styles from "./SideDishes.module.scss";
import Select from "../../components/Select/Select";
import data from "../../Data/data";
import Dish from "../../components/Dish/Dish";
import Footer from "components/Footer/Footer";


const SideDishes = ({ filteredData }) => {
  console.log(filteredData, "sidedishes");

  return (
    <>
    <div className={styles.all_box}>
        <div className={styles.flex}>
          <p className={styles.left_text}>Гарніри</p>
          {/* <p className={styles.right_text}>Сортувати:</p> */}
          <div className={styles.select}>
            <Select />
          </div>
        </div>
        <div className={styles.grid}>
          {(filteredData.length > 0 ? filteredData : data).map((item) => (
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

export default SideDishes;
