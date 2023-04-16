import styles from "./LanguageSelect.module.scss";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

const languages = [
  {
    language: "Русский",
    value: "ru",
  },
  {
    language: "English",
    value: "en",
  },
];

interface LanguageSelect {}

export const LanguageSelect = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { t, lang } = useTranslation("Home");
  const handleLanguageChange = (language: string) => {
    router.push("/", "/", { locale: language });
  };
  return (
    <div>
      <div className={styles.select} onClick={() => setShow(!show)}>
        <h1 className={styles.header}>{t("selectLanguage")}</h1>
        <div className={`${styles.arrow} ${show && styles.rotate}`} />
      </div>
      {show && (
        <div className={styles.selectContent}>
          <ul>
            {languages.map(({ language, value }) => (
              <li key={value}>
                <label
                  className={styles.label}
                  onClick={() => handleLanguageChange(value)}
                >
                  <p>{language}</p>
                  {lang === value ? (
                    <div className={styles.checkbox}></div>
                  ) : (
                    ""
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
