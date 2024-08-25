import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react"

const Home = lazy(() => import("../pages/Home.jsx"));
const Add = lazy(() => import("../pages/Add.jsx"));
const Edit = lazy(() => import("../pages/Edit.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Layout = lazy(() => import("../component/Layout.jsx"));
const ModOrAdminPage = lazy(() => import("../pages/ModOrAdminPage.jsx"));
const NotAllowed = lazy(() => import("../pages/NotAllowed.jsx"));
const AdminPage = lazy(() => import("../pages/AdminPage.jsx"));
const UserPage = lazy(() => import("../pages/UserPage.jsx"));
const UserProfilePage = lazy(() => import("../pages/UserProfile.jsx"));
const AdminLayout = lazy(() => import("../pages/ModOrAdminPage.jsx"));

// import Home from "../pages/Home.jsx";
// import Add from "../pages/Add.jsx";
// import Edit from "../pages/Edit.jsx";
// import Login from "../pages/Login.jsx";
// import Register from "../pages/Register.jsx";
// import Layout from "../component/Layout.jsx";
// import Footer from "../component/Footer.jsx";
// import ModOrAdminPage from "../pages/ModOrAdminPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <AdminPage>
            <Add />
          </AdminPage>
        ),
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "edit/:id",
        element: (
          <ModOrAdminPage>
            <Edit />
          </ModOrAdminPage>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "userprofile",
        element: (
          <UserPage>
            <UserProfilePage />
          </UserPage>
        ),
      },
      {
        path: "notallowed",
        element: <NotAllowed />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <AdminLayout />,
    children: [
      {
        path: "user",
        element: <div>Dashboard</div>,
      },
    ],
  },
]);

export default router;