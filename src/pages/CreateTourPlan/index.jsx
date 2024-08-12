import React from "react";
import Button from "../../components/Button";

const CreateTourplan = () => {
    return (
        <div>
            <div className="flex justify-between items-center ">
                <h1 className="text-2xl font-bold ">Current Plans</h1>
                <Button>Add Plan</Button>
            </div>

            <div className="mt-5 space-y-5">
                <div className="flex flex-col md:flex-row justify-between items-center border border-slate-300 p-4 px-5 rounded-xl max-w-[1200px] mx-auto">
                    <div className="space-y-2 md:w-1/2">
                        <h2 className="text-stone-500 text-lg md:text-xl">
                            Category Name
                        </h2>
                        <h1 className="font-bold text-xl md:text-2xl">
                            Tour Title
                        </h1>
                        <p className="text-stone-500 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam
                        </p>
                        <button className="p-2 bg-stone-200 hover:bg-stone-300 duration-200 delay-50 rounded-xl mt-2">
                            View details
                        </button>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 h-[250px] w-full overflow-hidden rounded-xl">
                        <img
                            src="https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                            alt="Tour Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border border-slate-300 p-4 px-5 rounded-xl max-w-[1200px] mx-auto">
                    <div className="space-y-2 md:w-1/2">
                        <h2 className="text-stone-500 text-lg md:text-xl">
                            Category Name
                        </h2>
                        <h1 className="font-bold text-xl md:text-2xl">
                            Tour Title
                        </h1>
                        <p className="text-stone-500 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam
                        </p>
                        <button className="p-2 bg-stone-200 hover:bg-stone-300 duration-200 delay-50 rounded-xl mt-2">
                            View details
                        </button>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 h-[250px] w-full overflow-hidden rounded-xl">
                        <img
                            src="https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                            alt="Tour Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border border-slate-300 p-4 px-5 rounded-xl max-w-[1200px] mx-auto">
                    <div className="space-y-2 md:w-1/2">
                        <h2 className="text-stone-500 text-lg md:text-xl">
                            Category Name
                        </h2>
                        <h1 className="font-bold text-xl md:text-2xl">
                            Tour Title
                        </h1>
                        <p className="text-stone-500 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam
                        </p>
                        <button className="p-2 bg-stone-200 hover:bg-stone-300 duration-200 delay-50 rounded-xl mt-2">
                            View details
                        </button>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 h-[250px] w-full overflow-hidden rounded-xl">
                        <img
                            src="https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                            alt="Tour Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border border-slate-300 p-4 px-5 rounded-xl max-w-[1200px] mx-auto">
                    <div className="space-y-2 md:w-1/2">
                        <h2 className="text-stone-500 text-lg md:text-xl">
                            Category Name
                        </h2>
                        <h1 className="font-bold text-xl md:text-2xl">
                            Tour Title
                        </h1>
                        <p className="text-stone-500 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam
                        </p>
                        <button className="p-2 bg-stone-200 hover:bg-stone-300 duration-200 delay-50 rounded-xl mt-2">
                            View details
                        </button>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 h-[250px] w-full overflow-hidden rounded-xl">
                        <img
                            src="https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.webp"
                            alt="Tour Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTourplan;
