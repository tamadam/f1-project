import { createBrowserRouter } from "react-router-dom";
import LayoutMainPage from "./LayoutMainPage/LayoutMainPage";
import LayoutHomePage from "./LayoutHomePage/LayoutHomePage";
import LayoutResults from "./LayoutResults/LayoutResults";
import LayoutStatistics from "./LayoutStatistics/LayoutStatistics";
import {
  PATH_HOME_PAGE,
  PATH_MAIN_PAGE,
  PATH_RESULTS_PAGE_FROM_HOME_PAGE,
  PATH_STATISTICS_PAGE_FROM_HOME_PAGE,
} from "./constants";

const router = createBrowserRouter([
  {
    path: PATH_MAIN_PAGE, // in the future: /welcome
    element: <LayoutMainPage />,
  },
  {
    path: PATH_HOME_PAGE, // in the future "/"
    element: <LayoutHomePage />,
    children: [
      { path: PATH_RESULTS_PAGE_FROM_HOME_PAGE, element: <LayoutResults /> },
      {
        path: PATH_STATISTICS_PAGE_FROM_HOME_PAGE,
        element: <LayoutStatistics />,
      },
    ],
  },
]);

export default router;
