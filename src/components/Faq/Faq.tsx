import "./Faq.css";
import { useContext, useState } from "react";
import EmailForm from "../EmailForm/EmailForm";
import { LanguageContext } from "../../App";
import React from "react";

const Faq = () => {
  const language = useContext(LanguageContext);

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (index === activeIndex) setActiveIndex(-1);
    else setActiveIndex(index);
  };

  return (
    <div className="main-page-faq-wrapper">
      <div className="main-page-faq-container">
        <div className="main-page-faq-content">
          <h2 className="main-page-faq-title">{language.faq.faqTitle}</h2>
          <div className="main-page-faq-questions">
            <ul className="main-page-question-list">
              <li className="main-page-question-item">
                <h3>
                  <button
                    className="main-page-question-button"
                    onClick={() => handleClick(0)}
                  >
                    <span>{language.faq.question1}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        activeIndex === 0
                          ? "main-page-question-svg main-page-question-svg-rotate"
                          : "main-page-question-svg main-page-question-svg-original"
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
                      ? "main-page-answer main-page-active-answer-container"
                      : "main-page-answer main-page-hidden-answer-container"
                  }
                >
                  <span
                    className={
                      activeIndex === 0
                        ? "main-page-answer-content-visible"
                        : "main-page-answer-content-hidden"
                    }
                  >
                    {language.faq.question1Answer
                      .split("<LINEBREAK>")
                      .map((text, index, array) => (
                        <React.Fragment key={index}>
                          {text}
                          {index !== array.length - 1 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                        </React.Fragment>
                      ))}
                  </span>
                </div>
              </li>
              <li className="main-page-question-item">
                <h3>
                  <button
                    className="main-page-question-button"
                    onClick={() => handleClick(1)}
                  >
                    <span>{language.faq.question2}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        activeIndex === 1
                          ? "main-page-question-svg main-page-question-svg-rotate"
                          : "main-page-question-svg main-page-question-svg-original"
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
                      ? "main-page-answer main-page-active-answer-container"
                      : "main-page-answer main-page-hidden-answer-container"
                  }
                >
                  <span
                    className={
                      activeIndex === 1
                        ? "main-page-answer-content-visible"
                        : "main-page-answer-content-hidden"
                    }
                  >
                    {language.faq.question2Answer}
                  </span>
                </div>
              </li>
              <li className="main-page-question-item">
                <h3>
                  <button
                    className="main-page-question-button"
                    onClick={() => handleClick(2)}
                  >
                    <span>{language.faq.question3}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        activeIndex === 2
                          ? "main-page-question-svg main-page-question-svg-rotate"
                          : "main-page-question-svg main-page-question-svg-original"
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
                      ? "main-page-answer main-page-active-answer-container"
                      : "main-page-answer main-page-hidden-answer-container"
                  }
                >
                  <span
                    className={
                      activeIndex === 2
                        ? "main-page-answer-content-visible"
                        : "main-page-answer-content-hidden"
                    }
                  >
                    {
                      language.faq
                        .question3Answer /*language.faq.question3Answer
                      .split("\n")
                      .map((text, index) => (
                        <React.Fragment key={index}>
                          {text}
                          <br />
                          <br />
                        </React.Fragment>
                      ))*/
                    }
                  </span>
                </div>
              </li>
              <li className="main-page-question-item">
                <h3>
                  <button
                    className="main-page-question-button"
                    onClick={() => handleClick(3)}
                  >
                    <span>{language.faq.question4}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        activeIndex === 3
                          ? "main-page-question-svg main-page-question-svg-rotate"
                          : "main-page-question-svg main-page-question-svg-original"
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
                      ? "main-page-answer main-page-active-answer-container"
                      : "main-page-answer main-page-hidden-answer-container"
                  }
                >
                  <span
                    className={
                      activeIndex === 3
                        ? "main-page-answer-content-visible"
                        : "main-page-answer-content-hidden"
                    }
                  >
                    {language.faq.question4Answer}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-page-first-steps-bottom">
          <div className="main-page-form-title-faq">
            <h3>{language.mainCard.firstStepsTitle}</h3>
          </div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Faq;
