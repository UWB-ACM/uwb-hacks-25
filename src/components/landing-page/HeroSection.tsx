import React from "react";
import HackathonDates from "@/src/components/landing-page/(HeroSectionComponents)/HackathonDates";
import VolunteerSection from "@/src/components/landing-page/(HeroSectionComponents)/VolunteerSection";
import LogoContainer from "@/src/components/landing-page/(HeroSectionComponents)/LogoContainer";
import Countdown from "@/src/components/landing-page/(HeroSectionComponents)/Countdown";

const HeroSection = () => {
    return (
        <div className="justify-center grid sm:grid-cols-3 sm:gap-x-[5rem] sm:flex">
            <LogoContainer/>
            <Countdown/>

            <div className="grid grid-cols-subgrid gap-1">
                {/* Dates of Hackathon + Volunteer Apply button section in here */}
                <HackathonDates />
                <VolunteerSection />
            </div>
        </div>
    );
};

export default HeroSection;
