/** @format */

import { useEffect, useState } from "react";
import { motion, type Transition } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import clsx from "clsx";
import {
    Popover,
    PopoverButton,
    PopoverBackdrop,
    PopoverPanel,
} from "@headlessui/react";
import { FaBoxesStacked } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { TbBus } from "react-icons/tb";
import { FaChartArea } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import HoverFlyoutMenu from "./headerDropdownButton";

const features = [
    {
        title: "Prepcenters",
        items: [
            {
                name: "Warehouse Management Software",
                description: "",
                href: "/prepcenter",
                icon: FaWarehouse,
            },
        ],
    },
    {
        title: "",
        items: [],
    },
    {
        title: "Features",
        items: [
            {
                name: "Client management",
                description: "",
                href: "/features/client-management",
                icon: BsPeopleFill,
            },
            {
                name: "Inventory management",
                description: "",
                href: "/features/inventory-management",
                icon: FaBoxesStacked,
            },
            {
                name: "Shipments",
                description: "",
                href: "/features/shipments",
                icon: TbBus,
            },
            {
                name: "Key Performance Indicators",
                description: "",
                href: "/features/kpis",
                icon: FaChartArea,
            },
        ],
    },
    {
        title: "More",
        items: [
            {
                name: "Automated billing",
                description: "",
                href: "/features/billing",
                icon: FaFileInvoiceDollar,
            },
            {
                name: "Affiliate program",
                description: "",
                href: "/features/affiliates",
                icon: FaEnvelopeOpenText,
            },
            {
                name: "Employee management",
                description: "",
                href: "/features/employees",
                icon: FaCodePullRequest,
            },
            // {
            //   name: 'Notifications',
            //   description: '',
            //   href: '/features/notifications',
            //   icon: FaBell,
            // },
        ],
    },
];

const items = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
];

function MobileNavIcon({ open }: { open: boolean }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    "origin-center transition",
                    open && "scale-90 opacity-0"
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    "origin-center transition",
                    !open && "scale-90 opacity-0"
                )}
            />
        </svg>
    );
}

function MobileNavigation() {
    return (
        <Popover>
            <PopoverButton
                className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </PopoverButton>
            <PopoverBackdrop
                transition
                className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
            />
            <PopoverPanel
                transition
                className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
            >
                {/* <MobileDropdown label="Features" sections={features} />
                <MobileDropdown label="Integrations" sections={integrations} />
                <MobileNavLink href="/pricing">Pricing</MobileNavLink>
                <MobileNavLink href="/contact">Contact</MobileNavLink> */}
            </PopoverPanel>
        </Popover>
    );
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // track scroll
    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 100);
                    ticking = false;
                });
                ticking = true;
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // track viewport (mobile vs desktop)
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const handler = (e: MediaQueryListEvent | MediaQueryList) =>
            setIsMobile(
                "matches" in e ? e.matches : (e as MediaQueryList).matches
            );

        // initial
        handler(mq);

        // subscribe
        if (mq.addEventListener) mq.addEventListener("change", handler);
        else mq.addListener(handler);

        return () => {
            if (mq.removeEventListener)
                mq.removeEventListener("change", handler);
            else mq.removeListener(handler);
        };
    }, []);

    // compact when scrolled OR on mobile
    const isCompact = isScrolled || isMobile;

    const spring: Transition = {
        type: "spring",
        stiffness: 500,
        damping: 44,
        mass: 0.6,
    };

    // width + margin rules (full width on mobile)
    const containerWidth = isMobile
        ? "100%"
        : isCompact
        ? "min(1100px, 70%)"
        : "75%";

    const containerMarginTop = isCompact ? 12 : 16;

    return (
        <div className="fixed inset-x-0 z-50 top-0 px-4 sm:px-0">
            <motion.div
                layout
                transition={spring}
                className="pointer-events-none flex justify-center"
                style={{ top: 0, position: "relative" }}
            >
                <motion.div
                    layout
                    transition={spring}
                    className="pointer-events-auto"
                    style={{
                        width: containerWidth,
                        marginTop: containerMarginTop,
                    }}
                >
                    <motion.nav
                        layout
                        transition={spring}
                        className={[
                            "flex items-center justify-between",
                            isCompact
                                ? "px-4 py-2 md:px-6"
                                : "px-2 py-0.5 md:px-3 md:py-1",
                            "rounded-2xl",
                            isCompact
                                ? "bg-white/70 backdrop-blur-md ring-1 ring-black/5 shadow-[0_10px_30px_rgba(2,6,23,0.08)]"
                                : "bg-transparent ring-0 shadow-none",
                        ].join(" ")}
                    >
                        {/* left: logo */}
                        <motion.a
                            layout
                            transition={spring}
                            href="/"
                            className="flex items-center gap-3 sm:w-64"
                        >
                            <img
                                src="/logo.png"
                                alt="Prepflowlabs"
                                className="h-6 w-auto md:h-7"
                            />
                        </motion.a>

                        {/* center: nav (hidden on mobile) */}
                        <div className="hidden md:flex flex-1 justify-center">
                            <ul className="flex items-center gap-12 font-medium text-slate-800 text-sm">
                                {items.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="transition-colors hover:text-slate-950"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                                <HoverFlyoutMenu
                                    label="Prep Centers"
                                    sections={features}
                                    gridCols={2}
                                    isScrolled={isScrolled}
                                />
                            </ul>
                        </div>

                        {/* right: buttons on desktop, hamburger on mobile */}
                        <motion.div
                            layout
                            transition={spring}
                            className="shrink-0 w-10 md:w-64 flex items-center justify-end"
                        >
                            {/* desktop buttons */}
                            <div className="hidden md:flex space-x-2">
                                <button className="text-sm border border-slate-400 px-3 rounded-xl font-medium py-2 hover:opacity-80 cursor-pointer">
                                    Sign In
                                </button>
                                <button
                                    className="group text-sm relative inline-flex items-center justify-center gap-x-2 px-6 py-2 font-medium text-white rounded-xl
                  bg-[linear-gradient(60deg,#C33764,#302B63)]
                  cursor-pointer hover:opacity-90 transition-all duration-300 overflow-hidden"
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
                                </button>
                            </div>

                            <div className="-mr-1 md:hidden">
                                <MobileNavigation />
                            </div>
                        </motion.div>
                    </motion.nav>
                </motion.div>
            </motion.div>
        </div>
    );
}
