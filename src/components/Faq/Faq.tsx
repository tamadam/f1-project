import { useContext, useState } from "react";
import "./Faq.css";
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
    <div className="faq-wrapper">
      <div className="faq-container">
        <div className="faq-content">
          <h2 className="faq-title">{language.faq.faqTitle}</h2>
          <div className="faq-questions">
            <ul className="question-list">
              <li className="question-item">
                <h3>
                  <button
                    className="question-button"
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
              <li className="question-item">
                <h3>
                  <button
                    className="question-button"
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
                    {language.faq.question2Answer}
                  </span>
                </div>
              </li>
              <li className="question-item">
                <h3>
                  <button
                    className="question-button"
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
              <li className="question-item">
                <h3>
                  <button
                    className="question-button"
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
                    {language.faq.question4Answer}
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
