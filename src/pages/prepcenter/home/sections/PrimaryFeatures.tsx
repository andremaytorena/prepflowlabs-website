/** @format */

"use client";

import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import screenshotDashboard from "../../../../assets/prepcenter/dashboard.png";
import screenshotShipments from "../../../../assets/prepcenter/shipments.png";
import screenshotWorkflow from "../../../../assets/prepcenter/worklist.png";
import screenshotEmployees from "../../../../assets/prepcenter/employees.png";
import { Container } from "./container";

const features = [
    {
        title: "Statistics",
        description:
            "Easily view your monthly shipments, invoices and total units alongside other statistics. ",
        image: screenshotDashboard,
    },
    {
        title: "Shipments",
        description:
            "Keep track of your inbound, inventory and outbound shipments. Real time inventory updates to allow clients to see what's at your warehouse.",
        image: screenshotShipments,
    },
    {
        title: "FBA & FBM",
        description:
            "Allow your clients to connect their seller central account to automatically sync their shipments and listings.",
        image: screenshotWorkflow,
    },
    {
        title: "Employees",
        description:
            "Keep track of your employee KPI's to make sure your workflow is optimized. View your average times for receiving, shipping out shipments etc.",
        image: screenshotEmployees,
    },
];

export function PrimaryFeatures() {
    let [tabOrientation, setTabOrientation] = useState<
        "horizontal" | "vertical"
    >("horizontal");

    useEffect(() => {
        let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

        function onMediaQueryChange({ matches }: { matches: boolean }) {
            setTabOrientation(matches ? "vertical" : "horizontal");
        }

        onMediaQueryChange(lgMediaQuery);
        lgMediaQuery.addEventListener("change", onMediaQueryChange);

        return () => {
            lgMediaQuery.removeEventListener("change", onMediaQueryChange);
        };
    }, []);

    return (
        <section
            id="features"
            aria-label="Features for running your books"
            className="relative overflow-hidden bg-[#DDE1E5] pb-28 sm:py-32"
        >
            {/* <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
            <Container className="relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
                        Everything you need to manage your prep center.
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-slate-700">
                        We offer custom features for specific usecases. Add your
                        own logo and colors to the software.
                    </p>
                </div>
                <TabGroup
                    className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                    vertical={tabOrientation === "vertical"}
                >
                    {({ selectedIndex }) => (
                        <>
                            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                    {features.map((feature, featureIndex) => (
                                        <div
                                            key={feature.title}
                                            className={clsx(
                                                "group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                                                selectedIndex === featureIndex
                                                    ? "bg-white/40 lg:ring-1 lg:ring-white/10 lg:ring-inset"
                                                    : "hover:bg-white/10 lg:hover:bg-white/5"
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        "font-display text-lg data-selected:not-data-focus:outline-hidden",
                                                        selectedIndex ===
                                                            featureIndex
                                                            ? "bg-gradient-to-r from-[#C33764] via-[#302b63] to-[#1D2671] bg-clip-text lg:text-black"
                                                            : "text-black hover:text-black/50 lg:text-black"
                                                    )}
                                                >
                                                    <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                                    {feature.title}
                                                </Tab>
                                            </h3>
                                            <p
                                                className={clsx(
                                                    "mt-2 hidden text-sm lg:block",
                                                    selectedIndex ===
                                                        featureIndex
                                                        ? "text-slate-700"
                                                        : "text-slate-700 group-hover:text-slate-500"
                                                )}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels className="lg:col-span-7">
                                {features.map((feature) => (
                                    <TabPanel
                                        key={feature.title}
                                        unmount={false}
                                    >
                                        <div className="relative sm:px-6 lg:hidden">
                                            <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                                            <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div className="mt-10 w-180 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-271.25">
                                            <img
                                                className="w-full"
                                                src={feature.image}
                                                alt=""
                                                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                            />
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </>
                    )}
                </TabGroup>
            </Container>
        </section>
    );
}
