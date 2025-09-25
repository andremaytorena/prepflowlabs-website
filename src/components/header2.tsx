/** @format */

import { useEffect, useState } from "react";
import { motion, type Transition } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const items = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

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

    const spring: Transition = {
        type: "spring",
        stiffness: 500,
        damping: 44,
        mass: 0.6,
    };

    return (
        <div className="fixed inset-x-0 z-50 top-0">
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
                        width: isScrolled ? "min(1100px, 52%)" : "75%",
                        marginTop: isScrolled ? 12 : 16,
                    }}
                >
                    <motion.nav
                        layout
                        transition={spring}
                        className={[
                            "flex items-center justify-between",
                            isScrolled
                                ? "px-4 py-2 md:px-6"
                                : "px-2 py-0.5 md:px-3 md:py-1",
                            "rounded-2xl",
                            isScrolled
                                ? "bg-white/70 backdrop-blur-md ring-1 ring-black/5 shadow-[0_10px_30px_rgba(2,6,23,0.08)]"
                                : "bg-transparent ring-0 shadow-none",
                        ].join(" ")}
                    >
                        {/* left: logo */}
                        <motion.a
                            layout
                            transition={spring}
                            href="#"
                            className="flex items-center gap-3"
                        >
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-7 w-auto"
                            />
                        </motion.a>

                        {/* center: nav (static, no layout animation) */}
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
                            </ul>
                        </div>

                        {/* right: CTA */}
                        <motion.div
                            layout
                            transition={spring}
                            className="shrink-0"
                        >
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
                        </motion.div>
                    </motion.nav>
                </motion.div>
            </motion.div>
        </div>
    );
}
