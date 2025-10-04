/** @format */

import clientsScreenshot from "../../../assets/prepcenter/clients.png";

import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import AnimatedBackground from "../../../components/animatedBackground";

const features = [
    {
        name: "Approve clients.",
        description:
            "Manually approve new client accounts to ensure they are legitimate customers. You also have the option to disable it.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Integration credentials.",
        description:
            "Allow your clients to upload their team credentials for 3rd party softwares so that you can perform actions on their behalf.",
        icon: LockClosedIcon,
    },
    {
        name: "Custom pricing.",
        description:
            "Customize the pricing for each client if needed. Including unit prices, box prices and more.",
        icon: ServerIcon,
    },
];
function Features() {
    return (
        <div className="overflow-hidden  py-24 sm:py-32 z-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-[#C33764]">
                                Manage easier
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Handle your clients
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-700">
                                Stop using google sheets to keep track of your
                                clients, and instead easily keep track of them
                                and their shipments via the dashboard.
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
                        src={clientsScreenshot}
                        width={2432}
                        height={1442}
                        className="mt-10 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    );
}

export default function ClientManagement() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground />

            <Header />
            <div className="mt-24 relative z-10">
                <div className="flex flex-col items-center justify-center px-4 pt-14 sm:px-0 z-30">
                    <div className="bg-white rounded-full p-1">
                        <div className="rounded-full border bg-slate-50 border-slate-300 text-xs px-2 py-1 font-medium">
                            Client Management
                        </div>
                    </div>

                    <h2 className="pt-6 text-center text-5xl font-bold sm:text-6xl md:max-w-2xl">
                        Manage Your Clients{" "}
                        <span className="text-[#C33764]">With Ease</span>
                    </h2>
                    <span className="max-w-3xl pt-5 text-center text-lg text-gray-700">
                        Our comprehensive client management system helps prep
                        centers delivery exceptional service while maintaining
                        complete visibility and control over every client
                        relationship
                    </span>
                </div>

                <Features />
                <Footer />
            </div>
        </div>
    );
}
