import { createBrowserRouter } from "react-router-dom";
import LayoutMainPage from "./LayoutMainPage/LayoutMainPage";
import LayoutHomePage from "./LayoutHomePage/LayoutHomePage";
import LayoutResults from "./LayoutResults/LayoutResults";
import LayoutStatistics from "./LayoutStatistics/LayoutStatistics";

const router = createBrowserRouter([
  {
    path: "/", // in the future: /welcome
    element: <LayoutMainPage />,
  },
  {
    path: "/home", // in the future "/"
    element: <LayoutHomePage />,
    children: [
      { path: "results", element: <LayoutResults /> },
      {
        path: "statistics",
        element: <LayoutStatistics />,
      },
    ],
  },
]);

export default router;
