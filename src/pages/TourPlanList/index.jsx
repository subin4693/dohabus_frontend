import React from "react";
import { IoIosSearch } from "react-icons/io";
import SquareCard from "./SquareCard";

const TourPlans = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-[150px] mt-36 py-4">
            <div className="flex justify-center sm:justify-between items-center">
                <div className="hidden sm:inline">
                    <h1 className="text-2xl sm:text-3xl font-bold">
                        All Plans
                    </h1>
                    <h5 className="text-stone-500 mt-2 sm:mt-3 text-sm sm:text-base">
                        See our new tour plans
                    </h5>
                </div>
                <div className="flex items-center justify-center gap-5 flex-col flex-col-reverse  md:flex-row">
                    <select
                        name="cars"
                        className="  h-[30px]   pl-4 rounded-lg"
                    >
                        {" "}
                        <option disabled>Filter by category</option>
                        <option default value="fsd">
                            All
                        </option>
                        <option value="volvo">Desert tour</option>
                        <option value="saab">Sea tour</option>
                        <option value="mercedes">City tour</option>
                        <option value="audi">Places tourr</option>
                    </select>

                    <div className="rounded-md border-lg border-[1px] overflow-hidden p-1 flex justify-center items-center gap-1">
                        <IoIosSearch className="h-5 w-5" />{" "}
                        <input
                            type="text"
                            placeholder={` Type here to search`}
                            className="bg-transparent border-none outline-none"
                        />
                    </div>
                </div>
            </div>
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

export default TourPlans;
