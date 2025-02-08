import HackathonDates from "@/src/components/landing-page/(HeroSectionComponents)/HackathonDates";
import VolunteerSection from "@/src/components/landing-page/(HeroSectionComponents)/VolunteerSection";
import LogoContainer from "@/src/components/landing-page/(HeroSectionComponents)/LogoContainer";
import Countdown from "@/src/components/landing-page/(HeroSectionComponents)/Countdown";

const HeroSection = () => {
    return (
        <div className="flex w-full justify-center min-h-screen bg-gradient-to-b from-purple-300 from-[10%] via-orange-400 via-50% to-red-500 to-80%">
            <div className=" z-10 container px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
                    <div className="lg:col-span-1 mt-4">
                        <LogoContainer />
                        <div className="lg:col-span-1 lg:mt-16">
                            <VolunteerSection />
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-8 lg:mt-8">
                        <HackathonDates />
                        <Countdown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
