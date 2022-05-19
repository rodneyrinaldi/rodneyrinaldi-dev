import React from "react";
import Img from "../../components/img";
import styles from "./index.module.css";

function Skill({ id, alt, pic }) {
  return (
    <a id={id} className={styles.card}>
      <Img id={id} src={pic} alt={alt} width="10vw" maxWidth="60px" />
    </a>
  );
}

export default Skill;
