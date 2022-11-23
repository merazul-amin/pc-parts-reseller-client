import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Pages/Blogs/Blogs";
import DashboardHome from "../components/Pages/Dashboard/DashboardHome/DashboardHome";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import ErrorPage from "../components/SharedPages/ErrorPage/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
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
            { path: '/blogs', element: <Blogs></Blogs> }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/dashboard', element: <DashboardHome></DashboardHome> },
        ]
    }
]);

export default routes;
