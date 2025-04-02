// General imports
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Buttons
import Button from "../Button";

// For Hackeroons Panel
import HackeroonCarousel from "./(AboutSectionComponents)/HackeroonCarousel/Carousel";

// Panel components
import Panel from "./(AboutSectionComponents)/Panel/Panel";
import PanelHeader from "./(AboutSectionComponents)/Panel/Header";
import PanelContent from "./(AboutSectionComponents)/Panel/Content";

// For fun stats section
import FunFactsContainer from "./(AboutSectionComponents)/Panel/FunFacts/FunFactsContainer";
import FunFact from "./(AboutSectionComponents)/Panel/FunFacts/FunFact";

const AboutSection: React.FC = () => {
    const panelMargin = "mt-12 md:mt-16";

    return (
        <section>
            {/* UWBHacks About Container */}
            <Panel
                className={`${panelMargin}`}
                panelBackground={
                    "/about/backgrounds/AboutSection_Background_1.jpg"
                }
            >
                {/* UWBHacks About Section Header */}
                <PanelHeader isSectionHeader className="lg:absolute">
                    About
                </PanelHeader>

                {/* UWBHacks About Section Content */}
                <PanelContent className="z-[5] flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 overflow-hidden">
                    {/* Husky */}
                    <Image
                        src="/about/husky.png"
                        alt="Husky"
                        width={350}
                        height={350}
                    />

                    {/* UWBHacks About Section Description */}
                    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center md:items-start gap-y-2">
                        <p className="text-center md:text-left text-white text-lg md:text-xl">
                            <span className="font-h1 md:text-xl text-2xl">
                                UWB Hacks: Save the World!
                            </span>{" "}
                            is an annual hackathon teaching students computer
                            science while preparing them for tech and business
                            careers through hands-on learning and professional
                            networking.
                        </p>
                        <div className="w-full flex flex-col md:flex-row items-center justify-around gap-x-4 gap-y-2">
                            <Link
                                href={
                                    "https://uwb-hacks-save-the-world.devpost.com"
                                }
                            >
                                <Button color="blue" fontSize={13}>
                                    Register for UWB Hacks!
                                </Button>
                            </Link>
                            <Link href={"https://discord.gg/6AapzPNvRy"}>
                                <Button color="yellow" fontSize={12}>
                                    Learn more on our Discord!
                                </Button>
                            </Link>
                        </div>
                    </div>
                </PanelContent>
            </Panel>

            {/* Previous UWBHacks Fun Statistics Container */}
            <Panel className={`w-full border-none ${panelMargin}`}>
                <div className="flex justify-center">
                    <PanelHeader className="font-h1 text-white bg-transparent border-none p-0">
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
                className={`flex flex-col gap-y-4 pb-6 mt-12 md:mt-16 ${panelMargin}`}
                panelBackground="/about/backgrounds/AboutSection_Background_2.jpg"
            >
                {/* UWBHacks ACM Description Header */}
                <PanelHeader>
                    UWB Association for Computing Machinery
                </PanelHeader>

                {/* UWB ACM Description Content */}
                <div className="z-[5] w-4/5 md:w-3/4 lg:w-1/2 flex flex-col self-center p-4 bg-white border-2 border-black">
                    <p className="font-bold text-center md:text-left">
                        UWB ACM is a chapter of the Association of Computing
                        Machinery at UWB dedicated to creating events and
                        providing insight into academics, research, and careers
                        related to Computer Science. Learn more in our Discord!
                    </p>
                    <div className="w-full flex justify-center md:justify-end">
                        <Link
                            href="https://discord.gg/DzWEhESsZw"
                            target="_blank"
                        >
                            <Button fontSize={14}>Discord</Button>
                        </Link>
                    </div>
                </div>

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
                {/* Month of Hacking */}
                <Panel
                    panelBackground={
                        "/about/backgrounds/AboutSection_Background_3.jpg"
                    }
                    className="flex flex-col justify-between pb-4"
                >
                    <PanelHeader>Month of Hacking</PanelHeader>
                    <p className="px-6 py-3 text-center font-bold">
                        In April, we&apos;ll host a series of academic and fun
                        activities to prepare participants for the main event,
                        with at least 2 events each week, totaling 8+ events.
                        Some will be co-hosted by fellow clubs and the rest are
                        open for sponsors to host.
                    </p>
                    <div className="px-6 w-full flex justify-end">
                        <Link href={"/month-of-hacking"}>
                            <Button>Learn More</Button>
                        </Link>
                    </div>
                </Panel>

                {/* Hackeroons */}
                <Panel panelBackground="/about/backgrounds/AboutSection_Background_4.jpg">
                    Last Years Projects ???
                </Panel>

                {/* Hackeroons */}
                <Panel panelBackground="/about/backgrounds/AboutSection_Background_4.jpg">
                    <PanelHeader>Hackeroons</PanelHeader>

                    {/* Hackeroon Prizes Carousel */}
                    <HackeroonCarousel />
                    <div className="px-6 w-full flex justify-end">
                        <Link href={"/hackeroon-shop"}>
                            <Button className="text-[25px]" onClick={() => {}}>
                                Go to Shop
                            </Button>
                        </Link>
                    </div>
                </Panel>

                {/* Leaderboard */}
                <Panel panelColor={"#FFF49F"}>
                    <PanelHeader>Leaderboard</PanelHeader>
                    <div className="px-[10%] md:px-[15%] pb-[5%] flex flex-col gap-y-8 md:text-lg">
                        <div className="flex justify-between items-center">
                            <div className="w-[50px] h-[50px] bg-gray-400 rounded-full" />
                            <p>Name</p>
                            <p>Hackeroon_Amount</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-[50px] h-[50px] bg-gray-400 rounded-full" />
                            <p>Name</p>
                            <p>Hackeroon_Amount</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-[50px] h-[50px] bg-gray-400 rounded-full" />
                            <p>Name</p>
                            <p>Hackeroon_Amount</p>
                        </div>
                    </div>
                </Panel>
            </div>
        </section>
    );
};

export default AboutSection;
