import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";

import { RouterProvider, Outlet } from "react-router-dom";

import "./index.css";

import Header from "./pages/Menu.tsx";
import App from "./App.tsx";
import UserList from "./pages/UserList.tsx";

import Recipe from "./pages/Recipe.tsx";

import NotFound from "./pages/NotFound.tsx";
import User from "./pages/User.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/userList",
        element: <UserList />,
      },
      { path: "/user/:id", element: <User /> },
      { path: "/recipe/:id", element: <Recipe /> },
      { path: "*", element: <NotFound /> },
      { path: "/login", element: <Login /> },
      { path: "/profile/:id", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
