import React from "react";
import SquareCard from "./SquareCard";

const Cart = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-[150px] mt-36 py-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Cart Plans</h1>
            <h5 className="text-stone-500 mt-2 sm:mt-3 text-sm sm:text-base">
                See how your experiences are doing
            </h5>
            <div className="  py-4 mt-5   gap-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
                <SquareCard
                    id="101"
                    title="Beach Destinations"
                    image={
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                    }
                    description={"Explore teh best beaches around the world"}
                />{" "}
                <SquareCard
                    id="101"
                    title="Beach Destinations"
                    image={
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                    }
                    description={"Explore teh best beaches around the world"}
                />{" "}
                <SquareCard
                    id="101"
                    title="Beach Destinations"
                    image={
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                    }
                    description={"Explore teh best beaches around the world"}
                />{" "}
                <SquareCard
                    id="101"
                    title="Beach Destinations"
                    image={
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                    }
                    description={"Explore teh best beaches around the world"}
                />{" "}
                <SquareCard
                    id="101"
                    title="Beach Destinations"
                    image={
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                    }
                    description={"Explore teh best beaches around the world"}
                />
            </div>
        </div>
    );
};

export default Cart;
