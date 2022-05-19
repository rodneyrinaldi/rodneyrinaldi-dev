import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Skill from "../../components/skill";
import Title from "../../components/title";
import data from "../../data/skills.json";
import styles from "./index.module.css";

function Skills() {
  useEffect(() => {}, []);

  const router = useRouter();
  const { t } = useTranslation("skills");

  return (
    <>
      <Layout showback="yes">
        <Title title={t("title")} />
        <div className={styles.row}>
          {data.map(function (item) {
            return <Skill key={item.alt} alt={item.alt} pic={item.pic} />;
          })}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["skills"])),
  },
});

export default Skills;
