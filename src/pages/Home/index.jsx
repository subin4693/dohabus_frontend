import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="text-subtitle font-bold ">Tour Category</h1>
            <p className="text-small text-red">Manage your tour categorys</p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 flex-wrap">
                <Link
                    to="/:id"
                    className="rounded-lg overflow-hidden  h-fit shadow-xl "
                >
                    <div className="  h-[250px] overflow-hidden ">
                        <img
                            src="https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="px-2 py-1">
                        <h2>Beach Destinations</h2>
                        <p className="text-green">
                            Explore teh best beaches around the world
                        </p>
                    </div>
                </Link>
                <div className="rounded-lg overflow-hidden  h-fit shadow-xl ">
                    <div className="  h-[250px] overflow-hidden ">
                        <img
                            src="https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="px-2 py-1">
                        <h2>Beach Destinations</h2>
                        <p className="text-green">
                            Explore teh best beaches around the world
                        </p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden  h-fit shadow-xl ">
                    <div className="  h-[250px] overflow-hidden ">
                        <img
                            src="https://c.regencyholidays.com/blog/blog/content/images/2021/08/Banana-Islands.webp"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="px-2 py-1">
                        <h2>Beach Destinations</h2>
                        <p className="text-green">
                            Explore teh best beaches around the world
                        </p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden  h-fit shadow-xl ">
                    <div className="  h-[250px] overflow-hidden ">
                        <img
                            src="https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="px-2 py-1">
                        <h2>Beach Destinations</h2>
                        <p className="text-green">
                            Explore teh best beaches around the world
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
