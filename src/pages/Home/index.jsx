import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Card from "./Card";
import Banner from "../../components/Banner";
import SquareCard from "./SquareCard";
import map from "../../assets/map.png";
const Home = () => {
    return (
        <>
            <Banner />
            <div className="mt-36 flex items-center flex-col justify-center">
                <h1 className="text-subtitle font-bold text-center ">
                    Popular Routes
                </h1>
                <p className="text-center max-w-md">
                    Discover the heritage side of Qatar with our North of Qatar
                    Tour (Approx 40km North of Doha). You will be visiting Umm
                    Salal Fortress, Al Zubarah, Al Ruwais ending the tour with
                    Al Khor Museum.
                </p>
                {/* <img src={map} /> */}
                <div className=" px-2 lg:px-[150px] py-4 mt-10 flex justify-center items-center gap-10 flex-wrap">
                    <SquareCard
                        id="101"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <SquareCard
                        id="101"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <SquareCard
                        id="101"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <SquareCard
                        id="101"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                </div>
            </div>
            <div className="px-2 lg:px-[150px] py-4 flex flex-col justify-center items-center">
                <h1 className="text-subtitle font-bold text-center mb-5">
                    Hop on - Hop of Map
                </h1>
                <img src={map} />
            </div>
            <div className="px-2 lg:px-[150px] py-4">
                <h1 className="text-subtitle font-bold text-center">
                    Tour Category
                </h1>
                <p className="text-small text-red text-center">
                    Select your tour categorys
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 flex-wrap">
                    <Card
                        id="101"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <Card
                        id="102"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Banana-Islands.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <Card
                        id="103"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <Card
                        id="104"
                        title="Beach Destinations"
                        image={
                            "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                </div>
                <h1 className="text-subtitle mt-10 font-bold text-center ">
                    Popular plans
                </h1>
                <p className="text-small text-red text-center">
                    Select your tour plans
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 flex-wrap">
                    <Card
                        id="101"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <Card
                        id="102"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Banana-Islands.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <Card
                        id="103"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <Card
                        id="104"
                        title="Beach Destinations"
                        image={
                            "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />{" "}
                    <Card
                        id="103"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <Card
                        id="104"
                        title="Beach Destinations"
                        image={
                            "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />{" "}
                    <Card
                        id="103"
                        title="Beach Destinations"
                        image={
                            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                    <Card
                        id="104"
                        title="Beach Destinations"
                        image={
                            "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg"
                        }
                        description={
                            "Explore teh best beaches around the world"
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
