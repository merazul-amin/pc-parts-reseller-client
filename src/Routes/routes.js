import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Pages/Blogs/Blogs";
import Categories from "../components/Pages/Categories/Categories";
import AddProduct from "../components/Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../components/Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../components/Pages/Dashboard/AllSellers/AllSellers";
import DashboardHome from "../components/Pages/Dashboard/DashboardHome/DashboardHome";
import MyOrders from "../components/Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../components/Pages/Dashboard/MyProducts/MyProducts";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import ErrorPage from "../components/SharedPages/ErrorPage/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Layout from "../Layout/Layout";
import AdminRoute from "./AdminRoute";
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
            { path: '/blogs', element: <Blogs></Blogs> },
            {
                path: '/category/:id',
                element: <PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/dashboard', element: <DashboardHome></DashboardHome> },
            { path: '/dashboard/myOrders', element: <MyOrders></MyOrders> },
            { path: '/dashboard/addProduct', element: <AddProduct></AddProduct> },
            { path: '/dashboard/myProducts', element: <MyProducts></MyProducts> },
            { path: '/dashboard/allSellers', element: <AdminRoute><AllSellers></AllSellers></AdminRoute> },
            { path: '/dashboard/allBuyers', element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute> },
        ]
    }
]);

export default routes;
