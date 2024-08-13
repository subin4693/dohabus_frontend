import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import Dohabuslogo from "../assets/DOHA_Bus_Logo_Black_BG-removebg-preview.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Get the current location

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHomePage = location.pathname === "/";
    const navigate = useNavigate();
    return (
        <div
            className={`fixed top-0  left-0 z-50 right-0 px-2 lg:px-[150px] flex justify-between items-center text-white transition-bg duration-300 ${
                scrolled || !isHomePage ? "bg-black" : '""'
            }`}
        >
            <div className="flex gap-5 items-center justify-center">
                <Link to={"/"}>
                    <img src={Dohabuslogo} className="w-[8rem] min-w-[8rem]" />
                </Link>
            </div>
            <div className="flex justify-center items-center gap-5">
                <a
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                    href="#homesection"
                    onClick={() => {
                        navigate("/#homesection");
                    }}
                >
                    {" "}
                    Home
                </a>{" "}
                {/* <Link
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                    to="/"
                >
                    Home
                </Link> */}
                {/* <Link
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                    to="/"
                >
                    Categorys
                </Link> */}
                <a
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                    href="#categorySection"
                    onClick={() => {
                        navigate("/#categorySection");
                    }}
                >
                    {" "}
                    Categories
                </a>{" "}
                <Link
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                    to="/tours"
                >
                    Tours
                </Link>
                <Link
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                    to="/about"
                >
                    About Us
                </Link>
                <Link
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                    to="/contact"
                >
                    Contactus
                </Link>
                <Link
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                    to="/admin"
                >
                    Admin
                </Link>
            </div>
            <div className="flex justify-center items-center gap-5">
                <Link
                    to="/cart"
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-2 "
                >
                    <FaCartShopping />
                </Link>
                <Link
                    to="/signin"
                    className="hover:text-black duration-200 delay-50 rounded-lg hover:bg-yellow px-2 py-1 "
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
