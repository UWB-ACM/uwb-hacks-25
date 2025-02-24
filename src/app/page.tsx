import HeroSection from "@/src/components/landing-page/HeroSection";
import AboutSection from "@/src/components/landing-page/AboutSection";
import WhatsNewSection from "../components/landing-page/WhatsNewSection";
import LeaderboardSection from "../components/landing-page/LeaderboardSection";
import TracksSection from "../components/landing-page/TrackSection";
import ScheduleSection from "../components/landing-page/ScheduleSection";
import FAQSection from "../components/landing-page/FAQSection";
import MeetTheTeamSection from "../components/landing-page/MeetTheTeamSection";
import SponsorsSection from "../components/landing-page/SponsorsSection";
import Header from "../components/header/Header";
// import { useRef } from "react";

export default function Page() {

    // const mainRef = useRef(null);
    // const aboutRef = useRef(null);
    // const tracksRef = useRef(null);
    // const scheduleRef = useRef(null);
    // const meetTheTeamRef = useRef(null);
    // const sponsorsRef = useRef(null);
    // const faqRef = useRef(null);

    return (
        <div className="flex flex-col w-full">
            <div
                className="w-full min-h-[100vh] flex flex-col bg-hero bg-cover"
                >
                <Header/>
                <HeroSection />
            </div>

            <div className="w-full flex">
                <AboutSection />
            </div>

            <div className="" style={{}}>
                <div className="flex gap-x-[3rem]">
                    <WhatsNewSection />
                    <LeaderboardSection />
                </div>
            </div>
            <div className="h-screen" style={{}}>
                <TracksSection />
            </div>
            <div className=" h-screen" style={{}}>
                <ScheduleSection />
            </div>
            <div className="bg-orange-300 min-h-screen overflow-auto" style={{}}>
                <MeetTheTeamSection />
            </div>
            <div className=" h-screen" style={{}}>
                <SponsorsSection />
            </div>
            <div className=" h-screen" style={{}}>
                <FAQSection />
            </div>
        </div>
    );
}
