import React from "react";
import Dohabuslogo from "../assets/DOHA_Bus_Logo_YB_large-removebg-preview.png";

const Navbar = () => {
    return (
        <div className="bg-yellow px-10  flex justify-between items-center">
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
            <button className="hover:bg-black hover:text-white duration-100 p-2 rounded-lg">
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
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Navbar;
