import React, { useState, useEffect, useRef } from "react";
import styles from "./SideDishes.module.scss";
import Select from "../../components/Select/Select";
import Dish from "../../components/Dish/Dish";
import Footer from "components/Footer/Footer";

const SideDishes = ({ filterData, setCart }) => {
  const [price, setPrice] = useState("");
  const [sorted, setSorted] = useState([]);
  const fieldRef = useRef(null);

  useEffect(() => {
    if (price === "min") {
      const fromMinToMax = filterData.sort((a, b) => a.price - b.price);
      setSorted([...fromMinToMax]);
    } else if (price === "max") {
      const fromMaxToMin = filterData.sort((a, b) => b.price - a.price);
      setSorted([...fromMaxToMin]);
    }
  }, [price, filterData]);

  useEffect(() => {
    setSorted(filterData);
    fieldRef.current.scrollIntoView();
  }, [filterData]);

  return (
    <>
    <div ref={fieldRef} className={styles.all_box}>
      <div className={styles.flex}>
        <p className={styles.left_text}>{filterData[0].category}</p>
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
      <div className={styles.footer}>
      <Footer />
      </div>
    </div>
    </>
  );
};

export default SideDishes;
