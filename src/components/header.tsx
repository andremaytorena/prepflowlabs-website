/** @format */

// /** @format */

// import { FaChevronRight } from "react-icons/fa";
// import { IoMdArrowRoundForward } from "react-icons/io";

// const items = [
//     { label: "Features", href: "" },
//     { label: "Pricing", href: "" },
//     { label: "Resources", href: "" },
// ];

// export default function Header() {
//     const isScrolled = false;

//     if (isScrolled) {
//         return (
//             // fixed + centered wrapper
//             <div className="fixed inset-x-0 top-3 z-50">
//                 <div className="mx-auto w-[min(1100px,52%)]">
//                     <nav
//                         className={[
//                             // pill container
//                             "flex items-center justify-between",
//                             "rounded-2xl px-4 py-2 md:px-6",
//                             // frosted / glossy look
//                             "bg-white/70 backdrop-blur-md",
//                             // soft border + deep shadow
//                             "ring-1 ring-black/5 shadow-[0_10px_30px_rgba(2,6,23,0.08)]",
//                         ].join(" ")}
//                     >
//                         {/* left: logo + wordmark */}
//                         <a href="#" className="flex items-center gap-3">
//                             <img
//                                 src="/logo.png"
//                                 alt="Logo"
//                                 className="h-7 w-auto"
//                             />
//                         </a>

//                         {/* center: nav */}
//                         <div className="hidden md:flex flex-1 justify-center">
//                             <ul className="flex items-center gap-12 font-medium text-slate-800 text-sm">
//                                 {items.map((item) => (
//                                     <li key={item.label}>
//                                         <a
//                                             href={item.href}
//                                             className="transition-colors hover:text-slate-950"
//                                         >
//                                             {item.label}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* right: CTA */}
//                         <div className="shrink-0">
//                             <a
//                                 href="#"
//                                 className={[
//                                     "inline-flex items-center gap-2 rounded-2xl px-4 py-2 md:px-5 md:py-2.5",
//                                     // deep button w/ gradient + inner highlight
//                                     "bg-gradient-to-b from-slate-700 to-indigo-900 text-white",
//                                     "shadow-[0_8px_20px_rgba(15,23,42,0.35)]",
//                                     "ring-1 ring-white/10",
//                                     "transition-all hover:shadow-[0_12px_28px_rgba(15,23,42,0.45)] hover:-translate-y-0.5",
//                                 ].join(" ")}
//                             >
//                                 <span className="text-base font-semibold">
//                                     Get Template
//                                 </span>
//                             </a>
//                         </div>
//                     </nav>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="fixed top-4 w-full z-50">
//             {/* Add mx-auto to center */}
//             <div className="flex flex-row items-center justify-between h-10 w-[75%] mx-auto">
//                 <div className="">
//                     <img src="/logo.png" className="h-10 w-auto" />
//                 </div>
//                 <div className="flex flex-row items-center space-x-10 font-medium text-slate-800">
//                     {items.map((item) => (
//                         <div
//                             key={item.label}
//                             className="text-sm hover:bg-slate-100 px-2 py-2 transition-all hover:transition-all cursor-pointer rounded-md"
//                         >
//                             {item.label}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="">
//     <button
//         className="group text-sm relative inline-flex items-center justify-center gap-x-2 px-6 py-2 font-medium text-white rounded-xl
//  bg-[linear-gradient(60deg,#C33764,#302B63)]
//  cursor-pointer hover:opacity-90 transition-all duration-300 overflow-hidden"
//     >
//         <p>Get Started</p>

//         {/* Chevron Right (default) */}
//         <FaChevronRight
//             size={16}
//             className="transition-all duration-300 opacity-100 group-hover:opacity-0"
//         />

//         {/* Arrow Right (on hover) */}
//         <IoMdArrowRoundForward
//             size={20}
//             className="absolute right-6 transition-all duration-300 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1"
//         />
//     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const items = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
];

/**
 * Smoothly morphs the header into a glossy pill when the user scrolls.
 * - Uses Framer Motion layout animations (spring) for that "edges closing" effect
 * - Applies a frosted glass look + shadow only when scrolled
 * - Avoids layout shift: it's the same node animating between states
 */
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Throttled scroll listener (very light)
    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };

        onScroll(); // initialize
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Shared spring for ultra-smooth radius/size morphing
    const spring = useMemo(
        () => ({
            type: "spring" as const,
            stiffness: 500,
            damping: 44,
            mass: 0.6,
        }),
        []
    );

    return (
        <div className="fixed top-0 inset-x-0 z-50">
            {/* Top offset animates a touch so it feels like it gently docks */}
            <motion.div
                layout
                transition={spring}
                animate={{ y: isScrolled ? 0 : 0 }}
                className="pointer-events-none flex justify-center"
                style={{ top: 0, position: "relative" }}
            >
                {/* Centering wrapper; width morphs between wide (default) and compact (scrolled) */}
                <motion.div
                    layout
                    transition={spring}
                    className="pointer-events-auto"
                    style={{
                        // Animate width using layout + a maxWidth clamp
                        width: isScrolled ? "min(1100px, 52%)" : "75%",
                        marginTop: isScrolled ? 12 : 16, // 12px ~ top-3, 16px ~ top-4
                    }}
                >
                    {/* The actual nav pill/container animates its radius + padding */}
                    <motion.nav
                        layout
                        transition={spring}
                        className={[
                            "flex items-center justify-between",
                            // Padding grows slightly in scrolled state for a pill-like feel
                            isScrolled
                                ? "px-4 py-2 md:px-6"
                                : "px-2 py-0.5 md:px-3 md:py-1",
                            // Rounded corners animate via layout
                            "rounded-2xl",
                            // Frosted look only when scrolled
                            isScrolled
                                ? "bg-white/70 backdrop-blur-md ring-1 ring-black/5 shadow-[0_10px_30px_rgba(2,6,23,0.08)]"
                                : "bg-transparent ring-0 shadow-none",
                        ].join(" ")}
                    >
                        {/* left: logo */}
                        <a href="#" className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-7 w-auto"
                            />
                        </a>

                        {/* center: nav */}
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

                        {/* right: CTA morphs from gradient chip to glossy deep button */}
                        <div className="shrink-0">
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
                    </motion.nav>
                </motion.div>
            </motion.div>
        </div>
    );
}

/*
Usage notes:
- Ensure framer-motion is installed: npm i framer-motion
- Place <Header /> at the top of your app. The component is fixed and won't
  push content; add padding-top on your main content if needed.
- The scroll threshold is very low (10px) so the morph happens quickly; tweak as desired.
*/
