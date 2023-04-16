import "./StandingsLine.css";

interface Props {
  lineColor: string;
  rankValue: number;
  avatarImage?: string;
}

const StandingsLine = ({ lineColor, avatarImage, rankValue }: Props) => {
  const lineStyles = {
    backgroundColor: lineColor,
    //width: `${rankValue}%`,
    width: `0%`,
  };

  const avatarStyles = {
    //right: `${99 - rankValue}%`, // 94% line width: avatar right should be 5%
    right: `90%`,
    backgroundColor: lineColor,
    backgroundImage: `url(${avatarImage})`,
  };

  return (
    <div className="main-page-power-rankings-container">
      <div className="main-page-driver-line-container">
        {/* the next 3 animated div has a reference in the container component > MainPageCards > and also in CSS main-page-show-first-driver-value */}
        <div className="main-page-driver-line" style={lineStyles}></div>
        <div className="main-page-driver-avatar" style={avatarStyles}></div>
      </div>
      <div className="main-page-driver-value-container">{rankValue}</div>
    </div>
  );
};

export default StandingsLine;
