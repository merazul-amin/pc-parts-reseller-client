import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import ErrorPage from "../components/SharedPages/ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <LogIn></LogIn> },
            { path: '/register', element: <Register></Register> },
        ]
    }
]);

export default routes;
