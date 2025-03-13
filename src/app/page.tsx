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
import SponsorInfo from "../components/landing-page/(AboutSectionComponents)/SponsorInfo";

import { useContext, RefObject } from "react";
import { NavLinksContext } from "../context/NavLinkContext";

export default function Page() {
    type NavLink = {
        label?: string;
        id: string;
        url: string;
        scrollRef?: RefObject<HTMLDivElement | null>;
        dropDownLinks?: NavLink[];
    };

    const mainRef = useRef<HTMLDivElement>(null);
    const mainNavLink: NavLink = {
        id: "main",
        url: "/#main",
        scrollRef: mainRef,
    };

    const sponsorTracksNavLink: NavLink = {
        label: "Tracks",
        id: "sponsor-tracks",
        url: "/sponsor/tracks",
    };
    const sponsorWorkshopsNavLink: NavLink = {
        label: "Workshops",
        id: "sponsor-workshops",
        url: "/sponsor/workshops",
    };
    const sponsorLuncheonNavLink: NavLink = {
        label: "Luncheon",
        id: "sponsor-luncheon",
        url: "/sponsor/luncheon",
    };
    const sponsorActivitiesNavLink: NavLink = {
        label: "Activities",
        id: "sponsor-activities",
        url: "/sponsor/activities",
    };
    const sponsorUsNavLink: NavLink = {
        label: "Sponsor Us",
        id: "sponsor-us",
        url: "/sponsor",
        dropDownLinks: [
            sponsorTracksNavLink,
            sponsorWorkshopsNavLink,
            sponsorLuncheonNavLink,
            sponsorActivitiesNavLink,
        ],
    };

    const aboutRef = useRef<HTMLDivElement>(null);
    const aboutNavLink: NavLink = {
        label: "About",
        id: "about",
        url: "/#about",
        scrollRef: aboutRef,
    };

    const tracksRef = useRef<HTMLDivElement>(null);
    const tracksNavLink: NavLink = {
        label: "Tracks",
        id: "tracks",
        url: "/#tracks",
        scrollRef: tracksRef,
    };

    const scheduleRef = useRef<HTMLDivElement>(null);
    const scheduleNavLink: NavLink = {
        label: "Schedule",
        id: "schedule",
        url: "/#schedule",
        scrollRef: scheduleRef,
    };

    const meetTheTeamRef = useRef<HTMLDivElement>(null);
    const meetTheTeamNavLink: NavLink = {
        label: "Meet The Team",
        id: "meet-the-team",
        url: "/#meet-the-team",
        scrollRef: meetTheTeamRef,
    };

    const sponsorsRef = useRef<HTMLDivElement>(null);
    const sponsorsNavLink: NavLink = {
        label: "Sponsors",
        id: "sponsors",
        url: "/#sponsors",
        scrollRef: sponsorsRef,
    };

    const faqRef = useRef<HTMLDivElement>(null);
    const faqNavLink: NavLink = {
        label: "FAQ",
        id: "faq",
        url: "/#faq",
        scrollRef: faqRef,
    };

    const { setNavLinks } = useContext(NavLinksContext);
    useEffect(() => {
        setNavLinks([
            mainNavLink,
            aboutNavLink,
            tracksNavLink,
            scheduleNavLink,
            meetTheTeamNavLink,
            sponsorsNavLink,
            faqNavLink,
        ]);
    }, []);

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
        <div className="flex flex-col items-center">
            <button
                onClick={scrollToTop}
                className={`fixed z-[100] w-16 h-16 bottom-4 bg-white border-black border-2 right-10 scroll-up-animation ${
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
                    className="w-full min-h-[100vh] bg-blue flex flex-col relative"
                >
                    {/* Wrap H1 is used for the main page. */}
                    {/* <Header
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
                    /> */}

                    <HeroSection />

                    <Parallax
                        speed={-30}
                        className="absolute w-full h-full z-[-3] bottom-[40px]"
                    >
                        <Image
                            src={BackgroundImage}
                            priority
                            alt=""
                            className="absolute object-cover w-full h-full"
                        />
                    </Parallax>
                    <Parallax
                        speed={-20}
                        className="absolute w-full h-full z-[-2] bottom-[0]"
                    >
                        <Image
                            src={MidgroundImage}
                            priority
                            alt=""
                            className="absolute object-cover w-screen h-screen bottom-[0]"
                        />
                    </Parallax>
                    <Parallax
                        speed={-5}
                        className="absolute w-full h-full z-[-1] bottom-[0]"
                    >
                        <Image
                            src={ForegroundImage}
                            priority
                            alt=""
                            className="absolute object-cover w-screen h-screen bottom-[-10px]"
                        />
                    </Parallax>
                </div>

                <div
                    id="about"
                    ref={aboutRef}
                    className="w-full flex justify-center"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(198,61,23,1) 0%, rgba(255,230,162,1) 100%)",
                    }}
                >
                    <div className={`w-full max-w-[${minScreenSize}px]`}>
                        <AboutSection />
                    </div>
                </div>

                {/* TODO - release all of these the day of the event */}
                <div className={`w-full max-w-[${minScreenSize}px]`} style={{}}>
                    <div className="flex flex-col w-full justify-center px-10">
                        {/* TODO unlock this during the day of the hackathon */}
                        <SponsorInfo />
                        {/* <WhatsNewSection />
                        <LeaderboardSection /> */}
                    </div>
                </div>
                <div
                    id="tracks"
                    className={`h-screen w-full max-w-[${minScreenSize}px]`}
                    ref={tracksRef}
                    style={{}}
                >
                    <TracksSection />
                </div>
                <div
                    id="schedule"
                    ref={scheduleRef}
                    className=" min-h-screen flex flex-col pt-10"
                    style={{}}
                >
                    <ScheduleSection />
                </div>
                <div
                    id="team"
                    ref={meetTheTeamRef}
                    className="min-h-screen overflow-auto w-full"
                    style={{}}
                >
                    <MeetTheTeamSection />
                </div>
                <div
                    id="sponsors"
                    ref={sponsorsRef}
                    className="w-screen"
                    style={{}}
                >
                    <SponsorsSection />
                </div>
                <div
                    id="faq"
                    ref={faqRef}
                    className={`w-full max-w-[${minScreenSize}px]`}
                    style={{}}
                >
                    <FAQSection />
                </div>
            </ParallaxProvider>
        </div>
    );
}
