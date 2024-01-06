import { useState, useEffect } from "react";
import YearSelector from "../../../components/YearSelector";
import "./YearSelectorWrapper.css";
import mercedesHamilton from "../../../assets/mercedesHamilton-bg.png";
import defaultBackground from "../../../assets/default-bg.png";
import redbullMax from "../../../assets/redbullmax-bg.png";

const yearStylesMap: Record<string, { imgSrc: string; color: string }> = {
  2017: { imgSrc: mercedesHamilton, color: "#00A19B" },
  2018: { imgSrc: mercedesHamilton, color: "#00A19B" },
  2019: { imgSrc: mercedesHamilton, color: "#00A19B" },
  2020: { imgSrc: mercedesHamilton, color: "#00A19B" },
  2021: { imgSrc: redbullMax, color: "#0d32bd" },
  2022: { imgSrc: redbullMax, color: "#0d32bd" },
  2023: { imgSrc: redbullMax, color: "#0d32bd" },
};

const defaultYearStyles = { imgSrc: defaultBackground, color: "#e8ab33" };

interface Props {
  selectedYear: number;
  currentYear: number;
  baseYear: number;
  onYearChange: (year: number) => void;
}

const YearSelectorWrapper = ({
  selectedYear,
  currentYear,
  baseYear,
  onYearChange,
}: Props) => {
  const handleYearChange = (increment: number) => {
    const newYear = selectedYear + increment;

    if (newYear > currentYear || newYear < baseYear) {
      return;
    }

    onYearChange(newYear);
  };

  const [yearStyles, setYearStyles] = useState<{
    imgSrc: string;
    color: string;
  }>({
    imgSrc: "",
    color: "",
  });

  useEffect(() => {
    setYearStyles(yearStylesMap[selectedYear] || defaultYearStyles);
  }, [selectedYear]);

  return (
    <div className="year-selector-wrapper">
      <img
        src={yearStyles.imgSrc}
        alt=""
        className="year-selector-background-image"
      />
      <div className="year-selector-background-gradient"></div>
      <div
        style={{
          borderColor: yearStyles.color,
          color: yearStyles.color,
        }}
        className="year-selector-container"
      >
        <span
          className={`yearChangeUp ${
            selectedYear === currentYear ? "hidden" : ""
          }`}
          onClick={() => handleYearChange(1)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.65801 15.8457H17.5171C17.6675 15.8452 17.815 15.8037 17.9436 15.7257C18.0722 15.6476 18.1771 15.536 18.247 15.4028C18.3169 15.2695 18.3491 15.1198 18.3402 14.9696C18.3313 14.8194 18.2816 14.6745 18.1965 14.5505L10.7669 3.81894C10.459 3.37399 9.71771 3.37399 9.40897 3.81894L1.97944 14.5505C1.89345 14.6743 1.84302 14.8192 1.83363 14.9697C1.82425 15.1201 1.85627 15.2702 1.92621 15.4037C1.99616 15.5372 2.10135 15.649 2.23037 15.7269C2.35938 15.8049 2.50729 15.8459 2.65801 15.8457Z"
              fill={yearStyles.color}
            />
          </svg>
        </span>
        <span className="year-selector">
          <YearSelector
            initialYear={selectedYear}
            currentYear={currentYear}
            baseYear={baseYear}
            onSelectYear={(year) => onYearChange(year)}
          />
        </span>
        <span
          className={`yearChangeDown ${selectedYear === 1950 ? "hidden" : ""}`}
          onClick={() => handleYearChange(-1)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.65801 15.8457H17.5171C17.6675 15.8452 17.815 15.8037 17.9436 15.7257C18.0722 15.6476 18.1771 15.536 18.247 15.4028C18.3169 15.2695 18.3491 15.1198 18.3402 14.9696C18.3313 14.8194 18.2816 14.6745 18.1965 14.5505L10.7669 3.81894C10.459 3.37399 9.71771 3.37399 9.40897 3.81894L1.97944 14.5505C1.89345 14.6743 1.84302 14.8192 1.83363 14.9697C1.82425 15.1201 1.85627 15.2702 1.92621 15.4037C1.99616 15.5372 2.10135 15.649 2.23037 15.7269C2.35938 15.8049 2.50729 15.8459 2.65801 15.8457Z"
              fill={yearStyles.color}
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default YearSelectorWrapper;
