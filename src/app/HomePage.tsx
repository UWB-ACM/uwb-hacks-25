"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollImage from "@/public/hero/scroll-top.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Header from "@/src/components/header/Header";
import HeroSection from "@/src/components/landing-page/HeroSection";
import BackgroundImage from "@/public/hero/background.png";
import MidgroundImage from "@/public/hero/midground.png";
import ForegroundImage from "@/public/hero/foreground.png";
import AboutSection from "@/src/components/landing-page/AboutSection";
import TracksSection from "@/src/components/landing-page/TrackSection";
import ScheduleSection from "@/src/components/landing-page/ScheduleSection";
import MeetTheTeamSection from "@/src/components/landing-page/MeetTheTeamSection";
import SponsorsSection from "@/src/components/landing-page/SponsorsSection";
import FAQSection from "@/src/components/landing-page/FAQSection";
import "../styles/globals.css";
import { LeaderboardRecord, Prize } from "@/src/util/dataTypes";

export default function HomePage({
    hackeroonPrizes,
    leaderboardData,
}: {
    hackeroonPrizes: Promise<Prize[]>;
    leaderboardData: Promise<LeaderboardRecord[]>;
}) {
    const mainRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const tracksRef = useRef<HTMLDivElement>(null);
    const scheduleRef = useRef<HTMLDivElement>(null);
    const meetTheTeamRef = useRef<HTMLDivElement>(null);
    const sponsorsRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);

    const scrollTopRef = useRef<HTMLDivElement>(null);
    const [showGoTop, setShowGoTop] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleScrollUpButton = () => {
        const position = window.pageYOffset;
        setScrollY(position);

        if (scrollY > 100) {
            setShowGoTop(true);
        } else {
            setShowGoTop(false);
        }
    };

    //SCROLL LISTENER
    useEffect(() => {
        window.addEventListener("scroll", handleScrollUpButton);
    });

    const scrollToTop = () => {
        if (scrollTopRef.current) {
            scrollTopRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="flex flex-col items-center w-[screen] overflow-hidden">
            <div ref={scrollTopRef}></div>
            <button
                onClick={scrollToTop}
                className={`fixed z-[100] w-12 h-12 bottom-4 bg-white border-black border-2 right-4 scroll-up-animation ${
                    showGoTop ? "" : "hidden"
                }`}
            >
                <Image
                    src={ScrollImage}
                    className="w-full"
                    alt="Scroll to the top"
                />
            </button>

            <ParallaxProvider>
                <div
                    id="main"
                    ref={mainRef}
                    className="w-full min-h-[100vh] bg-blue flex flex-col relative overflow-hidden"
                >
                    {/* Wrap H1 is used for the main page. */}
                    <Header
                        links={[
                            {
                                id: "sponsor",
                                name: "Sponsor Us",
                                url: "/sponsor",
                            },
                            {
                                id: "about",
                                name: "About",
                                url: "/#about",
                                scrollRef: aboutRef,
                            },
                            {
                                id: "tracks",
                                name: "Tracks",
                                url: "/#tracks",
                                scrollRef: tracksRef,
                            },
                            {
                                id: "schedule",
                                name: "Schedule",
                                url: "/#schedule",
                                scrollRef: scheduleRef,
                            },
                            {
                                id: "faq",
                                name: "FAQ",
                                url: "/#faq",
                                scrollRef: faqRef,
                            },
                            {
                                id: "dashboard",
                                name: "Dashboard",
                                url: "/dashboard",
                            },
                        ]}
                        wrapH1
                        banner={true}
                    />

                    <HeroSection />

                    <Parallax
                        speed={-30}
                        className="absolute w-full h-full z-[-3] bottom-[40px] overflow-hidden"
                    >
                        <Image
                            src={BackgroundImage || "/placeholder.svg"}
                            priority
                            alt=""
                            className="absolute object-cover w-full h-full overflow-hidden"
                        />
                    </Parallax>
                    <Parallax
                        speed={-20}
                        className="absolute w-full h-full z-[-2] bottom-[0] overflow-hidden"
                    >
                        <Image
                            src={MidgroundImage || "/placeholder.svg"}
                            priority
                            alt=""
                            className="absolute object-cover w-full h-full bottom-[0]"
                        />
                    </Parallax>
                    <Parallax
                        speed={-5}
                        className="absolute w-full h-full z-[-1] bottom-[0] overflow-hidden"
                    >
                        <Image
                            src={ForegroundImage || "/placeholder.svg"}
                            priority
                            alt=""
                            className="absolute object-cover w-full h-full bottom-[-10px]"
                        />
                    </Parallax>
                </div>

                {/* Container for remaining sections */}
                <div
                    className="w-full"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(198,61,23,1) 0%, rgba(255,230,162,1) 100%)",
                    }}
                >
                    <div className="z-[5] w-[90%] mx-auto">
                        <div id="about" ref={aboutRef} className="w-full">
                            <AboutSection
                                hackeroonPrizes={hackeroonPrizes}
                                leaderboardData={leaderboardData}
                            />
                        </div>

                        {/* TODO - release all of these the day of the event */}
                        <div id="tracks" ref={tracksRef} className="w-full">
                            <TracksSection />
                        </div>

                        <div
                            id="schedule"
                            ref={scheduleRef}
                            className={`w-full overflow-hidden`}
                        >
                            <ScheduleSection />
                        </div>
                        <div
                            id="team"
                            ref={meetTheTeamRef}
                            className={`w-full overflow-hidden`}
                        >
                            <MeetTheTeamSection />
                        </div>
                        <div
                            id="sponsors"
                            ref={sponsorsRef}
                            className="w-full overflow-hidden"
                        >
                            <SponsorsSection />
                        </div>
                        <div id="faq" ref={faqRef} className="w-full">
                            <FAQSection />
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </div>
    );
}
