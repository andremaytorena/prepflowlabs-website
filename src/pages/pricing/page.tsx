/** @format */

import AnimatedBackground from "../../components/animatedBackground";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PricingCard from "../../components/pricingCard";
import { pricingTiers } from "../home/sections/pricing";

function PricingPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground />

            {/* Content */}
            <Header />
            <div className="sm:mt-36 mt-32 relative z-10 space-y-32">
                <div className="flex flex-col mx-auto items-center h-full relative ">
                    <div className="bg-white rounded-full p-1">
                        <div className="rounded-full border bg-slate-50 border-slate-300 text-xs px-2 py-1 font-medium">
                            Transparent Pricing
                        </div>
                    </div>
                    <h1 className="font-bold text-3xl sm:text-5xl/tight max-w-xl text-center sm:mx-0 mx-4">
                        Stop Paying BS Prices for Boxem or InventoryLab.
                    </h1>
                    <p className="mt-4 text-slate-700 font-medium text-center sm:mx-0 mx-4">
                        Most shipment creation softwares upcharge for basic
                        features, we don't.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 max-w-4xl mt-8 px-4 sm:gap-y-0 gap-y-4">
                        {pricingTiers.map((tier) => (
                            <PricingCard tier={tier} />
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default PricingPage;
