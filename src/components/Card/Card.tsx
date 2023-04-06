import { ReactNode } from "react";
import "./Card.css";

interface Props {
  children: ReactNode;
}

const Card = (props: Props) => {
  return <div className="story-card">{props.children}</div>;
};

export default Card;
