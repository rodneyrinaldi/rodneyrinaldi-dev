import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./index.module.css";

function Job() {
  useEffect(() => {}, []);

  const router = useRouter();
  const { t } = useTranslation("job");

  return (
    <>
      <Link href="/">
        <a>
          <div className={styles.row}>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <br />
            <p>{t("p4")}</p>
            <p>{t("p5")}</p>
            <Link href="/portfolio">
              <a>{t("p6")}</a>
            </Link>
          </div>
        </a>
      </Link>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["job"])),
  },
});

export default Job;
