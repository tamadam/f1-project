import "./YearSelector.css";

interface Props {
  initialYear: string;
  currentYear: string;
  baseYear: string;
  onSelectYear: (year: string) => void;
}

const YearSelector = ({
  initialYear,
  baseYear,
  currentYear,
  onSelectYear,
}: Props) => {
  //calculating all the years since F1 started

  const localCurrentYear = parseInt(currentYear);
  const localBaseYear = parseInt(baseYear);

  const allYears = Array.from(
    new Array(localCurrentYear - localBaseYear + 1),
    (val, index) => "" + -1 * (index - localCurrentYear)
  );

  return (
    <div className="selector-container">
      <select
        id="results-year-selector"
        value={initialYear}
        onChange={(event) => onSelectYear(event.target.value)}
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
