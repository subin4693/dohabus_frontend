import React, { useState } from "react";
import Button from "../../components/Button"; // Assuming you have a Button component

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="px-4 sm:px-6 lg:px-[150px] mt-36 py-6 bg-gray-50 ">
            <div className="rounded-lg shadow-lg p-5">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
                    Contact Us
                </h1>
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Contact Information */}
                    <div className="md:w-1/2 mb-6 md:mb-0 ">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Contact Information
                        </h2>
                        <p className="text-gray-700 mb-4">
                            <strong>Phone:</strong>{" "}
                            <a
                                href="tel:+97444422444"
                                className="text-blue-600"
                            >
                                +974 4442 2444
                            </a>
                        </p>
                        <p className="text-gray-700">
                            <strong>Address:</strong>
                            <br />
                            Doha, Qatar, P.O Box 18885
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full p-3 border border-gray-300 rounded-lg outline-none resize-none h-32"
                                required
                            />
                            <div className="flex justify-end">
                                <Button type="submit">Send</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
