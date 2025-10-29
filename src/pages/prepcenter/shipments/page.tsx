/** @format */

import shipmentsScreenshot from "../../../assets/prepcenter/shipments.png";
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import AnimatedBackground from "../../../components/animatedBackground";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

const features = [
    {
        name: "Trackings.",
        description:
            "Add tracking numbers to the shipments and their status will automatically update for your clients to keep track of.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Boxes.",
        description:
            "Bill your clients for the boxes you use with the support of box pricing customization.",
        icon: LockClosedIcon,
    },
    {
        name: "Custom services.",
        description:
            "If you bill extra for items with special conditions, you are able to add custom services and pricing for them.",
        icon: ServerIcon,
    },
];
function Features() {
    return (
        <div className="overflow-hidden  py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-[#C33764]">
                                Consolidate faster
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Create your shipments
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-700">
                                Start creating shipments from your inventory
                                items and add any boxes or customs services you
                                predefine in settings.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9"
                                    >
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 size-5 text-[#C33764]"
                                            />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src={shipmentsScreenshot}
                        width={2432}
                        height={1442}
                        className="mt-10 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    );
}

const stats = [
    { id: 1, name: "Shipments shipped", value: "10,000+" },
    { id: 2, name: "Units processed", value: "1M+" },
    { id: 3, name: "Guaranteed time saved", value: "100%" },
    { id: 4, name: "Custom workflows", value: "4+" },
];

export default function PrepcenterShipments() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground />

            <Header />
            <div className="mt-24 relative z-10">
                <div className="flex flex-col items-center justify-center px-4 pt-14 sm:px-0">
                    <div className="bg-white rounded-full p-1">
                        <div className="rounded-full border bg-slate-50 border-slate-300 text-xs px-2 py-1 font-medium">
                            Shipments
                        </div>
                    </div>
                    <h2 className="pt-6 text-center text-5xl font-bold sm:text-6xl md:max-w-2xl">
                        Send Out Your{" "}
                        <span className="text-[#C33764]">Shipments Faster</span>
                    </h2>
                    <span className="max-w-3xl pt-5 text-center text-lg text-gray-700">
                        Each fulfillment type has it's own dedicated workflow
                        optimized for sending shipments faster. Including
                        integrations to FBA, FBM and more.
                    </span>

                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="flex flex-col bg-slate-300/40 p-8"
                            >
                                <dt className="text-sm/6 font-semibold text-gray-600">
                                    {stat.name}
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <Features />
                <Footer />
            </div>
        </div>
    );
}
