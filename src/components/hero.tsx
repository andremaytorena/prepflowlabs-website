/** @format */

import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

function Hero() {
    return (
        <div className="flex flex-col mx-auto items-center h-full relative ">
            <h1 className="font-bold text-5xl/tight max-w-xl text-center ">
                Stop Overpaying for Boxem or InventoryLab.
            </h1>
            <p className="mt-4 text-slate-700 font-medium">
                Auto-generate FBA-optimized plans in seconds — no spreadsheets,
                no guesswork.
            </p>

            <div className="mt-10">
                <button
                    className="group relative inline-flex items-center justify-center gap-x-2 px-6 py-3 text-base font-medium text-white rounded-xl
                 bg-[linear-gradient(60deg,#C33764,#302B63)] shadow-[0_0_10px_rgba(195,55,100,0.6)] 
                 cursor-pointer hover:opacity-90 transition-all duration-300 overflow-hidden"
                >
                    <p>Get Started — It's Free</p>

                    {/* Chevron Right (default) */}
                    <FaChevronRight
                        size={16}
                        className="transition-all duration-300 opacity-100 group-hover:opacity-0"
                    />

                    {/* Arrow Right (on hover) */}
                    <IoMdArrowRoundForward
                        size={20}
                        className="absolute right-6 transition-all duration-300 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1"
                    />
                </button>
            </div>

            <div className="mt-16 flex">
                <div className="flex-none sm:max-w-5xl lg:max-w-none">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img
                            alt="App screenshot"
                            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                            width={2432}
                            height={1442}
                            className="w-[76rem] rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
