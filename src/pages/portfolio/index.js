import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Brands from "../../components/brands";
import Layout from "../../components/layout";
import Projects from "../../components/projects";
import Title from "../../components/title";
import data from "../../data/brands.json";
import data2en from "../../data/projects-en.json";
import data2pt from "../../data/projects-pt.json";
import styles from "./index.module.css";

function Portifolio() {
  useEffect(() => {}, []);

  const router = useRouter();
  const { t } = useTranslation("portfolio");

  return (
    <>
      <Layout showback="yes">
        <Title title={t("title")} />
        <Brand />
        <Project flag={t("title")} />
      </Layout>
    </>
  );
}

function Brand() {
  return (
    <div className={styles.row}>
      {data.map(function (item) {
        return <Brands key={item.alt} alt={item.alt} pic={item.pic} />;
      })}
    </div>
  );
}

function Project(props) {
  return (
    <div className={styles.row2}>
      {props.flag === "PORTFOLIO"
        ? data2en.map(function (item) {
            return (
              <Projects
                key={item.title}
                title={item.title}
                description={item.description}
              />
            );
          })
        : data2pt.map(function (item) {
            return (
              <Projects
                key={item.title}
                title={item.title}
                description={item.description}
              />
            );
          })}
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["portfolio"])),
  },
});

export default Portifolio;
