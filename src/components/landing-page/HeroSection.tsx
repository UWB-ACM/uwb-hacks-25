import HackathonDates from "@/src/components/landing-page/(HeroSectionComponents)/HackathonDates";
// import VolunteerSection from "@/src/components/landing-page/(HeroSectionComponents)/VolunteerSection";
import Countdown from "@/src/components/landing-page/(HeroSectionComponents)/Countdown";
import SponsorUsSection from "./(HeroSectionComponents)/SponsorUsSection";
import RegisterSection from "./(HeroSectionComponents)/RegisterSection";

const HeroSection = () => {
    return (
        <div className="flex w-full justify-center bg-cover bg-center">
            <div className="relative z-10 container px-4 py-8 w-full max-w-[1000px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-8 max-w-[1500px] mx-auto">
                    {/* Left Column - Logo and Volunteer */}
                    <div className="flex flex-col gap-12  max-w-md">
                        <RegisterSection/>
                        <div className="hidden md:block">
                            <SponsorUsSection />
                        </div>
                    </div>

                    {/* Right Column - Dates and Countdown */}
                    <div className="flex flex-col gap-x-6">
                        <div className="bg-white/40 rounded-lg p-8">
                            <HackathonDates />
                            <Countdown />
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <SponsorUsSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
