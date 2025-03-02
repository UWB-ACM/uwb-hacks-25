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
import { useRef } from "react";

export default function Page() {
    const mainRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const tracksRef = useRef<HTMLDivElement>(null);
    const scheduleRef = useRef<HTMLDivElement>(null);
    const meetTheTeamRef = useRef<HTMLDivElement>(null);
    const sponsorsRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);

    const refs = {
        Main: mainRef,
        About: aboutRef,
        Tracks: tracksRef,
        Schedule: scheduleRef,
        MeetTheTeam: meetTheTeamRef,
        Sponsors: sponsorsRef,
        FAQ: faqRef,
    };

    return (
        <div className="flex flex-col w-full">
            <div
                id="main"
                ref={mainRef}
                className="w-full min-h-[100vh] flex flex-col bg-hero bg-cover"
            >
                <Header refs={refs} />
                <HeroSection />
            </div>

            <div id="about" ref={aboutRef} className="w-full flex" style={{}}>
                <AboutSection />
            </div>

            <div className="" style={{}}>
                <div className="flex gap-x-[3rem]">
                    <WhatsNewSection />
                    <LeaderboardSection />
                </div>
            </div>
            <div id="tracks" ref={tracksRef} className="h-screen" style={{}}>
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
                className="bg-orange-300 min-h-screen overflow-auto"
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
        </div>
    );
}
