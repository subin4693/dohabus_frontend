import React from "react";
import TicketCard from "./TicketCard"; // Adjust the path as needed

const mockBookings = [
    {
        userName: "John Doe",
        email: "john.doe@example.com",
        ticketCount: 2,
        price: 100,
        planImage:
            "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg",
        title: "Amazing Beach Tour",
        description:
            "Enjoy a relaxing day at some of the most beautiful beaches.",
        tourPlaces: ["Beach 1", "Beach 2", "Beach 3"],
    },
    {
        userName: "Jane Smith",
        email: "jane.smith@example.com",
        ticketCount: 1,
        price: 50,
        planImage:
            "https://media.easemytrip.com/media/Blog/International/637597107367841576/637597107367841576IlmTQB.jpg",
        title: "Historical City Tour",
        description: "Explore the rich history and heritage of the city.",
        tourPlaces: ["City Center", "Historical Museum", "Old Town"],
    },
];
const ManageTickets = () => {
    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Manage Ticket Bookings</h1>
            <div className="space-y-4">
                {mockBookings.map((booking, index) => (
                    <TicketCard key={index} booking={booking} />
                ))}
            </div>
        </div>
    );
};

export default ManageTickets;
