import HackathonDates from "@/src/components/landing-page/(HeroSectionComponents)/HackathonDates";
import VolunteerSection from "@/src/components/landing-page/(HeroSectionComponents)/VolunteerSection";
import LogoContainer from "@/src/components/landing-page/(HeroSectionComponents)/LogoContainer";
import Countdown from "@/src/components/landing-page/(HeroSectionComponents)/Countdown";

const HeroSection = () => {
  return (
      <div className="flex w-full justify-center min-h-screen bg-gradient-to-b from-purple-300 from-[10%] via-orange-400 via-50% to-red-500 to-80%">
          <div className="relative z-10 container px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-8">
                  {/* Left Column - Logo and Volunteer */}
                  <div className="flex flex-col gap-12  max-w-md">
                      <LogoContainer />
                      <VolunteerSection />
                  </div>

                  {/* Right Column - Dates and Countdown */}
                  <div className="flex flex-col gap-6">
                    <div className="bg-white/40 rounded-lg p-6">
                       <HackathonDates />
                      <Countdown /> 
                    </div>
                      
                  </div>
              </div>
          </div>
      </div>
  );
}

export default HeroSection;
