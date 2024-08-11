import React from "react";

const Button = ({
    variant = "primary",
    className,
    children,
    onClick = () => {},
}) => {
    let style = "";
    switch (variant) {
        case "primary":
            style = "bg-yellow  ";
            break;
        case "secondary":
            style = "bg-green h ";
            break;
        case "outline":
            style = " border-yellow border border-2 hover:bg-gray-100";
            break;
    }
    return (
        <div
            onClick={onClick}
            className={`flex relative overflow-hidden justify-center items-center group w-fit px-5 py-2 rounded-lg duration-200 cursor-pointer ${
                style + " " + className
            }`}
        >
            <div className="absolute inset-0 bg-blue duration-200 w-0 group-hover:w-full z-10" />
            <div className="relative z-20 flex items-center justify-center group-hover:text-white duration-200">
                {children}
            </div>
        </div>
    );
};

export default Button;
