"use client";

import "../styles/globals.css";

import HeroSection from "@/src/components/landing-page/HeroSection";
import AboutSection from "@/src/components/landing-page/AboutSection";
// import WhatsNewSection from "../components/landing-page/WhatsNewSection";
// import LeaderboardSection from "../components/landing-page/LeaderboardSection";
import TracksSection from "../components/landing-page/TrackSection";
import ScheduleSection from "../components/landing-page/ScheduleSection";
import FAQSection from "../components/landing-page/FAQSection";
import MeetTheTeamSection from "../components/landing-page/MeetTheTeamSection";
import SponsorsSection from "../components/landing-page/SponsorsSection";
import Header from "../components/header/Header";
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Lenis from "lenis";
import Image from "next/image";
import ScrollImage from "@/public/hero/scroll-top.svg";
import BackgroundImage from "@/public/hero/background.png";
import MidgroundImage from "@/public/hero/midground.png";
import ForegroundImage from "@/public/hero/foreground.png";
import "../styles/globals.css";
import SponsorInfo from "../components/landing-page/(AboutSectionComponents)/SponsorInfo";

// Sorry but this is just used to manually create deployment to main im being rushed
export default function Page() {
    const mainRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const tracksRef = useRef<HTMLDivElement>(null);
    const scheduleRef = useRef<HTMLDivElement>(null);
    const meetTheTeamRef = useRef<HTMLDivElement>(null);
    const sponsorsRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);
    const lenis = useRef<Lenis | null>(null);

    const minScreenSize = "max-w-[1200px]";

    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        lenis.current = new Lenis();

        const handleScroll = () => {
            setShowGoTop(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll);

        const raf = (time: number) => {
            lenis.current?.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (lenis.current) {
            lenis.current.scrollTo(0, {
                duration: 0.4,
                easing: (t: number) => t,
            });
        }
    };

    return (
        <div className="flex flex-col items-center w-[screen] overflow-hidden">
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
                                id: "login",
                                name: "Login",
                                url: "/api/auth/google",
                            },
                        ]}
                        wrapH1
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
                        <div
                            id="about"
                            ref={aboutRef}
                            className="w-full overflow-hidden"
                        >
                            <AboutSection />
                            <SponsorInfo />
                        </div>

                        {/* TODO - release all of these the day of the event */}
                        <div
                            id="tracks"
                            className={`min-h-screen w-full ${minScreenSize}`}
                            ref={tracksRef}
                            style={{}}
                        >
                            <TracksSection />
                        </div>

                        <div
                            id="schedule"
                            ref={scheduleRef}
                            className={`w-full ${minScreenSize} overflow-hidden`}
                        >
                            <ScheduleSection />
                        </div>
                        <div
                            id="team"
                            ref={meetTheTeamRef}
                            className={`w-full ${minScreenSize} mt-[-1rem] sm:mt-[3rem] overflow-hidden`}
                        >
                            <MeetTheTeamSection />
                        </div>
                        <div
                            id="sponsors"
                            ref={sponsorsRef}
                            className="w-full mt-[4rem] sm:mt-[-6rem] overflow-hidden"
                        >
                            <SponsorsSection />
                        </div>
                        <div
                            id="faq"
                            ref={faqRef}
                            className="w-full mt-[4rem] sm:mt-[-6rem]"
                        >
                            <FAQSection />
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </div>
    );
}
