import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, id }) => {
    return (
        <Link
            to={`/tours/${id}`}
            className="rounded-lg overflow-hidden h-fit shadow-xl "
        >
            <div className="  h-[250px] overflow-hidden ">
                <img
                    src={image}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="px-2 py-1">
                <h2>{title}</h2>
                <p className="text-green line-clamp-2">lorem{description}</p>
            </div>
        </Link>
    );
};

export default Card;
