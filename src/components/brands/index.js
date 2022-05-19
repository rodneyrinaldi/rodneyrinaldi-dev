import React from "react";
import Img from "../../components/img";
import styles from "./index.module.css";

function Brands({ id, alt, pic }) {
  return (
    <>
      <div className={styles.card}>
        <Img src={pic} alt={alt} width="10vw" maxWidth="60px" />
      </div>
    </>
  );
}

export default Brands;
