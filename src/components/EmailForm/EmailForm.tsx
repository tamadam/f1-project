import "./EmailForm.css";
import { useState, FocusEvent, useContext } from "react";
import { LanguageContext } from "../../App";

const EmailForm = () => {
  const language = useContext(LanguageContext);

  const [isEmailValid, setEmailValid] = useState(true);

  const errorMessageStyle = `main-page-email-error-message-container ${
    isEmailValid ? "main-page-valid-email" : "main-page-invalid-email"
  }`;

  const inputBorderError = `main-page-email-input ${
    isEmailValid ? "" : "main-page-invalid-email-border"
  }`;

  const checkEmailValidity = (event: FocusEvent<HTMLInputElement>) => {
    const valueMissing = event.target.validity.valueMissing;
    const validityFull = event.target.validity.valid;

    if (validityFull) {
      setEmailValid(true);
      //setEmail(event.target.value)
    } else {
      if (valueMissing) setEmailValid(true);
      else setEmailValid(false);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("SUBMITTED.");
      }}
      className="main-page-email-form-container"
    >
      <div className="main-page-email-input-container">
        <div className="main-page-email-field">
          <input
            id="email-input"
            type="email"
            className={inputBorderError /* main-page-email-input */}
            autoComplete="off"
            placeholder=" "
            required
            onBlur={checkEmailValidity}
          />
          <label htmlFor="email-input" className="main-page-email-label">
            {language.emailForm.emailInputText}
          </label>
        </div>

        <div className={errorMessageStyle}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Failure"
            role="img"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM4.96967 6.03033L6.93934 8L4.96967 9.96967L6.03033 11.0303L8 9.06066L9.96967 11.0303L11.0303 9.96967L9.06066 8L11.0303 6.03033L9.96967 4.96967L8 6.93934L6.03033 4.96967L4.96967 6.03033Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>{language.emailForm.emailErrorText}</span>
        </div>
      </div>
      <button type="submit" className="main-page-submit-button-container">
        <div className="main-page-submit-button-label">
          <span>{language.emailForm.emailSubmitText}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Hawkins-Icon Hawkins-Icon-Standard"
            data-name="ChevronRight"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </form>
  );
};

export default EmailForm;
