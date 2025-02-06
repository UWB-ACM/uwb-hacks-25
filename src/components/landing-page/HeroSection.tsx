import React from "react";
import HackathonDates from "@/src/components/landing-page/(HeroSectionComponents)/HackathonDates";
import VolunteerSection from "@/src/components/landing-page/(HeroSectionComponents)/VolunteerSection";
import LogoContainer from "@/src/components/landing-page/(HeroSectionComponents)/LogoContainer";
import Countdown from "@/src/components/landing-page/(HeroSectionComponents)/Countdown";

const HeroSection = () => {
    return (
        <div className="grow bg-blue-400 flex m-0 p-0">
            <div className="flex flex-col grow items-center justify-center">
                <LogoContainer />
                <Countdown />
            </div>

            {/* Dates of Hackathon + Volunteer Apply button section in here */}
            <div className="flex flex-col grow  items-center justify-center">
                <HackathonDates />
                <VolunteerSection />
            </div>
        </div>
    );
};

export default HeroSection;
