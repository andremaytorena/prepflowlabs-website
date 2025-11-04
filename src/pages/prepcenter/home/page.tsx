/** @format */

// PrepcenterHomePage.tsx
import { Suspense, lazy } from "react";
import AnimatedBackground from "../../../components/animatedBackground";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

const HeroV2 = lazy(() => import("./sections/HeroV2"));
const ShipmentsFlow = lazy(() => import("./sections/shipmentsFlow"));
const IntegrationsSection = lazy(() => import("./sections/integrations"));
const FeaturesFlow = lazy(() => import("./sections/featuresFlow"));
const SecondaryFeatures = lazy(() => import("./sections/SecondaryFeatures"));
const MigrationPlan = lazy(() => import("./sections/migrationPlan"));
const ApiShowcase = lazy(() => import("./sections/apiSection"));
const ClientFeatures = lazy(() => import("./sections/ClientFeatures"));
const Contact = lazy(() => import("./sections/Contact"));

function SectionGate({ children }: { children: React.ReactNode }) {
    // Renders children only when ~250px away from viewport
    return (
        <div className="io-wrap" data-ready="">
            {children}
        </div>
    );
}

export default function PrepcenterHomePage() {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <AnimatedBackground />

            <Header />

            <div className="mt-24 relative z-10 space-y-24">
                <Suspense fallback={<div className="h-[70vh]" />}>
                    <SectionGate>
                        <HeroV2 />
                    </SectionGate>
                    <SectionGate>
                        <ShipmentsFlow />
                    </SectionGate>
                    <SectionGate>
                        <IntegrationsSection />
                    </SectionGate>
                    <SectionGate>
                        <FeaturesFlow />
                    </SectionGate>
                    <SectionGate>
                        <SecondaryFeatures />
                    </SectionGate>
                    <SectionGate>
                        <MigrationPlan />
                    </SectionGate>
                    <SectionGate>
                        <ApiShowcase />
                    </SectionGate>
                    <SectionGate>
                        <ClientFeatures />
                    </SectionGate>
                    <SectionGate>
                        <Contact />
                    </SectionGate>
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
}
