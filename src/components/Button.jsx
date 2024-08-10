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
            style = "bg-primary hover:bg-[#e6a600]";
            break;
        case "secondary":
            style = "bg-primary-2 hover:bg-[#e0b792]";
            break;
        case "outline":
            style =
                "bg-secondary-2 border-primary-2 border border-2 hover:bg-gray-100";
            break;
    }
    return (
        <div
            onClick={onClick}
            className={`flex justify-center items-center w-fit px-5 py-2 rounded-lg duration-200 cursor-pointer ${
                style + " " + className
            }`}
        >
            {children}
        </div>
    );
};

export default Button;
