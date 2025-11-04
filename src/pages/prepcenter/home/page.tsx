/** @format */
import { useEffect, useState } from "react";
import AnimatedBackground from "../../../components/animatedBackground";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ApiShowcase from "./sections/apiSection";
import ClientFeatures from "./sections/ClientFeatures";
import Contact from "./sections/Contact";
import FeaturesFlow from "./sections/featuresFlow";
import HeroV2 from "./sections/HeroV2";
import IntegrationsSection from "./sections/integrations";
import MigrationPlan from "./sections/migrationPlan";
import SecondaryFeatures from "./sections/SecondaryFeatures";
import ShipmentsFlow from "./sections/shipmentsFlow";

function PrepcenterHomePage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background (disabled on mobile) */}
            {!isMobile && <AnimatedBackground />}

            {/* Content */}
            <Header />
            <div className="mt-24 relative z-10">
                <HeroV2 />
                <ShipmentsFlow />
                <IntegrationsSection />
                <FeaturesFlow />
                <SecondaryFeatures />
                <MigrationPlan />
                <ApiShowcase />
                <ClientFeatures />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default PrepcenterHomePage;
