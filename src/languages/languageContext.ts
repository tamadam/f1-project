import React, { Dispatch } from "react";
import { LanguageSelectorSettings, LanguageSettings } from "./LanguageProvider";
import { LanguageLayout } from "./translationsStructure";


interface LanguageContextType {
    language: LanguageLayout;
    setLanguage: Dispatch<LanguageSettings>;  

    languageLabel: string;
    setLanguageLabel: Dispatch<LanguageSelectorSettings>;
}
  

const LanguageContext = React.createContext<LanguageContextType>({} as LanguageContextType)

export default LanguageContext;