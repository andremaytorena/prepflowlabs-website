/** @format */
import AnimatedBackground from "../../../components/animatedBackground";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { CallToAction } from "./sections/CallToAction";
import ClientFeatures from "./sections/ClientFeatures";
import Contact from "./sections/Contact";
import { Faqs } from "./sections/Faqs";
import { HeroV2 } from "./sections/HeroV2";
import { PrimaryFeatures } from "./sections/PrimaryFeatures";
import { SecondaryFeatures } from "./sections/SecondaryFeatures";

function PrepcenterHomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground />

            {/* Content */}
            <Header />
            <div className="mt-24 relative z-10">
                <HeroV2 />

                <PrimaryFeatures />

                <SecondaryFeatures />

                <CallToAction />

                <ClientFeatures />

                <Contact />

                <Faqs />

                <Footer />
            </div>
        </div>
    );
}

export default PrepcenterHomePage;
