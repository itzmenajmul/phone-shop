import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Phone from "../pages/Phone/Phone";

const MyCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/public/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/phones/:id",
        element: <Phone />,
        loader: () => fetch("/public/phones.json"),
      },
    ],
  },
]);

export default MyCreatedRoute;
