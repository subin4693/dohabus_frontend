import React from "react";

const Button = ({
    variant = "primary",
    color = "yellow", // Default color
    className,
    children,
    onClick = () => {},
}) => {
    let style = "";

    switch (color) {
        case "yellow":
            style = "bg-yellow text-black";

            break;
        case "black":
            style = "bg-black text-white";

            break;
        case "orange":
            style = "bg-orange text-black";

            break;
        case "blue":
            style = "bg-blue text-black";

            break;
        case "gray":
            style = "bg-gray text-black";

            break;
        case "red":
            style = "bg-red text-black";

            break;
        case "green":
            style = "bg-green text-black";

            break;
        case "purple":
            style = "bg-purple text-black";

            break;
        default:
            style = "bg-gray text-black";
    }

    return (
        <button
            onClick={onClick}
            className={`relative overflow-hidden flex justify-center items-center group w-fit px-5 py-2 rounded-lg duration-200 cursor-pointer ${style}  ${className}`}
        >
            <div className="absolute inset-0 bg-black duration-200 w-0 group-hover:w-full z-10" />
            <div className="relative z-20 flex items-center justify-center group-hover:text-white duration-200 ">
                {children}
            </div>
        </button>
    );
};

export default Button;
