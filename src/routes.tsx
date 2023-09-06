import { createBrowserRouter } from "react-router-dom";
import LayoutMainPage from "./LayoutMainPage/LayoutMainPage";
import LayoutHomePage from "./LayoutHomePage/LayoutHomePage";
import LayoutResults from "./LayoutResults/LayoutResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMainPage />,
    /*     children: [
      { path: "/home", element: <LayoutHomePage /> },
      { path: "results", element: <LayoutResults /> },
    ], */
  },
  {
    path: "/home",
    element: <LayoutHomePage />,
  },
  { path: "/results", element: <LayoutResults /> },
]);

export default router;
