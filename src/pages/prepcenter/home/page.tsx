/** @format */
import AnimatedBackground from "../../../components/animatedBackground";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ClientFeatures from "./sections/clientFeatures";
import Contact from "./sections/Contact";
import FeaturesFlow from "./sections/featuresFlow";
import HeroV2 from "./sections/HeroV2";
import IntegrationsSection from "./sections/integrations";
import PickAndPackFlow from "./sections/PickAndPackFlow";
import SecondaryFeatures from "./sections/SecondaryFeatures";
import ShipmentsFlow from "./sections/shipmentsFlow";
import TicketingFlow from "./sections/TicketingFlow";

function PrepcenterHomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackground />

            {/* Content */}
            <Header />
            <div className="mt-24 relative z-10">
                <HeroV2 />
                <ShipmentsFlow />
                <PickAndPackFlow />
                <IntegrationsSection />
                <FeaturesFlow />
                <TicketingFlow />
                <SecondaryFeatures />
                {/* <ApiShowcase /> */}
                <ClientFeatures />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default PrepcenterHomePage;
