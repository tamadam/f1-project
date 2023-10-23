import "./YearSelector.css";

interface Props {
  initialYear: number;
  currentYear: number;
  baseYear: number;
  onSelectYear: (year: number) => void;
}

const YearSelector = ({
  initialYear,
  baseYear,
  currentYear,
  onSelectYear,
}: Props) => {
  //calculating all the years since F1 started
  const allYears = Array.from(
    new Array(currentYear - baseYear + 1),
    (val, index) => "" + -1 * (index - currentYear)
  );

  return (
    <div className="selector-container">
      <select
        id="results-year-selector"
        value={initialYear}
        onChange={(event) => onSelectYear(parseInt(event.target.value))}
      >
        {allYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;
