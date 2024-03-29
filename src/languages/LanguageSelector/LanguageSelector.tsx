import {
  LANGUAGE_CODE_ENGLISH,
  LANGUAGE_CODE_HUNGARIAN,
} from "../../constants";
import useLanguage from "../useLanguage";
import "./LanguageSelector.css";
import { ChangeEvent } from "react";

const LanguageSelector = () => {
  const { language, setLanguage, languageLabel, setLanguageLabel } =
    useLanguage();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const changeToLanguageCode = event.target.value;
    const validLanguageCodes = [LANGUAGE_CODE_HUNGARIAN, LANGUAGE_CODE_ENGLISH];

    if (!validLanguageCodes.includes(changeToLanguageCode)) {
      console.error(
        `Error in LanguageSelector: Invalid language code: ${changeToLanguageCode}`
      );
    } else {
      switch (languageLabel) {
        case LANGUAGE_CODE_HUNGARIAN:
          setLanguage({ language: LANGUAGE_CODE_ENGLISH });
          setLanguageLabel({ languageLabel: changeToLanguageCode });
          break;

        case LANGUAGE_CODE_ENGLISH:
          setLanguage({ language: LANGUAGE_CODE_HUNGARIAN });
          setLanguageLabel({ languageLabel: changeToLanguageCode });
          break;

        default:
          console.error(
            `Error in LanguageSelector: Invalid languageLabel: ${languageLabel}`
          );
          setLanguage({ language: LANGUAGE_CODE_HUNGARIAN });
          setLanguageLabel({ languageLabel: LANGUAGE_CODE_HUNGARIAN });
      }
    }
  };

  return (
    <div className="main-page-language-selector-container">
      <div className="main-page-language-selector">
        <div className="main-page-language-world-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Hawkins-Icon Hawkins-Icon-Small"
            data-name="Globe"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <select
          className="main-page-language-select"
          name="language-select"
          value={languageLabel}
          onChange={handleLanguageChange}
        >
          <option value={LANGUAGE_CODE_HUNGARIAN}>
            {language.languageSelector.languageHungarian}
          </option>
          <option value={LANGUAGE_CODE_ENGLISH}>
            {language.languageSelector.languageEnglish}
          </option>
        </select>
        <div className="main-page-selector-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Hawkins-Icon Hawkins-Icon-Small"
            data-name="CaretDown"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5225 5.99902C12.6801 5.99902 12.7497 6.19745 12.6266 6.29589L8.20687 9.83168C8.08511 9.92909 7.9121 9.92909 7.79034 9.83168L3.37059 6.29589C3.24755 6.19745 3.31715 5.99902 3.47473 5.99902H12.5225Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
