/** @format */

import AnalyticsCard from "../../../components/analyticsCard";

function Features() {
    return (
        <div className="flex flex-col mx-auto items-center h-full relative">
            <div className="bg-white rounded-full p-1">
                <div className="rounded-full border bg-slate-50 border-slate-300 text-xs px-2 py-1 font-medium">
                    FBA & WFS
                </div>
            </div>
            <h1 className="font-semibold text-3xl sm:text-3xl/tight max-w-xl text-center sm:mx-0 mx-4 pt-2">
                Boxem and InventoryLab stop at FBA. We handle FBA and WFS
                shipments.
            </h1>
            <p className="mt-4 text-slate-700 font-medium text-center sm:mx-0 mx-4">
                Manage Amazon FBA and Walmart WFS shipments seamlessly — without
                switching tools
            </p>

            <div className="grid grid-cols-1 px-4 sm:gap-y-0 gap-y-4 sm:grid-cols-2 max-w-6xl mt-8 gap-x-10">
                <AnalyticsCard />
                <AnalyticsCard />
            </div>
        </div>
    );
}

export default Features;
