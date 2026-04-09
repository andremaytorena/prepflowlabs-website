/** @format */
import { useState } from "react";
import internalTicketsPic from "../../../../assets/prepcenter/ticketing/internal_tickets.png?w=640;960;1280;1536;1920;2560&format=avif;webp;png&quality=80&as=picture";
import clientTicketsPic from "../../../../assets/prepcenter/ticketing/client_tickets.png?w=640;960;1280;1536;1920;2560&format=avif;webp;png&quality=80&as=picture";
import communicationsPic from "../../../../assets/prepcenter/ticketing/communications.png?w=640;960;1280;1536;1920;2560&format=avif;webp;png&quality=80&as=picture";

type PictureData = {
    sources: { type: string; srcset: string }[];
    img: { src: string; width: number; height: number };
};

const sections: {
    label: string;
    description: string;
    image?: PictureData;
}[] = [
    {
        label: "Client Tickets",
        description:
            "Clients can submit tickets for order inquiries, shipment changes, or special requests directly through their portal.",
        image: clientTicketsPic as PictureData,
    },
    {
        label: "Internal Tickets",
        description:
            "Log warehouse issues and assign them to team members for fast resolution.",
        image: internalTicketsPic as PictureData,
    },
    {
        label: "Communications",
        description:
            "Send mass announcements to clients or team members and keep threaded conversations on every ticket.",
        image: communicationsPic as PictureData,
    },
];

export default function TicketingFlow() {
    const [selectedSection, setSelectedSection] = useState(sections[0].label);

    return (
        <div className="flex mt-20 flex-col mx-auto items-center h-full relative overflow-x-auto ">
            <h1 className="font-bold text-3xl sm:text-3xl/tight max-w-xl text-center sm:mx-0 mx-4">
                Resolve Issues Faster with Built-In Ticketing
            </h1>
            <p className="mt-4 text-slate-700 font-medium text-center sm:mx-0 mx-4">
                Manage internal warehouse tickets and client requests through
                one unified system with full communication history.
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
                        <div className="grid [&>*]:[grid-area:1/1]">
                            {sections.map((section) =>
                                section.image ? (
                                    <picture
                                        key={section.label}
                                        className={`transition-opacity duration-200 ease-in-out ${
                                            section.label === selectedSection
                                                ? "opacity-100"
                                                : "opacity-0 pointer-events-none"
                                        }`}
                                    >
                                        {Array.isArray(
                                            (section.image as any)?.sources,
                                        )
                                            ? (
                                                  section.image as any
                                              ).sources.map(
                                                  (s: any, i: number) => (
                                                      <source
                                                          key={i}
                                                          type={s.type}
                                                          srcSet={s.srcset}
                                                          sizes="(min-width:1024px) 960px, 100vw"
                                                      />
                                                  ),
                                              )
                                            : null}

                                        <img
                                            src={
                                                (section.image as any)?.img
                                                    ?.src ||
                                                (section.image as any) ||
                                                ""
                                            }
                                            alt={`Preview — ${section.label}`}
                                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 max-w-full h-auto"
                                            loading="eager"
                                            decoding="async"
                                        />
                                    </picture>
                                ) : (
                                    <div
                                        key={section.label}
                                        className={`transition-opacity duration-200 ease-in-out mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 bg-white flex items-center justify-center h-[300px] sm:h-[500px] lg:h-[600px] ${
                                            section.label === selectedSection
                                                ? "opacity-100"
                                                : "opacity-0 pointer-events-none"
                                        }`}
                                    >
                                        <div className="text-center px-8">
                                            <p className="text-slate-400 font-semibold text-lg">
                                                {section.label}
                                            </p>
                                            <p className="text-slate-300 text-sm mt-2">
                                                Screenshot placeholder
                                            </p>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                    <div aria-hidden="true" className="relative">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#DDE1E5] pt-[7%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
