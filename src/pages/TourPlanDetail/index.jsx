import React, { useState } from "react";
import Button from "../../components/Button";

const TourPlanDetail = () => {
    const images = [
        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
        "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg",
        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
        "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg",
        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-[150px] mt-36 py-4">
            {/* Image Gallery Section */}
            <div className="flex-1 mb-4 lg:mb-0">
                <div className="relative w-full h-[500px] overflow-hidden mb-4">
                    <img
                        src={images[currentImageIndex]}
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
                        alt="Main"
                    />
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                    >
                        &gt;
                    </button>
                </div>
                <div className="flex gap-2 overflow-x-auto">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-[100px] h-[100px] cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
                            onClick={() => setCurrentImageIndex(index)}
                        >
                            <img
                                src={image}
                                className="object-cover w-full h-full"
                                alt={`Thumbnail ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Details Section */}
            <div className="flex-1 lg:pl-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                    Tour Title
                </h1>
                <p className="text-base md:text-lg mb-4">
                    This is a brief description of the tour. It provides
                    information about what to expect and what is included.
                </p>
                <p className="text-lg md:text-xl font-semibold mb-4">
                    Price: $100
                </p>
                <div className="flex gap-5 items-center justify-end">
                    <Button>Book Now</Button>
                    <button
                        // onClick={onClick}
                        className={`relative overflow-hidden flex justify-center items-center group w-fit px-5 py-2 rounded-lg duration-200 cursor-pointer border border-gray`}
                    >
                        <div className="absolute inset-0 bg-black duration-200 w-0 group-hover:w-full z-10" />
                        <div className="relative z-20 flex items-center justify-center group-hover:text-white duration-200 ">
                            Add to Cart
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourPlanDetail;
