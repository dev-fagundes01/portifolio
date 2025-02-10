import { createBrowserRouter } from "react-router-dom";
import RegisterInfo from "./pages/RegisterInfo";
import PortfolioLayout from "./pages/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLayout />
  },
  {
    path: "/register-portfolio",
    element: <RegisterInfo />
  }
])

export default router