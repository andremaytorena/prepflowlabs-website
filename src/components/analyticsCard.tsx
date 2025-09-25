/** @format */

import React from "react";

export default function AnalyticsCard({
    title = "Real-Time Insights",
    description = "Monitor your operations in real time to ensure maximum effectiveness and identify areas for improvement.",
    label = "\u2731",
    statLabel = "Balance",
    statPrimary = "$52,422",
    statDelta = "+2.45%",
    onTrackText = "On track",
    className = "",
}) {
    return (
        <div className="flex flex-col justify-between rounded-xl bg-[#F5FAFF] p-8 shadow-xl sm:p-10">
            <img src="https://framerusercontent.com/images/5UvqBQ5n4pQcYeXTayuwjKufJ0.svg?width=720&height=345" />

            <div className="space-y-2 mt-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-slate-700">{description}</p>
            </div>
        </div>
    );
}

// Usage example:
// <AnalyticsCard className="max-w-3xl" />
