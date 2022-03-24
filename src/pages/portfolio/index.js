import React from "react";
import Brands from "../../components/brands";
import Layout from "../../components/layout";
import Project from "../../components/project";
import Title from "../../components/title";
import data from "../../data/brands.json";
import data2 from "../../data/projects.json";
import styles from "./index.module.css";

function Portifolio() {
  return (
    <>
      <Layout showback="yes">
        <Title title="PORTFOLIO" />

        <div className={styles.row}>
          {data.map(function (item) {
            return <Brands key={item.key} alt={item.alt} pic={item.pic} />;
          })}
        </div>

        <div className={styles.row2}>
          {data2.map(function (item) {
            return (
              <Project
                key={item.key}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default Portifolio;
