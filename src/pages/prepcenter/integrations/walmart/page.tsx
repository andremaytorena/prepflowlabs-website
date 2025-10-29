/** @format */

import AnimatedBackground from "../../../../components/animatedBackground";
import Footer from "../../../../components/footer";
import Header from "../../../../components/header";
import { MdNewLabel } from "react-icons/md";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";

export const features = [
    {
        name: "Listings.",
        description:
            "Verify and generate new amazon listings and manage any listing errors. Listings are preloaded to speed up the process.",
        icon: FaRegListAlt,
    },
    {
        name: "Packing.",
        description:
            "Pack your items into boxes with ease, with the support of FNSKU labels for prepping the items.",
        icon: FaBoxesStacked,
    },
    {
        name: "Labels.",
        description:
            "Generate transportation options and purchase labels for each box. ",
        icon: MdNewLabel,
    },
];

export default function WalmartIntegrationPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackground />

            <Header />
            <div className="sm:mt-36 mt-32 relative z-10 space-y-10">
                <div className="flex flex-col mx-auto items-center h-full relative ">
                    <h1 className="font-bold text-3xl sm:text-5xl/tight max-w-xl text-center sm:mx-0 mx-4">
                        Walmart Marketplace Integration.
                    </h1>
                    <p className="mt-4 text-slate-700 font-medium text-center sm:mx-0 mx-4">
                        Create and manage WFS shipments directly through our
                        dashboard without the need of external softwares.
                    </p>

                    <img
                        className="max-w-xl mt-20"
                        src="https://d5cg9oo4gwnfj.cloudfront.net/wp-content/uploads/2024/04/25110754/walmart-marketplace-ecommerce-integration-brand-logo.svg"
                    />
                </div>

                <div className=" pt-10 pb-32">
                    <div className="relative overflow-hidden pt-10">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    alt="Prepflowlabs auto optimizer"
                                    src={"/wfs.png"}
                                    width={2432}
                                    height={1442}
                                    className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                            <div aria-hidden="true" className="relative">
                                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#DDE1E5] pt-[7%]" />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
