import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, id }) => {
    return (
        <Link
            to={`/tours/${id}`}
            className="relative rounded-lg group flex items-center justify-center overflow-hidden h-[250px] shadow-xl bg-cover bg-center"
            style={{
                backgroundImage: `url("${image}")`,
            }}
        >
            <div className="absolute inset-0 bg-[hsl(210,30%,30%)] bg-opacity-60 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="px-6 py-4 text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-base">{description}</p>
                </div>
            </div>
            <div className="relative z-10 px-4 py-2 text-center text-white transition-opacity duration-300 group-hover:opacity-0">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
        </Link>
    );
};

export default Card;
