import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  ErrorPage,
  AboutUsPage,
  CorporateAndAdvisoryPage,
  LearningAndDevelopmentPage,
  ManagementTeamPage,
  ContactPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/management-team",
        element: <ManagementTeamPage />,
      },
      {
        path: "/learning-and-development",
        element: <LearningAndDevelopmentPage />,
      },
      {
        path: "/corporate-and-advisory-services",
        element: <CorporateAndAdvisoryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
