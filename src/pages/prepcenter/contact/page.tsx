/** @format */

import AnimatedBackground from "../../../components/animatedBackground";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Contact from "../home/sections/Contact";

export default function PrepcenterContact() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground />

            <Header />
            <div className="mt-24 relative z-10">
                <Contact />

                <Footer />
            </div>
        </div>
    );
}
