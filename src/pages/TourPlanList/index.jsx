import React from "react";
import Card from "./Card";
import Button from "../../components/Button";

const TourPlans = () => {
    return (
        <div>
            <div
                className="h-[40vh] w-full bg-cover bg-center overflow-hidden rounded-lg relative  "
                style={{
                    backgroundImage: `url(
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                    )`,
                }}
            >
                <div className="bg-black bg-opacity-50 p-4 rounded-lg text-white w-full md:w-1/2 absolute bottom-0">
                    <h3 className="text-xl font-bold">Category:name</h3>
                    <p className="line-clamp-3">
                        Description: Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Reprehenderit corrupti natus
                        excepturi, sunt voluptatem ex omnis temporibus explicabo
                        ad aut eaque qui nihil quae cumque possimus. Temporibus,
                        sed voluptas. Officia!
                    </p>
                </div>
            </div>
            <h1 className="text-subtitle font-bold mt-10">Plans</h1>
            <p className="text-small text-red">Select your tour Plans</p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 flex-wrap">
                <Card
                    id="101"
                    title="Beach Destinations"
                    image={
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                    }
                    description={"Explore teh best beaches around the world"}
                />
                <Card
                    id="102"
                    title="Beach Destinations"
                    image={
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Banana-Islands.webp"
                    }
                    description={"Explore teh best beaches around the world"}
                />
                <Card
                    id="103"
                    title="Beach Destinations"
                    image={
                        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                    }
                    description={"Explore teh best beaches around the world"}
                />
                <Card
                    id="104"
                    title="Beach Destinations"
                    image={
                        "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg"
                    }
                    description={"Explore teh best beaches around the world"}
                />
            </div>
        </div>
    );
};

export default TourPlans;
