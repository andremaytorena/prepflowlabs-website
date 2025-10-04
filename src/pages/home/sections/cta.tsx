/** @format */

import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io"; /** @format */

export default function CTA() {
    return (
        <div className=" py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-[#F5FAFF] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                        Replace Boxem & InventoryLab. Save More, Do More.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-slate-700">
                        Simplify your workflow, cut costs, and keep growing —
                        without overpriced software slowing you down.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 w-fit mx-auto">
                        <a
                            href="https://app.prepflowlabs.com/sign-up"
                            className="group text-sm relative inline-flex items-center justify-center gap-x-2 px-6 py-3 font-medium text-white rounded-xl
                                                     bg-[linear-gradient(60deg,#C33764,#302B63)]
                                                     cursor-pointer hover:opacity-90 transition-all duration-300 overflow-hidden w-full mt-4"
                        >
                            <p>Get Started</p>

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
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    >
                        <circle
                            r={512}
                            cx={512}
                            cy={512}
                            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                            fillOpacity="0.7"
                        />
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#C33764" />
                                <stop offset={1} stopColor="#C33764" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}
