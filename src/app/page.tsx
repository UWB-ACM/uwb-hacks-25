import HeroSection from "@/src/components/landing-page/HeroSection";
import AboutSection from "@/src/components/landing-page/AboutSection";
import WhatsNewSection from "../components/landing-page/WhatsNewSection";
import LeaderboardSection from "../components/landing-page/LeaderboardSection";
import TracksSection from "../components/landing-page/TrackSection";
import ScheduleSection from "../components/landing-page/ScheduleSection";
import FAQSection from "../components/landing-page/FAQSection";
import MeetTheTeamSection from "../components/landing-page/MeetTheTeamSection";
import SponsorsSection from "../components/landing-page/SponsorsSection";

export default function Page() {
    return (
        <div className="flex flex-col w-full">
            <div
                className="w-full flex justify-center "
                // style={{ height: "calc(100vh - 7rem)" }}
            >
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
            <div className=" h-screen" style={{}}>
                <TracksSection />
            </div>
            <div className=" h-screen" style={{}}>
                <ScheduleSection />
            </div>
            <div className=" h-screen" style={{}}>
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
