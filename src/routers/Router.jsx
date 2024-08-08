import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Layout from "../component/Layout.jsx"; 
import Footer from "../component/Footer.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Home />,
  //     },
  //     {
  //       path: "add",
  //       element: <Add />,
  //     },
  //     {
  //       path: "edit/:id",
  //       element: <Edit />,
  //     },
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
  {
    path: "",
    element: <Home />,
  },
  {
    path: "add",
    element: <Add />,
  },
  {
    path: "edit/:id",
    element: <Edit />,
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
    path: "footer",
    element: <Footer />
  }
]);

export default router;
