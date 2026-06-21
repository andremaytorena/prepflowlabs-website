/** @format */

import screenshotClientDash from "../../../../assets/prepcenter/clientDashboard.png";
import screenshotDocs from "../../../../assets/prepcenter/docs.png";
import screenshotlogs from "../../../../assets/prepcenter/logs.png";
import screenshotActions from "../../../../assets/prepcenter/actions.png";
import screenshotNotifications from "../../../../assets/prepcenter/notifications.png";

export default function ClientFeatures() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="bg-gradient-to-r from-[#C33764] via-[#302b63] to-[#1D2671] bg-clip-text text-base/7 font-semibold text-transparent">
                    Deploy faster
                </h2>
                <p className="text- mt-2 max-w-lg font-semibold text-3xl tracking-normal sm:text-4xl md:text-5xl">
                    Everything your clients need too.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <div className="relative lg:col-span-3">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                            <img
                                className="h-80 object-cover object-left"
                                src={screenshotClientDash}
                                alt=""
                                sizes=""
                            />
                            <div className="p-10 pt-4">
                                <h3 className="bg-gradient-to-r from-[#C33764] via-[#302b63] to-[#1D2671] bg-clip-text text-sm/4 font-semibold text-transparent">
                                    Dashboard
                                </h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                                    Their own portal
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    All of your clients can create an account
                                    and can access their data through their
                                    client dashboard.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-3">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                            <img
                                className="h-80 object-cover object-left lg:object-right"
                                src={screenshotDocs}
                                alt=""
                                sizes=""
                            />
                            <div className="p-10 pt-4">
                                <h3 className="bg-gradient-to-r from-[#C33764] via-[#302b63] to-[#1D2671] bg-clip-text text-sm/4 font-semibold text-transparent">
                                    Documentation
                                </h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                                    Guides and API Docs
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Your clients can easily learn to use the
                                    dashboard through the written guides
                                    detailing each step of the process.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                            <img
                                className="h-80 object-cover"
                                src={screenshotActions}
                                alt=""
                                sizes=""
                            />
                            <div className="p-10 pt-4">
                                <h3 className="bg-gradient-to-r from-[#C33764] via-[#302b63] to-[#1D2671] bg-clip-text text-sm/4 font-semibold text-transparent">
                                    Requests
                                </h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                                    Request actions
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Clients can request different actions, such
                                    as shipments or details, pictures or
                                    disposal of their shipments.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <img
                                className="h-80 object-cover"
                                src={screenshotlogs}
                                alt=""
                                sizes=""
                            />
                            <div className="p-10 pt-4">
                                <h3 className="bg-gradient-to-r from-[#C33764] via-[#302b63] to-[#1D2671] bg-clip-text text-sm/4 font-semibold text-transparent">
                                    Logs
                                </h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                                    Track shipments
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Clients can view detailed check-in
                                    information alongside who and what times
                                    items are checked in.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                            <img
                                className="h-80 object-cover"
                                src={screenshotNotifications}
                                alt=""
                                sizes=""
                            />
                            <div className="p-10 pt-4">
                                <h3 className="bg-gradient-to-r from-[#C33764] via-[#302b63] to-[#1D2671] bg-clip-text text-sm/4 font-semibold text-transparent">
                                    Notifications
                                </h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                                    Up to date notifications
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Clients are notified when changes are made.
                                    They can select the type of notifications
                                    they'd like to receive, along the method.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
