import GeneralButton from "../../../components/GeneralButton/GeneralButton";
import {
  PATH_HOME_PAGE,
  PATH_MAIN_PAGE,
  PATH_RESULTS_PAGE_FROM_HOME_PAGE,
  PATH_STATISTICS_PAGE_FROM_HOME_PAGE,
} from "../../../constants";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        Navigation Bar
        <GeneralButton
          label="Go to Results page"
          target={PATH_RESULTS_PAGE_FROM_HOME_PAGE}
        />
        <GeneralButton
          label="Go to Statistics page"
          target={PATH_STATISTICS_PAGE_FROM_HOME_PAGE}
        />
        <GeneralButton label="Go to Home page" target={PATH_HOME_PAGE} />
        <GeneralButton label="Go to Main page" target={PATH_MAIN_PAGE} />
      </div>
    </>
  );
};

export default NavBar;
