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
        <div className="max-w-[80vw] flex flex-col justify-center items-center mx-auto">
            <HeroSection />
            <AboutSection />

            <div className="flex gap-x-[3rem]">
                <WhatsNewSection />
                <LeaderboardSection />
            </div>

            <TracksSection />

            <ScheduleSection />

            <FAQSection />

            <MeetTheTeamSection />

            <SponsorsSection />

        </div>
    );
}
