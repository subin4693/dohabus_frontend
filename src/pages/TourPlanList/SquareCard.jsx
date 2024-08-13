import React from "react";
import { FaHeart, FaHeartCircleBolt } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const SquareCard = ({ title, description, image, id }) => {
    const navigate = useNavigate();
    const handleNavigate = (e) => {
        navigate("/tours/" + id);
    };
    const handleRemoveCart = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={handleNavigate}
            className="relative rounded-lg overflow-hidden h-[330px]   shadow-xl bg-cover bg-center group"
        >
            {" "}
            <button
                onClick={handleRemoveCart}
                className="absolute right-2 top-2 backdrop-blur-lg  p-2 rounded-full opacity-0 group-hover:opacity-90 duration-100 delay-50 backdrop-blur-sm bg-white/30"
            >
                <FaHeart className=" text-red w-6 h-6" />
            </button>
            <div className="  h-[250px] overflow-hidden ">
                <img
                    src={image}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="px-2 py-1">
                <h2>{title}</h2>
                <p className="text-green">{description}</p>
            </div>
        </div>
    );
};

export default SquareCard;
