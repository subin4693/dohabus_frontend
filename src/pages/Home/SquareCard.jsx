import React from "react";
import { Link } from "react-router-dom";

const SquareCard = ({ title, description, image, id }) => {
    return (
        <Link
            to={`/tours/${id}`}
            className="relative rounded-lg overflow-hidden h-[330px] w-[300px] shadow-xl bg-cover bg-center"
        >
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
        </Link>
    );
};

export default SquareCard;
