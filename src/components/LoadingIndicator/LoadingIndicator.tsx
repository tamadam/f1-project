import "./LoadingIndicator.css";
import logo from "../../assets/safetycar.gif";

const LoadingIndicator = () => {
  return (
    <div className="loading-widget">
      <img className="loading-image" src={logo} alt="loading..." />
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingIndicator;
