import { useContext } from "react";
import LanguageContext from "./languageContext";

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
