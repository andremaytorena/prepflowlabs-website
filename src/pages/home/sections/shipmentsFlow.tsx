/** @format */
import { useState } from "react";
import { RiAiGenerate } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";

const sections = [
    {
        label: "Add Items and Pricing",
        description:
            "Generate listings or use existing ones to start adding items onto the shipment.",
        image: "/listit.png",
        icon: RiAiGenerate,
    },
    {
        label: "Box & Assign Items",
        description:
            "Assing each item into boxes, easily create case-packed boxes, and print out FNSKU's.",
        image: "/boxit.png",
        icon: FaRegCheckCircle,
    },
    {
        label: "Confirm Placement Option & Shipments",
        description:
            "Select the best placement option by easily seeing all of the transportation options at once.",
        image: "/shipit.png",
        icon: HiOutlineTruck,
    },
    {
        label: "Print Box/Pallet & Shipping Labels",
        description:
            "Download and print your labels and attach them to finalize the shipment.",
        image: "/printit.png",
        icon: HiOutlineTruck,
    },
];

export default function ShipmentsFlow() {
    const [selectedSection, setSelectedSection] = useState(
        "Add Items and Pricing"
    );

    return (
        <div className="flex flex-col mx-auto items-center h-full relative overflow-x-auto ">
            <h1 className="font-bold text-3xl sm:text-3xl/tight max-w-xl text-center sm:mx-0 mx-4">
                Shipment Creation Flow
            </h1>
            <p className="mt-4 text-slate-700 font-medium text-center sm:mx-0 mx-4">
                Auto-generate FBA-optimized plans in seconds — no spreadsheets,
                no guesswork.
            </p>

            <div className="flex flex-row px-4 no-scrollbar items-center overflow-x-scroll  w-full sm:max-w-6xl gap-x-6 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {sections.map((section) => (
                    <div
                        onClick={() => setSelectedSection(section.label)}
                        className={`${
                            section.label === selectedSection
                                ? "border-accent bg-white"
                                : "border-slate-300 hover:border-slate-400 bg-[#DDE1E5]"
                        } cursor-pointer border basis-72 min-w-72 rounded-lg shadow-sm transition-all px-4 py-4 h-36 flex flex-col space-y-0.5`}
                    >
                        <p className="font-semibold text-base">
                            {section.label}
                        </p>
                        <p className="text-slate-700 font-medium text-sm">
                            {section.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* <div
                className="
          flex gap-4 pt-6
          overflow-x-scroll w-full
          snap-x snap-mandatory
           px-4 sm:mx-0 sm:px-0 ml-10
          sm:flex-wrap sm:justify-center sm:max-w-6xl
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
            >
                {sections.map((section) => (
                    <div
                        key={section.label}
                        onClick={() => setSelectedSection(section.label)}
                        className={`${
                            section.label === selectedSection
                                ? "border-accent bg-white"
                                : "border-slate-300 hover:border-slate-400 bg-[#DDE1E5]"
                        } 
              cursor-pointer border rounded-lg shadow-sm transition-all px-4 py-4
              h-40
              shrink-0 snap-start basis-72
              sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(25%-0.75rem)]
            `}
                    >
                        <p className="font-semibold text-base">
                            {section.label}
                        </p>
                        <p className="text-slate-700 font-medium text-sm">
                            {section.description}
                        </p>
                    </div>
                ))}
            </div> */}

            <div className="relative overflow-hidden pt-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img
                            alt="Prepflowlabs auto optimizer"
                            src={
                                sections.find(
                                    (s) => s.label === selectedSection
                                )?.image
                            }
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
    );
}
