/** @format */
import { useEffect, useMemo, useRef, useState } from "react";

function CodeTyping({
    lines,
    speed = 22,
    active = false,
}: {
    lines: string[];
    speed?: number;
    active?: boolean;
}) {
    const [output, setOutput] = useState("");
    const fullText = useMemo(() => lines.join("\n"), [lines]);
    const indexRef = useRef(0);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        // stop if not active
        if (!active) {
            if (timerRef.current) clearInterval(timerRef.current);
            setOutput("");
            indexRef.current = 0;
            return;
        }

        setOutput("");
        indexRef.current = 0;
        // @ts-ignore
        timerRef.current = setInterval(() => {
            indexRef.current += 1;
            setOutput(fullText.slice(0, indexRef.current));
            if (indexRef.current >= fullText.length && timerRef.current) {
                clearInterval(timerRef.current);
            }
        }, speed);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [active, fullText, speed]);

    return (
        <pre className="text-sm leading-6 font-mono text-slate-100 whitespace-pre-wrap min-h-[10rem]">
            {output}
            {active && (
                <span className="inline-block w-2 h-5 align-[-2px] bg-slate-300/80 animate-pulse ml-0.5" />
            )}
        </pre>
    );
}

function useInView<T extends HTMLElement>(
    options: IntersectionObserverInit & { once?: boolean } = {
        threshold: 0.35,
        once: true,
    }
) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (options.once) observer.disconnect();
            } else if (!options.once) {
                setInView(false);
            }
        }, options);
        observer.observe(node);
        return () => observer.disconnect();
    }, [options.root, options.rootMargin, options.threshold, options.once]);

    return { ref, inView };
}

export default function ApiShowcase() {
    const adminSnippet = [
        "# Client example with client key",
        "curl https://api.yourdomain.com/v1/inbound \\",
        "  -H 'Authorization: Bearer sk_live_***' \\",
        "  -H 'Content-Type: application/json' \\",
        '  -d \'{"item_name":"Nike Shoes","quantity":"3"}\'',
    ];

    const { ref, inView } = useInView<HTMLDivElement>({
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
        once: true, // type only the first time it appears
    });

    return (
        <section className="relative isolate mt-20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray/70 via-gray/70 to-slate-gray/70" />
            <div className="mx-auto max-w-6xl px-4 py-24">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    {/* Left copy */}
                    <div className="">
                        <p className="text-accent font-semibold">
                            Designed for all
                        </p>
                        <h2 className="mt-3 font-bold text-3xl leading-tight">
                            Build on PrepFlow with simple APIs
                        </h2>
                        <p className="mt-4 text-slate-700">
                            Use API keys to access client portals and automate
                            your prep center. Create shipments, sync inventory,
                            print labels, and pull KPIs from your own apps or
                            scripts.
                        </p>
                        <ul className="mt-6 space-y-3 text-slate-700">
                            <li className="flex gap-3 items-start">
                                <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                                Client keys let sellers integrate their portal
                                with internal tools without leaving PrepFlow.
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                                Admin keys let your team connect third-party
                                websites and services across all brands.
                            </li>
                        </ul>
                    </div>

                    <div
                        ref={ref}
                        className="rounded-xl border border-slate-100/60 bg-gray shadow-2xl ring-1 ring-slate-100/60"
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100/60">
                            <div className="flex items-center gap-2">
                                <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
                                <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
                                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span
                                    className={`px-2 py-1 text-xs rounded-md text-slate-700 hover:text-white"`}
                                >
                                    curl
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-4 py-2 text-xs text-slate-300 border-b border-slate-100/60">
                            <div className="flex items-center gap-2">
                                <span className="rounded-sm bg-amber-50 text-amber-500 px-1.5 py-0.5 font-semibold">
                                    POST
                                </span>
                                <span className="text-slate-700">
                                    /api/v1/inbound
                                </span>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="rounded-lg bg-slate-950 border border-slate-100/60 p-4 overflow-hidden">
                                <CodeTyping
                                    lines={adminSnippet}
                                    active={inView}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
