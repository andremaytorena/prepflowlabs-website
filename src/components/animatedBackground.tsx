/** @format */

import React from "react";

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Main Background - Slightly toned down */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(221, 225, 229, 0.8)" }}
            />

            {/* Soft Sunrays - Template Style */}
            <div
                className="absolute inset-0"
                style={{ zIndex: 3, overflow: "hidden" }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        background:
                            "radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)",
                        mixBlendMode: "normal",
                        opacity: 1,
                        animation:
                            "rayGlow1 20s ease-in-out infinite alternate",
                    }}
                >
                    {/* Individual soft rays */}
                    <div
                        style={{
                            position: "absolute",
                            width: "200px",
                            height: "100vh",
                            top: "-20vh",
                            left: "2%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.35) 40%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)",
                            transform: "skewX(45deg) rotate(-15deg)",
                            filter: "blur(0.3px) drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))",
                            mixBlendMode: "normal",
                            opacity: 0.9,
                            animation: "rayFloat1 25s ease-in-out infinite",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "150px",
                            height: "100vh",
                            top: "-15vh",
                            left: "15%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.28) 45%, rgba(255, 255, 255, 0.08) 75%, transparent 100%)",
                            transform: "skewX(50deg) rotate(-12deg)",
                            filter: "blur(0.2px) drop-shadow(0 0 18px rgba(255, 255, 255, 0.35))",
                            mixBlendMode: "normal",
                            opacity: 0.85,
                            animation:
                                "rayFloat2 30s ease-in-out infinite reverse",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "180px",
                            height: "100vh",
                            top: "-25vh",
                            left: "35%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.32) 35%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)",
                            transform: "skewX(48deg) rotate(-18deg)",
                            filter: "blur(0.3px) drop-shadow(0 0 22px rgba(255, 255, 255, 0.45))",
                            mixBlendMode: "normal",
                            opacity: 0.9,
                            animation: "rayFloat3 35s ease-in-out infinite",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "120px",
                            height: "100vh",
                            top: "-10vh",
                            left: "55%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.08) 80%, transparent 100%)",
                            transform: "skewX(52deg) rotate(-8deg)",
                            filter: "blur(0.4px) drop-shadow(0 0 16px rgba(255, 255, 255, 0.3))",
                            mixBlendMode: "normal",
                            opacity: 0.8,
                            animation:
                                "rayFloat4 40s ease-in-out infinite reverse",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "160px",
                            height: "100vh",
                            top: "-30vh",
                            left: "75%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.28) 42%, rgba(255, 255, 255, 0.08) 75%, transparent 100%)",
                            transform: "skewX(46deg) rotate(-14deg)",
                            filter: "blur(0.3px) drop-shadow(0 0 19px rgba(255, 255, 255, 0.38))",
                            mixBlendMode: "normal",
                            opacity: 0.85,
                            animation: "rayFloat5 28s ease-in-out infinite",
                        }}
                    />

                    {/* Additional rays for more coverage */}
                    <div
                        style={{
                            position: "absolute",
                            width: "140px",
                            height: "100vh",
                            top: "-18vh",
                            left: "-5%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.12) 45%, rgba(255, 255, 255, 0.02) 80%, transparent 100%)",
                            transform: "skewX(44deg) rotate(-10deg)",
                            filter: "blur(0.4px) drop-shadow(0 0 17px rgba(255, 255, 255, 0.32))",
                            mixBlendMode: "normal",
                            opacity: 0.8,
                            animation:
                                "rayFloat6 32s ease-in-out infinite reverse",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "110px",
                            height: "100vh",
                            top: "-22vh",
                            left: "8%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.02) 85%, transparent 100%)",
                            transform: "skewX(51deg) rotate(-20deg)",
                            filter: "blur(0.3px) drop-shadow(0 0 15px rgba(255, 255, 255, 0.28))",
                            mixBlendMode: "normal",
                            opacity: 0.75,
                            animation: "rayFloat7 38s ease-in-out infinite",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "170px",
                            height: "100vh",
                            top: "-12vh",
                            left: "25%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.14) 40%, rgba(255, 255, 255, 0.03) 75%, transparent 100%)",
                            transform: "skewX(47deg) rotate(-13deg)",
                            filter: "blur(0.6px) drop-shadow(0 0 21px rgba(255, 255, 255, 0.4))",
                            mixBlendMode: "normal",
                            opacity: 0.7,
                            animation:
                                "rayFloat8 26s ease-in-out infinite reverse",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "130px",
                            height: "100vh",
                            top: "-28vh",
                            left: "45%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.11) 48%, rgba(255, 255, 255, 0.02) 82%, transparent 100%)",
                            transform: "skewX(49deg) rotate(-9deg)",
                            filter: "blur(0.5px) drop-shadow(0 0 18px rgba(255, 255, 255, 0.33))",
                            mixBlendMode: "normal",
                            opacity: 0.8,
                            animation: "rayFloat9 34s ease-in-out infinite",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "155px",
                            height: "100vh",
                            top: "-16vh",
                            left: "65%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.13) 44%, rgba(255, 255, 255, 0.02) 78%, transparent 100%)",
                            transform: "skewX(43deg) rotate(-16deg)",
                            filter: "blur(0.4px) drop-shadow(0 0 19px rgba(255, 255, 255, 0.36))",
                            mixBlendMode: "normal",
                            opacity: 0.8,
                            animation:
                                "rayFloat10 30s ease-in-out infinite reverse",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "125px",
                            height: "100vh",
                            top: "-24vh",
                            left: "85%",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.1) 46%, rgba(255, 255, 255, 0.02) 84%, transparent 100%)",
                            transform: "skewX(53deg) rotate(-11deg)",
                            filter: "blur(0.7px) drop-shadow(0 0 16px rgba(255, 255, 255, 0.3))",
                            mixBlendMode: "normal",
                            opacity: 0.78,
                            animation: "rayFloat11 36s ease-in-out infinite",
                        }}
                    />
                </div>
            </div>

            {/* Realistic Cloud Images */}
            <div className="absolute inset-0 overflow-visible">
                {/* Cloud 1 */}
                <div
                    className="absolute"
                    style={{
                        width: "900px",
                        height: "583px",
                        display: "block",
                        mixBlendMode: "screen",
                        overflow: "visible",
                        zIndex: 1,
                        aspectRatio: "1.5425 / 1",
                        backgroundImage: "url(/cloud.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        top: "5%",
                        left: "-20%",
                        animation: "cloudFloat1 90s linear infinite",
                    }}
                />

                {/* Cloud 2 */}
                <div
                    className="absolute"
                    style={{
                        width: "900px",
                        height: "583px",
                        display: "block",
                        mixBlendMode: "screen",
                        overflow: "visible",
                        opacity: 0.7,
                        zIndex: 1,
                        aspectRatio: "1.5425 / 1",
                        backgroundImage: "url(/cloud.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        top: "40%",
                        right: "-30%",
                        animation: "cloudFloat2 120s linear infinite reverse",
                    }}
                />

                {/* Cloud 3 */}
                <div
                    className="absolute"
                    style={{
                        width: "900px",
                        height: "583px",
                        display: "block",
                        mixBlendMode: "screen",
                        overflow: "visible",
                        opacity: 0.7,
                        zIndex: 1,
                        aspectRatio: "1.5425 / 1",
                        backgroundImage: "url(/cloud.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        top: "70%",
                        left: "20%",
                        animation: "cloudFloat3 105s linear infinite",
                    }}
                />

                {/* Cloud 4 */}
                <div
                    className="absolute"
                    style={{
                        width: "900px",
                        height: "583px",
                        display: "block",
                        mixBlendMode: "screen",
                        overflow: "visible",
                        zIndex: 1,
                        aspectRatio: "1.5425 / 1",
                        backgroundImage: "url(/cloud.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        top: "15%",
                        left: "60%",
                        animation: "cloudFloat4 135s linear infinite reverse",
                    }}
                />

                {/* Cloud 5 */}
                <div
                    className="absolute"
                    style={{
                        width: "900px",
                        height: "583px",
                        display: "block",
                        mixBlendMode: "screen",
                        overflow: "visible",
                        opacity: 0.3,
                        zIndex: 1,
                        aspectRatio: "1.5425 / 1",
                        backgroundImage: "url(/cloud.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        top: "55%",
                        left: "-10%",
                        animation: "cloudFloat5 150s linear infinite",
                    }}
                />
            </div>

            <style>{`
                @keyframes rayGlow1 {
                    0% {
                        opacity: 0.6;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0.9;
                        transform: scale(1.02);
                    }
                }

                @keyframes rayFloat1 {
                    0%,
                    100% {
                        transform: skewX(45deg) rotate(-15deg) translateY(0px);
                        opacity: 0.9;
                    }
                    50% {
                        transform: skewX(45deg) rotate(-15deg) translateY(-10px);
                        opacity: 1;
                    }
                }

                @keyframes rayFloat2 {
                    0%,
                    100% {
                        transform: skewX(50deg) rotate(-12deg) translateY(0px);
                        opacity: 0.85;
                    }
                    50% {
                        transform: skewX(50deg) rotate(-12deg) translateY(-8px);
                        opacity: 0.95;
                    }
                }

                @keyframes rayFloat3 {
                    0%,
                    100% {
                        transform: skewX(48deg) rotate(-18deg) translateY(0px);
                        opacity: 0.9;
                    }
                    50% {
                        transform: skewX(48deg) rotate(-18deg) translateY(-12px);
                        opacity: 1;
                    }
                }

                @keyframes rayFloat4 {
                    0%,
                    100% {
                        transform: skewX(52deg) rotate(-8deg) translateY(0px);
                        opacity: 0.8;
                    }
                    50% {
                        transform: skewX(52deg) rotate(-8deg) translateY(-6px);
                        opacity: 0.9;
                    }
                }

                @keyframes rayFloat5 {
                    0%,
                    100% {
                        transform: skewX(46deg) rotate(-14deg) translateY(0px);
                        opacity: 0.85;
                    }
                    50% {
                        transform: skewX(46deg) rotate(-14deg) translateY(-9px);
                        opacity: 0.95;
                    }
                }

                @keyframes rayFloat6 {
                    0%,
                    100% {
                        transform: skewX(44deg) rotate(-10deg) translateY(0px);
                        opacity: 0.8;
                    }
                    50% {
                        transform: skewX(44deg) rotate(-10deg) translateY(-7px);
                        opacity: 0.9;
                    }
                }

                @keyframes rayFloat7 {
                    0%,
                    100% {
                        transform: skewX(51deg) rotate(-20deg) translateY(0px);
                        opacity: 0.75;
                    }
                    50% {
                        transform: skewX(51deg) rotate(-20deg) translateY(-11px);
                        opacity: 0.85;
                    }
                }

                @keyframes rayFloat8 {
                    0%,
                    100% {
                        transform: skewX(47deg) rotate(-13deg) translateY(0px);
                        opacity: 0.7;
                    }
                    50% {
                        transform: skewX(47deg) rotate(-13deg) translateY(-8px);
                        opacity: 0.8;
                    }
                }

                @keyframes rayFloat9 {
                    0%,
                    100% {
                        transform: skewX(49deg) rotate(-9deg) translateY(0px);
                        opacity: 0.8;
                    }
                    50% {
                        transform: skewX(49deg) rotate(-9deg) translateY(-10px);
                        opacity: 0.9;
                    }
                }

                @keyframes rayFloat10 {
                    0%,
                    100% {
                        transform: skewX(43deg) rotate(-16deg) translateY(0px);
                        opacity: 0.8;
                    }
                    50% {
                        transform: skewX(43deg) rotate(-16deg) translateY(-9px);
                        opacity: 0.9;
                    }
                }

                @keyframes rayFloat11 {
                    0%,
                    100% {
                        transform: skewX(53deg) rotate(-11deg) translateY(0px);
                        opacity: 0.78;
                    }
                    50% {
                        transform: skewX(53deg) rotate(-11deg) translateY(-6px);
                        opacity: 0.88;
                    }
                }

                @keyframes cloudFloat1 {
                    0% {
                        transform: translateX(-100px) translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateX(calc(50vw)) translateY(-20px)
                            scale(1.1);
                    }
                    100% {
                        transform: translateX(calc(100vw + 100px))
                            translateY(0px) scale(1);
                    }
                }

                @keyframes cloudFloat2 {
                    0% {
                        transform: translateX(100px) translateY(0px) scale(0.9);
                    }
                    50% {
                        transform: translateX(calc(-50vw)) translateY(15px)
                            scale(1.05);
                    }
                    100% {
                        transform: translateX(calc(-100vw - 100px))
                            translateY(0px) scale(0.9);
                    }
                }

                @keyframes cloudFloat3 {
                    0% {
                        transform: translateX(0px) translateY(0px) scale(0.8);
                    }
                    33% {
                        transform: translateX(-200px) translateY(-10px)
                            scale(0.9);
                    }
                    66% {
                        transform: translateX(-400px) translateY(5px) scale(1);
                    }
                    100% {
                        transform: translateX(-600px) translateY(0px) scale(0.8);
                    }
                }

                @keyframes cloudFloat4 {
                    0% {
                        transform: translateX(0px) translateY(0px) scale(1.1);
                    }
                    25% {
                        transform: translateX(-150px) translateY(-25px) scale(1);
                    }
                    75% {
                        transform: translateX(-450px) translateY(10px)
                            scale(1.2);
                    }
                    100% {
                        transform: translateX(-700px) translateY(0px) scale(1.1);
                    }
                }

                @keyframes cloudFloat5 {
                    0% {
                        transform: translateX(-50px) translateY(0px) scale(0.7);
                    }
                    40% {
                        transform: translateX(calc(40vw)) translateY(-15px)
                            scale(0.9);
                    }
                    80% {
                        transform: translateX(calc(80vw)) translateY(8px)
                            scale(1.1);
                    }
                    100% {
                        transform: translateX(calc(100vw + 200px))
                            translateY(0px) scale(0.7);
                    }
                }
            `}</style>
        </div>
    );
};

export default AnimatedBackground;
