/** @format */

import ints from "./ints.svg";

export default function IntegrationsSection() {
    return (
        <div className="flex mt-20 flex-col mx-auto items-center h-full mb-14">
            <div className="flex flex-col mx-auto items-center h-full bg-gray/60 sm:px-20 rounded-2xl py-10">
                <div className="bg-white rounded-full p-1">
                    <div className="rounded-full border bg-slate-50 border-slate-300 text-xs px-2 py-1 font-medium">
                        Integrations
                    </div>
                </div>

                <h1 className="font-bold mt-2 text-3xl sm:text-3xl/tight sm:max-w-xl text-center sm:mx-0 mx-4">
                    Integrated Shipment Creation
                </h1>

                <p className="mt-4 text-slate-700 font-medium text-center max-w-xl sm:mx-0 mx-4">
                    Skip the expensive add-ons. PrepFlow&apos;s built-in
                    integrations let you generate, manage, and finalize
                    shipments all in one place.
                </p>

                <div className="relative">
                    <img src={ints} className="w-full sm:min-w-3xl mt-10" />
                    <div className=" max-w-2/3 sm:max-w-1/3 top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                        <h1 className="font-semibold mt-2 text-sm sm:text-2xl text-center sm:mx-0 mx-4">
                            +5 Smooth-running Integrations
                        </h1>
                        <p className="mt-4 text-slate-700 sm:text-base text-sm text-center sm:mx-0 mx-4 ">
                            Everything you need to ship, built right in.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
