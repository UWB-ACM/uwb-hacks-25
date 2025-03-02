/* eslint-disable @next/next/no-img-element */
"use client";

import HeroSection from "@/src/components/landing-page/HeroSection";
import AboutSection from "@/src/components/landing-page/AboutSection";
import WhatsNewSection from "../components/landing-page/WhatsNewSection";
import LeaderboardSection from "../components/landing-page/LeaderboardSection";
import TracksSection from "../components/landing-page/TrackSection";
import ScheduleSection from "../components/landing-page/ScheduleSection";
import FAQSection from "../components/landing-page/FAQSection";
import MeetTheTeamSection from "../components/landing-page/MeetTheTeamSection";
import SponsorsSection from "../components/landing-page/SponsorsSection";
import Header from "../components/header/MainHeader";
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Lenis from "lenis";
import "../styles/globals.css";

export default function Page() {
    const mainRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const tracksRef = useRef<HTMLDivElement>(null);
    const scheduleRef = useRef<HTMLDivElement>(null);
    const meetTheTeamRef = useRef<HTMLDivElement>(null);
    const sponsorsRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);
    const lenis = useRef<Lenis | null>(null);

    const refs = {
        Main: mainRef,
        About: aboutRef,
        Tracks: tracksRef,
        Schedule: scheduleRef,
        MeetTheTeam: meetTheTeamRef,
        Sponsors: sponsorsRef,
        FAQ: faqRef,
    };

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
                duration: 1.5,
                easing: (t: number) => t,
            });
        }
    };

    return (
        <div className="flex flex-col w-full">
            <button
                onClick={scrollToTop}
                className={`fixed z-[100] w-20 h-20 bottom-4 bg-white rounded-lg right-10 scroll-up-animation ${
                    showGoTop ? "" : "hidden"
                }`}
            >
                <img src="/hero/scroll-top.svg" alt="" />
            </button>

            <ParallaxProvider>
                <div
                    id="main"
                    ref={mainRef}
                    className="w-full min-h-[100vh] bg-blue flex flex-col relative"
                >
                    <Header refs={refs} />
                    <Parallax speed={-10}>
                        <HeroSection />
                    </Parallax>

                    <Parallax
                        speed={-30}
                        className="absolute w-full h-full z-[-3] bottom-[40]"
                    >
                        <img
                            src="/hero/background.svg"
                            alt=""
                            className="absolute object-cover w-full h-full "
                        />
                    </Parallax>
                    <Parallax
                        speed={-20}
                        className="absolute w-full h-full z-[-2] bottom-[0]"
                    >
                        <img
                            src="/hero/midground.svg"
                            alt=""
                            className="absolute object-cover w-screen h-screen bottom-[0]"
                        />
                    </Parallax>
                    <Parallax
                        speed={-5}
                        className="absolute w-full h-full z-[-1] bottom-[0]"
                    >
                        <img
                            src="/hero/foreground.svg"
                            alt=""
                            className="absolute object-cover w-screen h-screen bottom-[-10]"
                        />
                    </Parallax>
                </div>

                <div id="about" ref={aboutRef} className="w-full flex">
                    <AboutSection />
                </div>

                <div className="" style={{}}>
                    <div className="flex gap-x-[3rem]">
                        <WhatsNewSection />
                        <LeaderboardSection />
                    </div>
                </div>
                <div
                    id="tracks"
                    ref={tracksRef}
                    className="h-screen"
                    style={{}}
                >
                    <TracksSection />
                </div>
                <div
                    id="schedule"
                    ref={scheduleRef}
                    className=" h-screen"
                    style={{}}
                >
                    <ScheduleSection />
                </div>
                <div
                    id="team"
                    ref={meetTheTeamRef}
                    className="min-h-screen overflow-auto"
                    style={{}}
                >
                    <MeetTheTeamSection />
                </div>
                <div
                    id="sponsors"
                    ref={sponsorsRef}
                    className=" h-screen"
                    style={{}}
                >
                    <SponsorsSection />
                </div>
                <div id="faq" ref={faqRef} className=" h-screen" style={{}}>
                    <FAQSection />
                </div>
            </ParallaxProvider>
        </div>
    );
}
