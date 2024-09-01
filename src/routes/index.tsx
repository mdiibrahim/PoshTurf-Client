import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import Dashboard from "../pages/Dashboard";
import CheckoutPage from "../components/ui/DashBoardPage/UserDashboard/Checkout";
import FacilityListingPage from "../components/ui/Facilities/FacilityListingPage";
import FacilityDetailsPage from "../components/ui/Facilities/FacilityDetailsPage";
import ProtectedRoute from "./ProtectedRoute";
import SuccessPage from "../pages/PaymentSuccess";
import FailPage from "../pages/PaymentFail";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/me",
            element: <Dashboard />,
          },
          {
            path: "/checkout/:bookingId",
            element: <CheckoutPage />,
          },
          {
            path: "/payment/success",
            element: <SuccessPage />,
          },
          {
            path: "/payment/fail",
            element: <FailPage />,
          },
        ],
      },
      {
        path: "/facilities",
        element: <FacilityListingPage />,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetailsPage />,
      },

      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
