import React, { useEffect, useRef } from "react";
import SliderBig from "components/SliderBig/SliderBig";
import SliderLittle from "components/SliderLittle/SliderLittle";
import Footer from "components/Footer/Footer";

import styles from "./Home.module.scss";

const Home = ({ setCart }) => {
  const fieldRef = useRef(null);
  useEffect(()=>{
    fieldRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  },[])
  return (
    <>
      <div ref={fieldRef}  className={styles.slider}>
        <div className={styles.big}>
          <SliderBig />
        </div>
        <p className={styles.popularDishes}>Популярні страви</p>
        <div className={styles.little}>
          <SliderLittle setCart={setCart} />
        </div>
        <div className={styles.homeFooter}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
