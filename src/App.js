import "./App.css";
//import { TopBar } from "./components/header/TopBar.jsx";
//import { MainPage } from "./components/home/generalInfo.jsx";
import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/consts";

import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Services from "./components/pages/services";
import Login from "./components/pages/login";
import SearchCategory from "./components/pages/searchCategory";

const router = createBrowserRouter([
  {
    //element: <RootLayout />,

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
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

    // <div className="App">
    //   <header className="App-header">
    //     <TopBar />
    //   </header>

    //   <div>
    //     <MainPage />
    //   </div>
    // </div>
  );
}

export default App;
