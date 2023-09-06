import { Link } from "react-router-dom";
import "./GeneralButton.css";

interface Props {
  label: string;
  target: string;
}

const GeneralButton = ({ label, target }: Props) => {
  return (
    <Link to={target} className="btn-primary">
      {label}
    </Link>
  );
};

export default GeneralButton;
