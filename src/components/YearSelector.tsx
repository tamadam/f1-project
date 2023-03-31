interface Props {
  onSelectYear: (year: string) => void;
}

const YearSelector = ({ onSelectYear }: Props) => {
  //calculating all the years since F1 started
  const baseYear = 1950;
  const currentYear = new Date().getFullYear();
  const allYears = Array.from(
    new Array(currentYear - baseYear + 1),
    (val, index) => "" + -1 * (index - currentYear)
  );

  return (
    <div className="selector-container">
      <select onChange={(event) => onSelectYear(event.target.value)}>
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
