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
        <div className="flex flex-col w-full mx-auto">
            <div
                className="w-full flex "
                style={{ height: "calc(100vh - 7rem)" }}
            >
                <HeroSection />
                
            </div>

            <div className="w-full flex" style={{
                height: "calc(100vh - 7rem)",
            }}>
                <AboutSection />
            </div>

            <div className="bg-orange-300" style={{}}>
                <div className="flex gap-x-[3rem]">
                    <WhatsNewSection />
                    <LeaderboardSection />
                </div>
            </div>
           <div className="bg-orange-300 h-screen" style={{}}>
                <TracksSection />
            </div>
            <div className="bg-orange-300 h-screen" style={{}}>
                <ScheduleSection />
            </div>
            <div className="bg-orange-300 min-h-screen overflow-auto" style={{}}>
                <MeetTheTeamSection />
            </div>
            <div className="bg-orange-300 h-screen" style={{}}>
                <SponsorsSection />
            </div>
            <div className="bg-orange-300 h-screen" style={{}}>
                <FAQSection />
            </div>
        </div>
    );
}
