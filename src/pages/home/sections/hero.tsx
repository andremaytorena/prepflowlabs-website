/** @format */

import { createElement, useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiAiGenerate } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";

const sections = [
    { label: "Generate plans", image: "/optimize1.png", icon: RiAiGenerate },
    { label: "Confirm plan", image: "/optimize2.png", icon: FaRegCheckCircle },
    { label: "Box plan", image: "/optimize3.png", icon: HiOutlineTruck },
];

type Section = { label: string; icon: any };

export function SectionPicker({
    sections,
    selectedSection,
    setSelectedSection,
}: {
    sections: Section[];
    selectedSection: string;
    setSelectedSection: (label: string) => void;
}) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [rect, setRect] = useState<{
        top: number;
        left: number;
        width: number;
        height: number;
    }>({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });

    // Measure selected item whenever selection or layout changes
    useEffect(() => {
        const measure = () => {
            const container = containerRef.current;
            const idx = sections.findIndex((s) => s.label === selectedSection);
            const el = itemRefs.current[idx];
            if (!container || !el) return;
            const c = container.getBoundingClientRect();
            const r = el.getBoundingClientRect();
            setRect({
                top: r.top - c.top + container.scrollTop,
                left: r.left - c.left + container.scrollLeft,
                width: r.width,
                height: r.height,
            });
        };
        measure();
        // Recalculate on resize and orientation change
        window.addEventListener("resize", measure);
        window.addEventListener("orientationchange", measure);
        // If fonts/icons load later and change sizes
        const ro = new ResizeObserver(measure);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => {
            window.removeEventListener("resize", measure);
            window.removeEventListener("orientationchange", measure);
            ro.disconnect();
        };
    }, [sections, selectedSection]);

    return (
        <div
            ref={containerRef}
            className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-10 mt-10"
        >
            {/* highlight background */}
            <div
                className="absolute bg-white rounded-lg transition-all duration-300 ease-in-out pointer-events-none"
                style={{
                    transform: `translate3d(${rect.left}px, ${rect.top}px, 0)`,
                    width: rect.width,
                    height: rect.height,
                }}
            />

            {sections.map((section, index) => (
                <div
                    key={section.label}
                    ref={(el) => {
                        itemRefs.current[index] = el;
                    }}
                    className={`relative z-10 flex flex-row items-center justify-between cursor-pointer rounded-lg px-5 py-4 w-full sm:w-64`}
                    onClick={() => setSelectedSection(section.label)}
                >
                    <div className="flex flex-row items-center gap-2 font-medium w-64">
                        <div
                            className={`p-1 rounded-lg ${
                                selectedSection === section.label
                                    ? "bg-[linear-gradient(60deg,#C33764,#302B63)] text-white"
                                    : ""
                            }`}
                        >
                            {createElement(section.icon, {
                                className: "w-5 h-5",
                            })}
                        </div>
                        <p>{section.label}</p>
                    </div>
                    <p className="font-medium">0{index + 1}</p>
                </div>
            ))}
        </div>
    );
}

function Hero() {
    const [selectedSection, setSelectedSection] = useState("Generate plans");

    return (
        <div className="flex flex-col mx-auto items-center h-full relative ">
            <h1 className="font-bold text-3xl sm:text-5xl/tight max-w-xl text-center sm:mx-0 mx-4">
                Stop Overpaying for Boxem or InventoryLab.
            </h1>
            <p className="mt-4 text-slate-700 font-medium text-center sm:mx-0 mx-4">
                Auto-generate FBA-optimized plans in seconds — no spreadsheets,
                no guesswork.
            </p>

            <div className="mt-10">
                <a
                    href="https://app.prepflowlabs.com/sign-up"
                    className="group relative inline-flex items-center justify-center gap-x-2 px-6 sm:py-3 py-2.5 text-base font-medium text-white rounded-xl
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
                </a>
            </div>

            <SectionPicker
                sections={sections}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
            />

            <div className="relative overflow-hidden pt-16">
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

export default Hero;
