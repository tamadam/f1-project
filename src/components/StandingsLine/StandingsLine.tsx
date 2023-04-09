import { useEffect, useRef, useState } from "react";
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
    <div className="data-line-container">
      <div className="line-container">
        <div className="line" style={lineStyles}></div>
        <div className="avatar" style={avatarStyles}></div>
      </div>
      <div className="rank-value-container">{rankValue}</div>
    </div>
  );
};

export default StandingsLine;
