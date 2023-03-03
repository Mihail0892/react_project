import React, { useState, useEffect, useRef } from "react";
import {useLocation } from "react-router-dom";
import styles from "./SideDishes.module.scss";
import Select from "../../components/Select/Select";
import Dish from "../../components/Dish/Dish";
import Footer from "components/Footer/Footer";

const SideDishes = ({ filterData}) => {
  const location = useLocation();
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
  }, [filterData]);

  useEffect(()=>{
    fieldRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  },[location.pathname])

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
            item={item}
            id={item.id}
            key={item.id}
            description={item.description}
            img={item.img}
            dish={item.dish}
            price={item.price}
            count={item.count}
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
