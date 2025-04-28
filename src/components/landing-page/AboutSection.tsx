// General imports
import React, { Suspense } from "react";
import Image from "next/image";

// Buttons
import Button from "../Button";

// Panel components
import Panel from "./(AboutSectionComponents)/Panel/Panel";
import PanelHeader from "./(AboutSectionComponents)/Panel/Header";
import PanelContent from "./(AboutSectionComponents)/Panel/Content";

// For about panel
import FlyingHusky from "./(AboutSectionComponents)/FlyingHusky";

// For fun stats panel
import FunFactsContainer from "./(AboutSectionComponents)/FunFacts/FunFactsContainer";
import FunFact from "./(AboutSectionComponents)/FunFacts/FunFact";

// For Hackeroons Panel
import HackeroonCarousel from "./(AboutSectionComponents)/HackeroonCarousel/Carousel";

// for Leaderboard panel
import Leaderboard from "./(AboutSectionComponents)/leaderboard/Leaderboard";

// For Last Years Winners panel
import LastYearsWinnersRecord from "./(AboutSectionComponents)/LastYearsWinnersRecord";
import { LeaderboardRecord, Prize } from "@/src/util/dataTypes";

const AboutSection: React.FC<{
    hackeroonPrizes: Promise<Prize[]>;
    leaderboardData: Promise<LeaderboardRecord[]>;
}> = ({ hackeroonPrizes, leaderboardData }) => {
    const panelMargin = "mt-12 md:mt-16";

    return (
        <section>
            {/* UWBHacks About Container */}
            <Panel
                id="aboutPanel"
                className={`${panelMargin}`}
                panelBackground={
                    "/about/backgrounds/AboutSection_Background_1.jpg"
                }
            >
                {/* UWBHacks About Section Header */}
                <PanelHeader
                    parentPanelId="aboutPanel"
                    as="h2"
                    isSectionHeader
                    className="z-[5] lg:absolute"
                >
                    About
                </PanelHeader>

                {/* UWBHacks About Section Content */}
                <PanelContent
                    parentPanelId="aboutPanel"
                    className="z-[5] flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 overflow-hidden"
                >
                    <FlyingHusky />

                    {/* UWBHacks About Section Description */}
                    <div className="z-[5] w-full md:w-1/2 lg:w-1/3">
                        <h3 className="font-h1 text-xl lg:text-2xl text-center md:text-left text-blue-500">
                            UWB Hacks: Save the World!
                        </h3>
                        <p className="text-center md:text-left text-white text-lg">
                            This exciting annual hackathon teaches students
                            computer science through hands-on challenges while
                            building valuable industry connections and
                            professional skills that launch successful tech and
                            business careers.
                        </p>
                        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-x-4 gap-y-2 mt-2 md:mt-0 lg:mt-2">
                            <Button
                                href={
                                    "https://uwb-hacks-save-the-world.devpost.com/project-gallery"
                                }
                                target="_blank"
                                color="blue"
                                fontSize={13}
                            >
                                View Projects!
                            </Button>
                            <Button
                                href={"/dashboard"}
                                color="yellow"
                                fontSize={12}
                            >
                                Open Dashboard
                            </Button>
                        </div>
                    </div>
                </PanelContent>
            </Panel>

            {/* Previous UWBHacks Fun Statistics Container */}
            <Panel
                id="funFactsPanel"
                className={`w-full border-none ${panelMargin}`}
            >
                <div className="flex justify-center">
                    <PanelHeader
                        parentPanelId="funFactsPanel"
                        as="h2"
                        className="font-h1 text-white bg-transparent border-none p-0"
                    >
                        Statistics from our previous hackathon <br /> UWB Hacks
                        AI 2024 !
                    </PanelHeader>
                </div>
                <FunFactsContainer>
                    <FunFact
                        src={"/about/comic-bubbles/comic-bubble1.svg"}
                        alt={"Prize total at UWB Hacks AI 2024"}
                    />
                    <FunFact
                        src={"/about/comic-bubbles/comic-bubble2.svg"}
                        alt={"Schools participated at UWB Hacks AI 2024"}
                    />
                    <FunFact
                        src={"/about/comic-bubbles/comic-bubble3.svg"}
                        alt={"Number of hackers at UWB Hacks AI 2024"}
                    />
                    <FunFact
                        src={"/about/comic-bubbles/comic-bubble4.svg"}
                        alt={
                            "Number of submitted projects at UWB Hacks AI 2024"
                        }
                    />
                </FunFactsContainer>
            </Panel>

            {/* UWB ACM Description Container */}
            <Panel
                id="uwbacmDescriptionPanel"
                className={`mt-12 md:mt-16 ${panelMargin}`}
                panelBackground="/about/backgrounds/AboutSection_Background_2.jpg"
            >
                {/* UWBHacks ACM Description Header */}
                <PanelHeader parentPanelId="uwbacmDescriptionPanel" as="h2">
                    UWB Association for Computing Machinery
                </PanelHeader>

                {/* UWB ACM Description Content */}
                <PanelContent
                    parentPanelId="uwbacmDescriptionPanel"
                    className="flex justify-center items-center"
                >
                    <div className="z-[5] w-4/5 md:w-3/4 lg:w-3/5 flex flex-col xl:flex-row xl:gap-x-4 self-center p-6 bg-white border-2 border-black">
                        <p className="font-semibold text-center md:text-left">
                            UWB ACM is a chapter of the Association of Computing
                            Machinery at UWB dedicated to creating events and
                            providing insight into academics, research, and
                            careers related to Computer Science. Learn more in
                            our Discord!
                        </p>
                        <div className="w-full flex justify-center items-center md:justify-end mt-2 xl:mt-0">
                            <Button
                                href={"https://discord.gg/DzWEhESsZw"}
                                target="_blank"
                                fontSize={18}
                                color="yellow"
                            >
                                Discord
                            </Button>
                        </div>
                    </div>
                </PanelContent>

                {/* UWB ACM Logo */}
                <Image
                    className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[2vw]"
                    src="/about/uwb-acm-logo.png"
                    alt="ACM Logo"
                    width={200}
                    height={200}
                />
            </Panel>

            {/* "Month of Hacking", "Hackeroons", "Leaderboard", & "Last Year's Winners" Container */}
            <div className={`w-full grid md:grid-cols-2 gap-8 ${panelMargin}`}>
                {/* Hackeroons */}
                <Panel
                    id="hackeroonPrizesPanel"
                    className="flex flex-col"
                    panelBackground="/about/backgrounds/AboutSection_Background_4.jpg"
                >
                    <PanelHeader parentPanelId="hackeroonPrizesPanel" as="h2">
                        Hackeroons
                    </PanelHeader>

                    <PanelContent
                        parentPanelId="hackeroonPrizesPanel"
                        className="h-full flex flex-col justify-around"
                    >
                        {/* Hackeroon Prizes Carousel */}
                        <Suspense>
                            <HackeroonCarousel
                                hackeroonPrizes={hackeroonPrizes}
                            />
                        </Suspense>

                        <div className="flex justify-between  mt-2 md:mt-4">
                            <Button href={"/hackeroon-guide"} color={"blue"}>
                                Hackeroon Guide
                            </Button>

                            <Button href={"/hackeroon-shop"} color={"yellow"}>
                                Go to Marketplace
                            </Button>
                        </div>
                    </PanelContent>
                </Panel>

                {/* Leaderboard */}
                <Panel
                    id="leaderboardPanel"
                    panelColor={"#f5be58"}
                    className="flex flex-col"
                >
                    <PanelHeader parentPanelId="leaderboardPanel" as="h2">
                        Hackeroon Leaderboard
                    </PanelHeader>
                    <PanelContent
                        parentPanelId="leaderboardPanel"
                        className="h-full flex flex-col justify-between gap-y-8 md:text-lg text-white p-4 md:p-6"
                    >
                        {/* Render leaderboard */}
                        <Suspense>
                            <Leaderboard leaderboardData={leaderboardData} />
                        </Suspense>
                    </PanelContent>
                </Panel>

                {/* Month of Hacking */}
                <Panel
                    id="monthOfHackingPanel"
                    panelBackground={
                        "/about/backgrounds/AboutSection_Background_3.jpg"
                    }
                    className="flex flex-col justify-between"
                >
                    <PanelHeader parentPanelId="monthOfHackingPanel" as="h2">
                        Month of Hacking
                    </PanelHeader>
                    <PanelContent parentPanelId="monthOfHackingPanel">
                        <p className="text-center font-bold md:text-lg">
                            In{" "}
                            <span className="font-h1 text-blue-700 tracking-wider px-[2px] text-xl md:text-2xl">
                                April
                            </span>
                            , we will host a comprehensive series of academic
                            workshops to prepare participants for the main
                            event, with a minimum of two sessions scheduled
                            weekly, totaling 8+ events. <br /> <br /> Select
                            workshops will be collaboratively organized with
                            partner clubs, while additional opportunities remain
                            available for sponsor-led sessions.
                        </p>
                        <div className="w-full flex justify-center md:justify-end mt-4">
                            <Button href={"/month-of-hacking"} fontSize={18}>
                                Learn More!
                            </Button>
                        </div>
                    </PanelContent>
                </Panel>

                {/* Last Year's Winners */}
                <Panel
                    id="lastYearsWinnersPanel"
                    className="flex flex-col"
                    panelBackground="/about/backgrounds/AboutSection_Background_4.jpg"
                >
                    <PanelHeader parentPanelId="lastYearsWinnersPanel" as="h2">
                        Last Year&apos;s Projects
                    </PanelHeader>
                    <PanelContent
                        parentPanelId="lastYearsWinnersPanel"
                        className="h-full flex flex-col justify-around gap-y-4"
                    >
                        <LastYearsWinnersRecord
                            name={"LoveStorying"}
                            linkedInPost={
                                "https://www.linkedin.com/posts/uwb-hacks-series_uwbhackssavetheworld-uwbhacksai-uwbhacks-activity-7304282072141963265-0b8u/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERRpbABkbd7JlcrDDWNJTcPBzpftyc4lwQ"
                            }
                            buttonColor="blue"
                        />
                        <LastYearsWinnersRecord
                            name={"Freakquency"}
                            linkedInPost={
                                "https://www.linkedin.com/posts/uwb-hacks-series_uwbhacks-uwbhackssavetheworld-uwbhacks2025-activity-7306907475134361600-iK_5/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERRpbABkbd7JlcrDDWNJTcPBzpftyc4lwQ"
                            }
                            buttonColor="yellow"
                        />
                    </PanelContent>
                </Panel>
            </div>
        </section>
    );
};

export default AboutSection;
