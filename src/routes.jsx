import { createBrowserRouter } from "react-router-dom";
import RegisterInfo from "./pages/RegisterInfo";
import PortfolioLayout from "./layout/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterInfo />
  },
  {
    path: "/portfolio",
    element: <PortfolioLayout />
  }
])

export default router