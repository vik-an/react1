import "./App.scss";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/consts";
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary

import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Services from "./components/pages/services";
import Login from "./components/pages/login";
import SearchCategory from "./components/pages/searchCategory";
import RegisterForm from "./components/pages/register";

const router = createBrowserRouter([
  {
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterForm />,
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
