import { useState, FocusEvent } from "react";
import "./App.css";
import YearSelector from "./components/YearSelector";
import DriverList from "./components/DriverList";
import DriverStandingList from "./components/DriverStandingList";
import ConstructorList from "./components/ConstructorList";
import ConstructorStandingList from "./components/ConstructorStandingList";
import NavBar from "./components/NavBar/NavBar";
import backgroundF1 from "./assets/background-f1.jpg";
import backgroundF1nosub from "./assets/f1back2.jpg";
import arrow from "./assets/icon.png";

function App() {
  const [year, setYear] = useState("current");

  //const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);

  const errorMessageStyle = `error-message-container ${
    isEmailValid ? "validEmail" : "invalidEmail"
  }`;

  const inputBorderError = `email-input ${
    isEmailValid ? "" : "invalidEmailInput"
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
    <div className="container">
      <header>
        <NavBar />
      </header>
      <div className="story-cards">
        <div className="story-card">
          <div className="story-card-bg">
            <img src={backgroundF1nosub} alt="" />
            <div className="bg-color"></div>
          </div>
          <div className="story-card-text-container">
            <div className="card-text-main-title-container">
              <h1 className="card-text-main-title">
                Forma 1 adatok és elemzések korlátlan kínálata.
              </h1>
              <p className="card-text-subtitle">
                Bárhol nézheted. Amikor csak akarod.
              </p>
              <div className="first-steps-container">
                <div className="form-title">
                  <h3>
                    Készülj fel, a lámpák mindjárt kialszanak! Add meg az
                    email-címedet és már kezdheted is.
                  </h3>
                </div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    console.log("SUBMITTED.");
                  }}
                  className="form-container"
                >
                  <div className="input-c email-input-container">
                    <div className="email-field">
                      <input
                        id="email-input"
                        type="email"
                        className={inputBorderError /* email-input */}
                        autoComplete="off"
                        placeholder=" "
                        required
                        onBlur={checkEmailValidity}
                      />
                      <label htmlFor="email-input" className="email-label">
                        E-mail-cím
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
                      Adj meg egy érvényes e-mail-címet.
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="input-c submit-button-container"
                  >
                    <div className="button-label">
                      <span>Első lépések</span>
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
              </div>
            </div>
          </div>
        </div>
        <div className="separator-line"></div>

        <div className="story-card">
          <YearSelector onSelectYear={(year) => setYear(year)} />
          <div className="data-container">
            <DriverList year={year} />
            <DriverStandingList year={year} />

            <ConstructorList year={year} />
            <ConstructorStandingList year={year} />
          </div>
        </div>
      </div>
    </div>

    /*<div className="container">*/

    /*
      <header>
        <NavBar />
      </header>
      <div className="story-cards">
        <div className="test-title">Hello</div>
        <div className="hero-title">
          <div className="image-bg">
            <img src={backgroundF1} alt="" className="bg-image" />
            <div className="bg-color"></div>
          </div>
        </div>
      </div>
  */

    /*
      <div className="main-header">
        <img src={backgroundF1} alt="" className="background-image-header" />
        {<div className="background-header"></div>}

        <div className="hero">Text</div>
      </div>
        <YearSelector onSelectYear={(year) => setYear(year)} /> */

    /*<div className="data-container">
        <DriverList year={year} />
        <DriverStandingList year={year} />

        <ConstructorList year={year} />
        <ConstructorStandingList year={year} />
  </div>*/
    /*</div>*/
  );
}

export default App;
