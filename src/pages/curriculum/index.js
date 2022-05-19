import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";
import styles from "./index.module.css";

function Curriculum() {
  useEffect(() => {}, []);

  const router = useRouter();
  const { t } = useTranslation("curriculum");

  return (
    <Layout showback="yes">
      <Title title={t("title")} />

      <div className={styles.container}>
        <div className={styles.line}>
          <div className={styles.colL}>
            <div>github.com/rodneyrinaldi</div>
            <div>linkedin.com/in/rodneyrinaldi</div>
          </div>
          <div className={styles.colR}>
            <div>11 98141.7040</div>
            <div>rodneyrinaldi.com</div>
            <div>rodney@rodneyrinaldi.com</div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div>
              <strong>{t("p1")}</strong>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <strong>{t("p2")}</strong>
            </div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div>
              <strong>{t("p3")}</strong>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <strong className={styles.col2e}>
                SOFTWARE ARCHITECTURE, .NET, JAVASCRIPT, NODE, REACT, DATABASE
                ORACLE, SQLSERVER, POSTGRES, MONGO, REDIS, DATA ANALYSIS, BI,
                DW, CRM DYNAMICS, SALESFORCE, PLUSOFT, PROJECT MANAGEMENT,
                SCRUM, PMBOK
              </strong>
            </div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div>
              <strong>{t("p4")}</strong>
            </div>
          </div>
          <div className={styles.col2}>
            <div>{t("p5")}</div>
            <div>{t("p6")}</div>
            <div>{t("p7")}</div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div>
              <strong>{t("p8")}</strong>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <strong>{t("p9")}</strong> {t("p10")}
            </div>
            <div>
              <strong>{t("p11")}</strong> {t("p12")}
            </div>
            <div>
              <strong>{t("p13")}</strong> {t("p14")}
            </div>
            <div>
              <strong>{t("p15")}</strong> {t("p16")}
            </div>
            <div>
              <strong>{t("p17")}</strong> {t("p18")}
            </div>
            <div>
              <strong>{t("p19")}</strong> {t("p20")}
            </div>
            <div>
              <strong>{t("p21")}</strong> {t("p22")}
            </div>
            <div>
              <strong>{t("p23")}</strong> {t("p24")}
            </div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div>
              <strong>{t("p25")}</strong>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <strong>{t("p26")}</strong>
            </div>
            <div>{t("p27")}</div>
            <div>
              <strong>{t("p28")}</strong>
            </div>
            <div>{t("p29")}</div>
            <div>
              <strong>{t("p30")}</strong>
            </div>
            <div>{t("p31")}</div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div>
              <strong>{t("p32")}</strong>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.bullets}>
              <div>{t("p33")}&nbsp;&nbsp;</div>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className={styles.bullets}>
              <div>{t("p34")}&nbsp;&nbsp;</div>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className={styles.bullets2}>
              <div>{t("p35")}&nbsp;&nbsp;</div>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div>
              <strong>{t("p36")}</strong>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <strong>{t("p37")}</strong>
              {t("p38")}
            </div>
            <div>
              <strong>{t("p39")}</strong>
              {t("p40")}
            </div>
            <div>
              <strong>{t("p41")}</strong>
              {t("p42")}
            </div>
            <div>
              <strong>{t("p43")}</strong>
              {t("p44")}
            </div>
            <div>
              <strong>{t("p45")}</strong>
              {t("p46")}
            </div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div>
              <strong>{t("p47")}</strong>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <i>{t("p48")}</i>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["curriculum"])),
  },
});

export default Curriculum;
