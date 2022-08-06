import React from "react";
import styles from "./Main.module.scss";
import Select from "../../components/Select/Select";

const Main = () => {

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
          
        </div>
      </div>
    </>
  );
};

export default Main;