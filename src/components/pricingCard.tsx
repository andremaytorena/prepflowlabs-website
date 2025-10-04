/** @format */

import { FaCheck } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function PricingCard({
    tier,
}: {
    tier: {
        name: string;
        id: string;
        href: string;
        priceMonthly: string;
        description: string;
        features: string[];
    };
}) {
    return (
        <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-[#F5FAFF] p-8 shadow-xl outline outline-gray-900/10 sm:p-10"
        >
            <div>
                <h3
                    id={tier.id}
                    className="text-base/7 font-semibold text-accent"
                >
                    {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-x-2">
                    <span className="text-5xl font-semibold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                    </span>
                    <span className="text-base/7 font-semibold text-gray-600">
                        /month
                    </span>
                </div>
                <p className="mt-6 text-base/7 text-gray-600">
                    {tier.description}
                </p>

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
                <ul
                    role="list"
                    className="mt-10 space-y-4 text-sm/6 text-gray-600"
                >
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                            <FaCheck
                                aria-hidden="true"
                                className="h-6 w-5 flex-none text-accent"
                            />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
