import { useEffect, useState } from "react";
import "./ResultSelector.css";
import arrowRight from "../../../assets/arrow-right.png";
import arrowLeft from "../../../assets/arrow-left.png";

const convertEmToPixel = (em: number) => {
  return em * 16;
};

const EM_THRESHOLD = 60;
const PIXEL_THRESHOLD = convertEmToPixel(EM_THRESHOLD);

interface Props {
  startIndex: number;
  onChange: (index: number) => void;
}

const ResultSelector = ({ onChange, startIndex = 0 }: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < PIXEL_THRESHOLD);

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < PIXEL_THRESHOLD;
      if (isMobileNow !== isMobile) {
        setIsMobile(isMobileNow);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const resultSelectorItems = ["Races", "Drivers", "Teams", "Fastest Laps"];

  const handleSelectorButtonClick = (isRightButton: boolean) => {
    let newIndex = 0;
    if (isRightButton) {
      newIndex =
        currentIndex < resultSelectorItems.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : resultSelectorItems.length - 1;
    }

    setCurrentIndex(newIndex);
    onChange(newIndex);
  };

  const handleSelectorItemClick = (index: number) => {
    setCurrentIndex(index);
    onChange(index);
  };

  return (
    <div className="result-selector-container">
      {isMobile ? (
        <div className="result-selector-items">
          <button
            className="result-selector-arrow-icon-container"
            onClick={() => handleSelectorButtonClick(false)}
          >
            <img
              className="result-selector-arrow-icon left"
              src={arrowLeft}
              alt="arrowLeft"
            />
          </button>
          <div className="result-selector-item">
            {resultSelectorItems[currentIndex]}
          </div>
          <button
            className="result-selector-arrow-icon-container"
            onClick={() => handleSelectorButtonClick(true)}
          >
            <img
              className="result-selector-arrow-icon right"
              src={arrowRight}
              alt="arrowRight"
            />
          </button>
        </div>
      ) : (
        <div className="result-selector-items">
          {resultSelectorItems.map((item, index) => (
            <div
              className={`result-selector-item ${
                currentIndex === index ? "active" : "inactive"
              }`}
              key={index}
              onClick={() => handleSelectorItemClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultSelector;
