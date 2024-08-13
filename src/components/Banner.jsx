import React, { useState } from "react";
import banner from "../assets/footer-1.png";
import { Link } from "react-router-dom";

const Banner = () => {
    const [cities, setCities] = useState([
        { from: "Marriott Hotel", to: "Qatar National Museum", price: 180 },
        { from: "Souq Waqif", to: "The Pearl-Qatar", price: 130 },
        { from: "Katara Cultural Village", to: "Doha Corniche", price: 10 },
    ]);
    const [selectedCity, setSelectedCity] = useState(cities[0]);

    // Handle city selection
    const handleCityChange = (e) => {
        const selectedIndex = e.target.selectedIndex;
        setSelectedCity(cities[selectedIndex]);
    };
    return (
        <div
            className="h-[60vh] w-full bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <h1 className="text-[3rem] text-white absolute left-[20%]">
                Hey guy! Where are
                <br />
                <span className="font-bold">Riding </span>to
            </h1>
            <div className="absolute -bottom-[350px] md:-bottom-[250px] bg- shadow-xl rounded-[20px]   md:w-[70%] relative">
                <div className="flex overflow-hidden">
                    <div className="bg-white px-10 py-5 rounded-tl-[20px]">
                        Hop on Hop off Bus Tour
                    </div>
                    <div className="bg-black text-white px-10 py-5">
                        Half Day City Tour
                    </div>
                    <div className="bg-black text-white px-10 py-5 rounded-tr-[20px]">
                        Pandromic City Tour
                    </div>
                </div>

                <div className="bg-white rounded-b-[20px] rounded-r-[20px] h-[220px] px-10 rounded-tr-[20px] overflow-hidden">
                    <div className="flex gap-20 pt-5">
                        <h2 className="font-xl font-bold">Round Trip</h2>
                        {/* <h2 className="font-xl font-bold">Toursts</h2>
                        <h2 className="font-xl font-bold">Tickets</h2> */}
                        <select
                            name="cities"
                            className="h-[30px] pl-4 rounded-lg"
                            onChange={handleCityChange}
                        >
                            {cities.map((city, index) => (
                                <option key={index} value={index}>
                                    {city.from} to {city.to}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-10 mt-5">
                        <div className="border border-stone-300 rounded-md p-2 h-[120px] flex flex-col justify-around">
                            <span className="text-sm">From</span>{" "}
                            <span className="font-bold text-2xl">
                                {selectedCity.from}
                            </span>
                        </div>
                        <div className="border border-stone-300 rounded-md p-2 h-[120px] flex flex-col justify-around">
                            <span className="text-sm">To</span>{" "}
                            <span className="font-bold text-2xl">
                                {selectedCity.to}
                            </span>
                        </div>
                        <div className="border border-stone-300 rounded-md p-2 h-[120px] flex flex-col justify-around">
                            <span className="text-sm">Price starts from</span>{" "}
                            <span className="font-bold text-2xl">
                                {" "}
                                {selectedCity.price} QR
                            </span>
                        </div>
                    </div>
                    <div className="absolute bottom-[-20px] right-0 -translate-x-[30%] ">
                        <Link
                            to="/tours/101"
                            className=" text-white px-8 py-2 rounded-xl bg-black"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

//remove tourst tickets
//categry name
//tour date single product
//dashboard pi chart pv
