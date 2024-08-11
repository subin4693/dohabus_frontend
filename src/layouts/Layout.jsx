import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="px-2 lg:px-[150px] py-4">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
