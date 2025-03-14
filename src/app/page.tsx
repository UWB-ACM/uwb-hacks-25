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
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Lenis from "lenis";
import Image from "next/image";
import ScrollImage from "@/public/hero/scroll-top.svg";
import BackgroundImage from "@/public/hero/background.png";
import MidgroundImage from "@/public/hero/midground.png";
import ForegroundImage from "@/public/hero/foreground.png";
import SponsorInfo from "../components/landing-page/(AboutSectionComponents)/SponsorInfo";

import { useContext } from "react";
import { NavItem } from "@/src/components/header/NavLink";
import { NavItemsContext } from "../context/NavItemsContext";

export default function Page() {
    const mainRef = useRef<HTMLDivElement>(null);
    const mainNavItem: NavItem = {
        label: "UWB HACKS",
        id: "main",
        url: "/#main",
        scrollRef: mainRef,
    };

    const sponsorTracksNavItem: NavItem = {
        label: "Tracks",
        id: "sponsor-tracks",
        url: "/sponsor/tracks",
    };
    const sponsorWorkshopsNavItem: NavItem = {
        label: "Workshops",
        id: "sponsor-workshops",
        url: "/sponsor/workshops",
    };
    const sponsorLuncheonNavItem: NavItem = {
        label: "Luncheon",
        id: "sponsor-luncheon",
        url: "/sponsor/luncheon",
    };
    const sponsorActivitiesNavItem: NavItem = {
        label: "Activities",
        id: "sponsor-activities",
        url: "/sponsor/activities",
    };
    const sponsorUsNavItem: NavItem = {
        label: "Sponsor Us!",
        id: "sponsor-us",
        url: "/sponsor",
        dropDownItems: [
            sponsorTracksNavItem,
            sponsorWorkshopsNavItem,
            sponsorLuncheonNavItem,
            sponsorActivitiesNavItem,
        ],
    };

    const aboutRef = useRef<HTMLDivElement>(null);
    const aboutNavItem: NavItem = {
        label: "About",
        id: "about",
        url: "/#about",
        scrollRef: aboutRef,
    };

    const tracksRef = useRef<HTMLDivElement>(null);
    const tracksNavItem: NavItem = {
        label: "Tracks",
        id: "tracks",
        url: "/#tracks",
        scrollRef: tracksRef,
    };

    const scheduleRef = useRef<HTMLDivElement>(null);
    const scheduleNavItem: NavItem = {
        label: "Schedule",
        id: "schedule",
        url: "/#schedule",
        scrollRef: scheduleRef,
    };

    const meetTheTeamRef = useRef<HTMLDivElement>(null);
    const meetTheTeamNavItem: NavItem = {
        label: "Meet The Team",
        id: "meet-the-team",
        url: "/#meet-the-team",
        scrollRef: meetTheTeamRef,
    };

    const sponsorsRef = useRef<HTMLDivElement>(null);
    const sponsorsNavItem: NavItem = {
        label: "Sponsors",
        id: "sponsors",
        url: "/#sponsors",
        scrollRef: sponsorsRef,
    };

    const faqRef = useRef<HTMLDivElement>(null);
    const faqNavItem: NavItem = {
        label: "FAQ",
        id: "faq",
        url: "/#faq",
        scrollRef: faqRef,
    };

    const { setNavItems } = useContext(NavItemsContext);
    useEffect(() => {
        setNavItems([
            mainNavItem,
            sponsorUsNavItem,
            aboutNavItem,
            tracksNavItem,
            scheduleNavItem,
            meetTheTeamNavItem,
            sponsorsNavItem,
            faqNavItem,
        ]);
    });

    const lenis = useRef<Lenis | null>(null);

    const minScreenSize = 1200;

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

                <div
                    id="about"
                    ref={aboutRef}
                    className="w-full flex justify-center overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(198,61,23,1) 0%, rgba(255,230,162,1) 100%)",
                    }}
                >
                    <div
                        className={`w-full max-w-[${minScreenSize}px] sm:px-4 `}
                    >
                        <AboutSection />
                    </div>
                </div>

                {/* TODO - release all of these the day of the event */}
                <div
                    className={`w-full max-w-[${minScreenSize}px] px-10 sm:px-4 overflow-hidden`}
                >
                    <div className="flex flex-col justify-center">
                        {/* TODO unlock this during the day of the hackathon */}
                        <SponsorInfo />
                        {/* <WhatsNewSection />
        <LeaderboardSection /> */}
                    </div>
                    <div
                        id="tracks"
                        className={`w-full max-w-[${minScreenSize}px] overflow-hidden`}
                        ref={tracksRef}
                    >
                        <TracksSection />
                    </div>
                </div>

                <div
                    id="schedule"
                    ref={scheduleRef}
                    className={`w-full max-w-[${minScreenSize}px] overflow-hidden`}
                >
                    <ScheduleSection />
                </div>
                <div
                    id="team"
                    ref={meetTheTeamRef}
                    className={`w-full max-w-[${minScreenSize}px] mt-[-1rem] sm:mt-[3rem] overflow-hidden`}
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
                    className="w-[90vw] mt-[4rem] sm:mt-[-6rem]"
                >
                    <FAQSection />
                </div>
            </ParallaxProvider>
        </div>
    );
}
