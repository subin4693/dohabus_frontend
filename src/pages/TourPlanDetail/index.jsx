import React, { useState } from "react";
import Button from "../../components/Button";
import BookingModal from "./BookingModal";

const TourPlanDetail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(
        "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
    );
    const [formData, setFormData] = useState({
        category: "Sightseeing",
        coverImage:
            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
        title: "Doha City Tour",
        description:
            "Explore the vibrant city of Doha with our comprehensive city tour. Visit key landmarks and enjoy guided tours of the most famous attractions.",
        date: [
            "AM Tour – 9.00 AM to 5.00 PM",
            "PM Tour – 12.00 PM to 08.00 PM",
        ],
        includes: ["Transport", "Guide", "Lunch", "Entrance Fees"],
        importantInformations: [
            "Wear comfortable walking shoes.",
            "Bring sunscreen and a hat.",
            "Check the weather forecast before the tour.",
        ],
        notes: [
            "Meeting point is at the main square.",
            "Please arrive 15 minutes early.",
        ],
        gallerys: [
            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
            "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg",
            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
            "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg",
            "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp",
        ],
        price: "150 ",
    });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitBooking = (bookingData) => {
        console.log("Booking Data:", bookingData);
        // Here you can handle the form submission, e.g., sending bookingData to your backend
        handleCloseModal(); // Close the modal after submission
    };

    return (
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-[150px] mt-36 py-4">
            <div className="flex-1 mb-4 lg:mb-0 w-full lg:w-1/2 ">
                <div className="relative group w-full h-[500px] overflow-hidden mb-4 rounded-3xl">
                    <img
                        src={selectedImage}
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                        alt="Main"
                    />
                    <div className="absolute inset-0 flex justify-center items-center text-lg font-bold text-center bg-slate-900 bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white"></div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {formData.gallerys.map((image, index) => (
                        <div
                            key={index}
                            className="rounded-2xl w-[100px] h-[100px] cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image}
                                className="object-cover w-full h-full"
                                alt={`Gallery ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 lg:pl-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                    {formData.title}
                </h1>
                <p className="text-base md:text-lg mb-4">
                    {formData.description}
                </p>
                <p className="text-lg md:text-xl font-semibold mb-4">
                    Price: {formData.price} Qat
                </p>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Sessions:</h2>
                    <ul className="list-disc pl-5">
                        {formData.date.map((date, index) => (
                            <li key={index} className="text-base">
                                {date}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Includes:</h2>
                    <ul className="list-disc pl-5">
                        {formData.includes.map((item, index) => (
                            <li key={index} className="text-base">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Important Information:
                    </h2>
                    <ul className="list-disc pl-5">
                        {formData.importantInformations.map((info, index) => (
                            <li key={index} className="text-base">
                                {info}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Notes:</h2>
                    <ul className="list-disc pl-5">
                        {formData.notes.map((note, index) => (
                            <li key={index} className="text-base">
                                {note}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-5 items-center justify-end">
                    <Button onClick={handleOpenModal}>Book Now</Button>
                    <button
                        // onClick={onClick}
                        className="relative overflow-hidden flex justify-center items-center group w-fit px-5 py-2 rounded-lg duration-200 cursor-pointer border border-gray"
                    >
                        <div className="absolute inset-0 bg-black duration-200 w-0 group-hover:w-full z-10" />
                        <div className="relative z-20 flex items-center justify-center group-hover:text-white duration-200">
                            Add to Cart
                        </div>
                    </button>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmitBooking}
                sessions={formData.date}
                price={formData.price}
            />
        </div>
    );
};

export default TourPlanDetail;
