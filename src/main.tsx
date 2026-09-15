import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";

import { RouterProvider, Outlet } from "react-router-dom";

import "./index.css";

import Header from "./pages/Menu.tsx";
import App from "./App.tsx";
import UserList from "./pages/UserList.tsx";
import Username from "./pages/Username.tsx";

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
      {
        path: "/user/:username",
        element: <Username />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
