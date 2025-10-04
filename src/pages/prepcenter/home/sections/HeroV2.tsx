/** @format */
import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import KpisOverviewImage from "../../../../assets/prepcenter/kpisOverview.png";

export function HeroV2() {
    return (
        <div className="relative isolate overflow-hidden ">
            <svg
                aria-hidden="true"
                className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect
                    fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                />
            </svg>
            <div className="mx-auto max-w-7xl px-6 pt-10 lg:flex lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
                    <h1 className="font-bold text-4xl sm:text-5xl/tight max-w-xl text-left">
                        Optimize your prep center workflow.
                    </h1>
                    <p className="mx-auto mt-6 text-slate-700 font-medium max-w-2xl text-lg tracking-tight ">
                        Most prep center management systems are slow and
                        inefficient. We make sure to provide smooth and custom
                        solution for your specific needs and branding.
                    </p>
                    <div className="mt-10 flex justify-start gap-x-6">
                        <a
                            href="/prepcenter/register"
                            className="group text-sm relative inline-flex items-center justify-center gap-x-2 px-6 py-2 font-medium text-white rounded-xl
                                          bg-[linear-gradient(60deg,#C33764,#302B63)]
                                          cursor-pointer hover:opacity-90 transition-all duration-300 overflow-hidden"
                        >
                            <p>Start your free trial</p>

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
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img
                                src={KpisOverviewImage}
                                alt="PrepFlow dashboard showing inbound and outbound shipment stats"
                                width={2432}
                                height={1442}
                                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
