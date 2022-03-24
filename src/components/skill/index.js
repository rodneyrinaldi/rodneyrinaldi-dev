import React from "react";
import Img from "../../components/img";
import styles from "./index.module.css";

function Skill({ key, alt, pic }) {
  return (
    <a className={styles.card}>
      <Img src={pic} alt={alt} width="10vw" maxWidth="60px" />
    </a>
  );
}

export default Skill;
