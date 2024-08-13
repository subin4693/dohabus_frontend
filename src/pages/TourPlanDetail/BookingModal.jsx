import React, { useState } from "react";
import Button from "../../components/Button";

const BookingModal = ({ isOpen, onClose, onSubmit, price, sessions }) => {
    const [bookingData, setBookingData] = useState({
        session: sessions[0] || "", // Default to the first session
        quantity: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData({
            ...bookingData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(bookingData);
    };

    const totalPrice = price * bookingData.quantity;

    return isOpen ? (
        <div className="fixed inset-0 bg-white bg-opacity-50 z-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Book Your Tour</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="session"
                            className="block text-sm font-medium mb-2"
                        >
                            Session
                        </label>
                        <select
                            id="session"
                            name="session"
                            value={bookingData.session}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        >
                            {sessions.map((session, index) => (
                                <option key={index} value={session}>
                                    {session}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium mb-2"
                        >
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={bookingData.quantity}
                            onChange={handleChange}
                            min="1"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold">
                            Total Price: {totalPrice} Qat
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Button type="submit">Submit</Button>
                        <Button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};

export default BookingModal;
