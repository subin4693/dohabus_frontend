import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Card from "./Card";
import Banner from "../../components/Banner";
import SquareCard from "./SquareCard";
import map from "../../assets/map.png";

import sea from "../../assets/seaTour.jpg";
import desert from "../../assets/desertTour.jpg";
import tour from "../../assets/culturalTour.jpg";
import city from "../../assets/cityTour.jpg";

const Home = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const data = [
        {
            id: "101",
            image: sea,
            title: "Beach Destination",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in sed soluta culpa quod labore cumque, nihil ducimus similique maiores, pariatur dignissimos iure eveniet commodi beatae earum temporibus eligendi libero.",
        },

        {
            id: "101",
            image: tour,
            title: "Cultural Destination",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in sed soluta culpa quod labore cumque, nihil ducimus similique maiores, pariatur dignissimos iure eveniet commodi beatae earum temporibus eligendi libero.",
        },
        {
            id: "101",
            image: city,
            title: "City Destination",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in sed soluta culpa quod labore cumque, nihil ducimus similique maiores, pariatur dignissimos iure eveniet commodi beatae earum temporibus eligendi libero.",
        },
        {
            id: "101",
            image: desert,
            title: "Desert Destination",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in sed soluta culpa quod labore cumque, nihil ducimus similique maiores, pariatur dignissimos iure eveniet commodi beatae earum temporibus eligendi libero.",
        },
    ];
    useEffect(() => {
        new SmoothScroll('a[href*="#"]', {
            speed: 800,
            speedAsDuration: true,
        });
    }, []);
    return (
        <div id="homesection" className="homesection">
            {" "}
            <Banner />
            <div className="mt-[17rem] md:mt-[10%] flex items-center flex-col justify-center">
                <h1 className="text-subtitle font-bold text-center">
                    Popular Routes
                </h1>

                <p className="text-center max-w-md">
                    Discover the heritage side of Qatar with our North of Qatar
                    Tour (Approx 40km North of Doha). You will be visiting Umm
                    Salal Fortress, Al Zubarah, Al Ruwais ending the tour with
                    Al Khor Museum.{" "}
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
                    Hop on - Hop off Map
                </h1>
                <div className="min-h-[300px] md:h-[70vh]">
                    <img src={map} className="w-full h-full object-cover" />
                </div>
            </div>
            <div
                id="categorySection"
                className=" category-section px-2 lg:px-[150px] py-4"
            >
                <h1 className="text-subtitle font-bold text-center">
                    Tour Category
                </h1>
                <p className="text-small text-red text-center">
                    Select your tour categorys
                </p>

                <div>
                    <div className="flex justify-center items-center gap-5 mt-10">
                        {data.map((category, index) => (
                            <div
                                className={`h-[300px] md:h-[60vh]  rounded-lg overflow-hidden relative group mb-3 duration-[.7s]  ${
                                    index == categoryIndex
                                        ? "w-full"
                                        : "w-[50px]"
                                }`}
                                onClick={() => setCategoryIndex(index)}
                            >
                                <img
                                    src={category.image}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex justify-center items-center text-lg font-bold  text-center bg-slate-900 bg-opacity-50    opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white">
                                    {category.title}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        {data.map((category, index) => (
                            <div
                                key={index}
                                className="h-[100px] w-[100px] rounded-lg overflow-hidden relative group cursor-pointer"
                                onMouseOver={() => setCategoryIndex(index)}
                            >
                                <img
                                    src={category.image}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    alt={category.title}
                                />
                                <div className="absolute inset-0 flex justify-center items-center text-sm text-center bg-slate-500 bg-opacity-50 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                    {category.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*   <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 flex-wrap">
                   
                  
                
                   
                   
                   
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
                </div>*/}
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
        </div>
    );
};

export default Home;
