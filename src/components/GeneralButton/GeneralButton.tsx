import "./GeneralButton.css";

interface Props {
  label: string;
}

const GeneralButton = ({ label }: Props) => {
  return <button className="btn-primary">{label}</button>;
};

export default GeneralButton;
