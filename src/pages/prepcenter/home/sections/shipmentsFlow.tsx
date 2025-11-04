/** @format */
import { useMemo, useState } from "react";
import { RiAiGenerate } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";
// Import responsive variants for ALL images (adjust widths to your real render size)
import receivePic from "../../../../assets/prepcenter/shipmentsFlow/received_checkin.png?w=640;960;1280;1536;1920;2560&format=avif;webp;png&quality=80&as=picture";
import inventoryPic from "../../../../assets/prepcenter/shipmentsFlow/inventory.jpg?w=640;960;1280;1536;1920;2560&format=avif;webp;png&quality=80&as=picture";
import shipmentPic from "../../../../assets/prepcenter/shipmentsFlow/shipment.jpg?w=640;960;1280;1536;1920;2560&format=avif;webp;png&quality=80&as=picture";
import shipPic from "../../../../assets/prepcenter/shipmentsFlow/fba.png?w=640;960;1280;1536;1920;2560&format=avif;webp;png&quality=80&as=picture";

type PictureData = {
    sources: { type: string; srcset: string }[];
    img: { src: string; width: number; height: number };
};

const sections: {
    label: string;
    description: string;
    image: PictureData;
    icon: React.ComponentType<any>;
}[] = [
    {
        label: "Receive & Check-In",
        description:
            "Log incoming shipments, verify quantities and condition, and update inventory status to kick off your prep workflow.",
        image: receivePic as PictureData,
        icon: RiAiGenerate,
    },
    {
        label: "Label & Store",
        description:
            "Print or apply labels (FNSKUs, internal tags), assign storage locations, and safely house items until they're ready to ship.",
        image: inventoryPic as PictureData,
        icon: FaRegCheckCircle,
    },
    {
        label: "Create Shipment",
        description:
            "Bundle items into shipments, select fulfillment type, and generate all required documents and box/pallet labels.",
        image: shipmentPic as PictureData,
        icon: HiOutlineTruck,
    },
    {
        label: "Ship via Integrations",
        description:
            "Use our platform's integrations to create shipments on behalf of sellers through FBA, WFS, FBM and more.",
        image: shipPic as PictureData,
        icon: HiOutlineTruck,
    },
];

export default function ShipmentsFlow() {
    const [selectedSection, setSelectedSection] = useState(sections[0].label);

    const current = useMemo(
        () => sections.find((s) => s.label === selectedSection)!,
        [selectedSection]
    );

    return (
        <div className="flex mt-20 flex-col mx-auto items-center h-full relative overflow-x-auto ">
            <h1 className="font-bold text-3xl sm:text-3xl/tight max-w-xl text-center sm:mx-0 mx-4">
                Simplify Your Prep Center Operations
            </h1>
            <p className="mt-4 text-slate-700 font-medium text-center sm:mx-0 mx-4">
                Manage, label, and ship with ease — PrepFlow automates your
                workflow from check-in to delivery.
            </p>

            <div className="flex flex-row px-4 pb-1 no-scrollbar items-center overflow-x-scroll w-full sm:max-w-6xl gap-x-6 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {sections.map((section) => (
                    <div
                        key={section.label}
                        onClick={() => setSelectedSection(section.label)}
                        className={`${
                            section.label === selectedSection
                                ? "border-accent bg-white"
                                : "border-slate-300 hover:border-slate-400 bg-[#DDE1E5]/50"
                        } cursor-pointer border sm:w-full sm:min-w-min min-w-72 rounded-lg shadow-sm transition-all px-4 py-4 h-36 flex flex-col space-y-0.5`}
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

            <div className="relative overflow-hidden pt-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        {/* Use the responsive sources + correct sizes */}
                        <picture>
                            {Array.isArray((current.image as any)?.sources)
                                ? (current.image as any).sources.map(
                                      (s: any, i: number) => (
                                          <source
                                              key={i}
                                              type={s.type}
                                              srcSet={s.srcset}
                                              sizes="(min-width:1024px) 960px, 100vw"
                                          />
                                      )
                                  )
                                : null}

                            <img
                                src={
                                    (current.image as any)?.img?.src ||
                                    (current.image as any) ||
                                    ""
                                }
                                alt={`Preview — ${current.label}`}
                                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 max-w-full h-auto"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                            />
                        </picture>
                    </div>
                    <div aria-hidden="true" className="relative">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#DDE1E5] pt-[7%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
