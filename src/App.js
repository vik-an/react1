import "./App.css";
import { TopBar } from "./components/header/TopBar.jsx";
import { MainPage } from "./components/home/generalInfo.jsx";
import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/consts";

import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";

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
