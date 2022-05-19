import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";
import styles from "./index.module.css";

function Manifest() {
  useEffect(() => {}, []);

  const router = useRouter();
  const { t } = useTranslation("manifest");

  return (
    <>
      <Layout showback="yes">
        <Title title={t("title")} />
        <div className={styles.row}>
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["manifest"])),
  },
});

export default Manifest;
