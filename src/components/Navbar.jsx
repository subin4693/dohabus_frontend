import React from "react";
import Dohabuslogo from "../assets/DOHA_Bus_Logo_YB_large-removebg-preview.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="bg-yellow px-2 lg:px-[150px]  flex justify-between items-center">
            <div className="flex gap-5 items-center justify-center">
                {" "}
                <img src={Dohabuslogo} className="w-[8rem]" />
                <div className="bg-secondary rounded-lg  overflow-hidden flex justify-center items-center border-black border px-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>

                    <input
                        type="text"
                        className="p-2 bg-inherit border-none outline-none"
                        placeholder="search"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center gap-5">
                    <Link
                        className="hover:text-white duration-200 delay-50 rounded-lg hover:bg-black px-2 py-1 "
                        to="/"
                    >
                        Admin
                    </Link>
                    <Link
                        className="hover:text-white duration-200 delay-50 rounded-lg hover:bg-black px-2 py-1 "
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="hover:text-white duration-200 delay-50 rounded-lg hover:bg-black px-2 py-1 "
                        to="/"
                    >
                        Categorys
                    </Link>
                </div>
                <button className="hover:bg-black delay-50 hover:text-white duration-100 p-2 rounded-lg flex items-center justify-center">
                    <FaCartShopping />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
