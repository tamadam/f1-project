import { useContext, useState } from "react";
import "./Faq.css";
import EmailForm from "../EmailForm/EmailForm";
import { LanguageContext } from "../../App";

const Faq = () => {
  const language = useContext(LanguageContext);

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (index === activeIndex) setActiveIndex(-1);
    else setActiveIndex(index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <div className="faq-content">
          <h2 className="faq-title">Gyakran ismételt kérdések</h2>
          <div className="faq-questions">
            <ul className="question-list">
              <li className="question-item">
                <h3>
                  <button
                    className="question-button"
                    onClick={() => handleClick(0)}
                  >
                    <span>Kérdés 1</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        activeIndex === 0
                          ? "question-svg question-svg-rotate"
                          : "question-svg question-svg-original"
                      }
                      data-name="Add"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  className={
                    activeIndex === 0
                      ? "answer active-answer-container"
                      : "answer hidden-answer-container"
                  }
                >
                  <span
                    className={
                      activeIndex === 0
                        ? "answer-content-visible"
                        : "answer-content-hidden"
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ultrices dolor sit amet elit euismod, eget malesuada
                    urna laoreet. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Nulla
                    elementum lobortis facilisis. Aliquam sed faucibus arcu.
                    Nunc scelerisque tellus ac ex condimentum, id malesuada urna
                    cursus.
                  </span>
                </div>
              </li>
              <li className="question-item">
                <h3>
                  <button
                    className="question-button"
                    onClick={() => handleClick(1)}
                  >
                    <span>Kérdés 2</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        activeIndex === 1
                          ? "question-svg question-svg-rotate"
                          : "question-svg question-svg-original"
                      }
                      data-name="Add"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  className={
                    activeIndex === 1
                      ? "answer active-answer-container"
                      : "answer hidden-answer-container"
                  }
                >
                  <span
                    className={
                      activeIndex === 1
                        ? "answer-content-visible"
                        : "answer-content-hidden"
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ultrices dolor sit amet elit euismod, eget malesuada
                    urna laoreet. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                  </span>
                </div>
              </li>
              <li className="question-item">
                <h3>
                  <button
                    className="question-button"
                    onClick={() => handleClick(2)}
                  >
                    <span>Kérdés 3</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        activeIndex === 2
                          ? "question-svg question-svg-rotate"
                          : "question-svg question-svg-original"
                      }
                      data-name="Add"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  className={
                    activeIndex === 2
                      ? "answer active-answer-container"
                      : "answer hidden-answer-container"
                  }
                >
                  <span
                    className={
                      activeIndex === 2
                        ? "answer-content-visible"
                        : "answer-content-hidden"
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ultrices dolor sit amet elit euismod, eget malesuada
                    urna laoreet. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Nulla
                    elementum lobortis facilisis. Aliquam sed faucibus arcu.
                    Nunc scelerisque tellus ac ex condimentum, id malesuada urna
                    cursus.
                    <br />
                    <br />
                    Quisque accumsan, magna eget venenatis tempor, erat dui
                    placerat ligula, sed consequat justo est feugiat urna. Nunc
                    sapien risus, posuere nec fringilla ac, consectetur non mi.
                    Nunc condimentum in diam vitae tristique. Maecenas sem orci,
                    tristique eu nibh et, sodales eleifend massa.
                  </span>
                </div>
              </li>
              <li className="question-item">
                <h3>
                  <button
                    className="question-button"
                    onClick={() => handleClick(3)}
                  >
                    <span>Kérdés 4</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        activeIndex === 3
                          ? "question-svg question-svg-rotate"
                          : "question-svg question-svg-original"
                      }
                      data-name="Add"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  className={
                    activeIndex === 3
                      ? "answer active-answer-container"
                      : "answer hidden-answer-container"
                  }
                >
                  <span
                    className={
                      activeIndex === 3
                        ? "answer-content-visible"
                        : "answer-content-hidden"
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ultrices dolor sit amet elit euismod, eget malesuada
                    urna laoreet. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="first-steps-wrapper">
          <div className="form-title-faq">
            <h3>{language.mainCard.firstStepsTitle}</h3>
          </div>
          {/* Form container*/}
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Faq;
