/** @format */

import PricingCard from "../../../components/pricingCard";

const tiers = [
    {
        name: "Standard",
        id: "tier-hobby",
        href: "#",
        priceMonthly: "$29",
        description:
            "Designed for any seller looking to scale their FBA business without limits.",
        features: [
            "Auto-optimized FBA shipments",
            "Inventory management",
            "Analytics & Profit",
            "SPD + LTL Shipments",
            "2D Barcodes",
        ],
    },
    {
        name: "Standard + WFS",
        id: "tier-team",
        href: "#",
        priceMonthly: "$99",
        description:
            "Designed for any seller looking to scale their FBA & WFS business without limits.",
        features: [
            "Everything in the standard plan + ",
            "WFS shipments",
            "Advanced analytics",
            "Early access to beta features",
        ],
    },
];

export default function PricingHero() {
    return (
        <div className="flex flex-col mx-auto items-center h-full relative">
            <div className="bg-white rounded-full p-1">
                <div className="rounded-full border bg-slate-50 border-slate-300 text-xs px-2 py-1 font-medium">
                    Transparent Pricing
                </div>
            </div>
            <h1 className="font-semibold text-3xl sm:text-3xl/tight max-w-xl text-center sm:mx-0 mx-4 pt-2">
                Stop Paying Premium Prices for Basic FBA Features.
            </h1>
            <p className="mt-4 text-slate-700 font-medium text-center sm:mx-0 mx-4">
                Get every FBA and WFS feature you need — without inflated
                pricing or add-ons.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 max-w-4xl mt-8 px-4 sm:gap-y-0 gap-y-4">
                {tiers.map((tier) => (
                    <PricingCard tier={tier} />
                ))}
            </div>
        </div>
    );
}
