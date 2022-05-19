import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../components/layout";
import Menu from "../components/menu";
import styles from "../styles/index.module.css";

function Index() {
  useEffect(() => {}, []);

  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Layout showback="no" showcard="yes">
        <div className={styles.grid}>
          <Menu
            url="/skills"
            alt="competências"
            pic="/menu/skills.png"
            title={t("skills")}
            description={t("skills-d")}
          />
          <Menu
            url="/curriculum"
            alt="curriculum"
            pic="/menu/curriculum.png"
            title={t("curriculum")}
            description={t("curriculum-d")}
          />
          <Menu
            url="/portfolio"
            alt="portfolio"
            pic="/menu/portfolio.png"
            title={t("portfolio")}
            description={t("portfolio-d")}
          />
          <Menu
            url="/manifest"
            alt="manifesto"
            pic="/menu/manifest.png"
            title={t("manifest")}
            description={t("manifest-d")}
          />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Index;
