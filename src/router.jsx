import { createBrowserRouter } from "react-router";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import { Component } from "react";
import Home from "./Components/Pages/Home/Home";
import LawyerDetails from "./Components/Pages/LawyerDetails/LawyerDetails";
import Bookings from "./Components/Pages/Bookings/Bookings";
import Blogs from "./Components/Pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                Component: Home,
                
            },

            {
                path: "/lawyerDetails/:paraId",
                Component: LawyerDetails,
                loader: async()=> fetch("/lawyerData.json")
            },
            {
                path: "/my-booking",
                Component: Bookings,
                loader: async()=> fetch("/lawyerData.json")

            },

            {
                path:"/blogs",
                Component: Blogs,
                loader: async()=> fetch("/blogData.json")
            }
        ]

    }
]);