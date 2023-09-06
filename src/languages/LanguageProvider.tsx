import { ReactNode, useReducer } from "react";
import LanguageContext from "./languageContext";
import { translationsHU } from "./translations/translationsHU";
import { translationsEN } from "./translations/translationsEN";
import { LANGUAGE_CODE_HUNGARIAN, LANGUAGE_CODE_ENGLISH } from "../constants";
import { LanguageLayout } from "./translationsStructure";

export interface LanguageSettings {
  language: typeof LANGUAGE_CODE_HUNGARIAN | typeof LANGUAGE_CODE_ENGLISH;
}

const languageReducer = (
  state: LanguageLayout,
  action: LanguageSettings
): LanguageLayout => {
  if (action.language === LANGUAGE_CODE_HUNGARIAN) return translationsHU;
  if (action.language === LANGUAGE_CODE_ENGLISH) return translationsEN;

  return state;
};

export interface LanguageSelectorSettings {
  languageLabel: string;
}

const languageSelectorReducer = (
  state: string,
  action: LanguageSelectorSettings
): string => {
  if (action.languageLabel === LANGUAGE_CODE_HUNGARIAN) {
    return LANGUAGE_CODE_HUNGARIAN;
  }
  if (action.languageLabel === LANGUAGE_CODE_ENGLISH) {
    return LANGUAGE_CODE_ENGLISH;
  }

  return state;
};

interface Props {
  children: ReactNode;
}

const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useReducer(languageReducer, translationsHU);
  const [languageLabel, setLanguageLabel] = useReducer(
    languageSelectorReducer,
    LANGUAGE_CODE_HUNGARIAN
  );

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, languageLabel, setLanguageLabel }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
