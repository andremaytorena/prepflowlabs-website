/** @format */

import Features from "./sections/features";
import Header from "../../components/header";
import Hero from "./sections/hero";
import PricingHero from "./sections/pricing";
import AnimatedBackground from "../../components/animatedBackground";

function HomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden pb-96">
            {/* Animated Background */}
            <AnimatedBackground />
            
            {/* Content */}
            <Header />
            <div className="sm:mt-36 mt-32 relative z-10 space-y-32">
                <Hero />

                <Features />

                <PricingHero />
            </div>
        </div>
    );
}

export default HomePage;
