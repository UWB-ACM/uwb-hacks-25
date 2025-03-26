import Image from "next/image";
import Link from "next/link";
import AccentImage from "@/public/accent.webp";
import HuskyImage from "@/public/about/husky.png";
import DiscordFancyYellowImage from "@/public/about/discord-fancy-yellow.svg";
import DiscordFancyBlueImage from "@/public/about/discord-fancy-blue.svg";
import DiscordYellowImage from "@/public/about/discord-yellow.svg";
import ACMLogoImage from "@/public/about/uwb-acm-logo.png";
import PolygonArea from "../PolygonArea";
import React from "react";
import Button from "../Button";

const AboutSection: React.FC = () => {
    return (
        <section className="flex flex-col gap-y-[2rem] md:gap-y-[4rem]">
            {/* UWBHacks About Container */}
            <div className="relative w-full border-black border-2 bg-[url(/about/AboutSection_Background_1.jpg)] bg-cover bg-center mt-[2rem] md:mt-[4rem]">
                {/* UWBHacks About Section Header */}
                <h2 className="z-[5] absolute top-0 left-0 font-h1 text-4xl px-6 py-3 bg-white border-black border-b-2 border-r-2">
                    About
                </h2>

                {/* UWBHacks About Section Content */}
                <div className="z-[5] w-full flex flex-col md:flex-row justify-center items-center gap-x-8 overflow-hidden">
                    {/* Husky */}
                    <Image
                        className="md:translate-y-2 mt-4"
                        src="/about/husky.png"
                        alt="Husky"
                        width={300}
                        height={300}
                    />
                    {/* UWBHacks About Section Description */}
                    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center px-8 md:p-8">
                        <p className="font-bold text-center md:text-left">
                            UWB Hacks: Saves the World! is an annual hackathon
                            teaching students computer science while preparing
                            them for tech and business careers through hands-on
                            learning and professional networking. Learn more in
                            our Discord!
                        </p>
                        <div className="w-full flex justify-center md:justify-end">
                            <Link
                                href="https://discord.gg/6AapzPNvRy"
                                target="_blank"
                            >
                                <Image
                                    src={DiscordFancyYellowImage}
                                    alt="Discord"
                                    className="hover:[transform:scale(110%)] active:[transform:scale(80%)] transition-transform"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Previous UWBHacks Fun Statistics Container */}
            <div className="w-full grid gap-4 md:gap-8 md:grid-cols-4 text-center font-bold text-xl lg:text-2xl">
                <p className="flex justify-center items-center">
                    $8,800+ in Prizes
                </p>
                <div className="flex flex-col justify-center items-center">
                    <p>11 Schools</p>
                    <p className="text-base">
                        (University/College/High School)
                    </p>
                </div>
                <p className="flex justify-center items-center">350+ Hackers</p>
                <p className="flex justify-center items-center">65 Projects</p>
            </div>

            {/* UWB ACM Description Container */}
            <div className="relative w-full border-black border-2 h-[30vh] bg-[url(/about/AboutSection_Background_2.jpg)] bg-cover bg-center">
                {/* UWBHacks ACM Description Header */}
                <h2 className="z-[5] absolute top-0 left-0 w-full md:w-fit font-bold text-center md:text-left text-lg md:text-xl lg:text-2xl px-6 py-3 bg-white border-black border-b-2 md:border-r-2">
                    UWB Association for Computing Machinery
                </h2>

                {/* UWB ACM Description Content */}
                

                {/* UWB ACM Logo */}
            </div>

            {/* "UWBHacks Save the World" & "Month of Hacking" Container */}
            <div className="w-full flex gap-x-8">
                {/* UWBHacks Save the World */}
                <div className="w-1/2 h-[30vh] bg-green-500"></div>

                {/* Month of Hacking */}
                <div className="w-1/2 h-[30vh] bg-green-500"></div>
            </div>
        </section>
    );
};

const AboutSectionDesktop: React.FC = () => (
    <div
        className={
            'grow [min-height:60vw] gap-2 grid [grid-template-columns:1fr_1fr_1fr] [grid-template-rows:2fr_1fr_1fr_1fr_2fr_1fr_2fr] [grid-template-areas:"top_top_top"_"husky_husky_prizes"_"husky_husky_prizes"_"husky_husky_."_"._acm_acm"_"stats_acm_acm"_"stats_acm_acm"]'
        }
    >
        <PolygonArea
            area="top"
            path="M1.5 1.5H1333.5V74.5562L1.5 125.442V1.5Z"
            clipPath="0.112% 1.196%,100% 1.196%,100% 59.435%,0.112% 100%,0.112% 1.196%"
            viewBox="0 0 1335 127"
        >
            <div className="absolute [top:10%] lg:[top:20%] [left:50px]">
                <h2 className="[color:#49B2F8] [font-family:san-marino-beach] [font-size:calc(1rem_+_3vw)]">
                    About
                </h2>
            </div>
        </PolygonArea>

        <PolygonArea
            area="husky"
            path="M1.5 469.5V48.4192L846.5 1.58544V302.542L486.279 469.5H1.5Z"
            clipPath="0.177% 100%,0.177% 10.313%,100% 0.338%,100% 64.439%,57.446% 100%,0.177% 100%"
            viewBox="0 0 848 471"
            width="90%"
            height="150%"
        >
            <div className="absolute [width:35%] [bottom:-20px] [left:-20px] [transform:rotate(180deg)]">
                <Image src={AccentImage} alt="" />
            </div>

            <div className="absolute [width:50%] [bottom:-10%] [left:10px]">
                <Image src={HuskyImage} alt="Husky Mascot" />
            </div>

            <p className="text-left absolute [width:35%] [top:8%] [right:20px] font-inter [font-size:calc(0.1rem_+_0.90vw)]">
                UWB Hacks: Saves the World! is an annual hackathon teaching
                students computer science while preparing them for tech and
                business careers through hands-on learning and professional
                networking. Learn more in our Discord!
            </p>

            <div className="absolute [width:20%] [bottom:calc(-50px_+_8vw)] [right:calc(35%_-_3vw)]">
                <Link href="https://discord.gg/6AapzPNvRy" target="_blank">
                    <Image
                        src={DiscordFancyYellowImage}
                        alt="Discord"
                        className="hover:[transform:scale(110%)] active:[transform:scale(80%)] transition-transform"
                    />
                </Link>
            </div>
        </PolygonArea>

        <PolygonArea
            area="prizes"
            path="M1.5 314.5V13.5198L430.5 1.54246V314.5H1.5Z"
            clipPath="0.348% 100%,0.348% 4.299%,100% 0.49%,100% 100%,0.348% 100%"
            viewBox="0 0 432 316"
            height="140%"
        >
            <div className="flex flex-col [width:100%] [height:100%] [padding-left:20px] lg:[padding-left:50px] [font-size:calc(0.1rem_+_3vw)]">
                <div className="flex-grow" />
                <p>$8,800+ in prizes</p>
                <div className="flex-grow" />
                <p>11 Schools</p>
                <p className="[font-size:calc(0.1rem_+_1.25vw)]">
                    (University/College/High School)
                </p>
                <div className="flex-grow" />
            </div>
        </PolygonArea>

        <PolygonArea
            area="stats"
            path="M456.5 1.5H1.5V252.5H456.5V1.5Z"
            clipPath="100% 0.594%,0.329% 0.594%,0.329% 100%,100% 100%,100% 0.594%"
            viewBox="0 0 458 254"
        >
            <div className="flex flex-col [width:100%] [height:100%] [padding-left:20px] lg:[padding-left:50px] [font-size:calc(0.1rem_+_3vw)]">
                <div className="flex-grow" />
                <p>350+ Hackers</p>
                <div className="flex-grow" />
                <p>65 Projects</p>
                <div className="flex-grow" />
            </div>
        </PolygonArea>

        <PolygonArea
            area="acm"
            path="M829.5 430H1.5V179.974L401.819 1.5H829.5V430Z"
            clipPath="100% 100%,0.181% 100%,0.181% 41.854%,48.441% 0.349%,100% 0.349%,100% 100%"
            viewBox="0 0 831 432"
            width="95%"
            style={{ marginLeft: "auto" }}
        >
            <div className="absolute [width:30%] [right:-20px] [top:-20px]">
                <Image src={AccentImage} alt="" />
            </div>

            <div className="absolute [width:30%] [top:5%] [right:20px]">
                <Image src={ACMLogoImage} alt="ACM at UWB Logo" />
            </div>

            <p className="absolute [right:35%] [top:20%] [width:40%] [min-width:min-content] text-right [line-height:85%] [font-size:calc(0.1rem_+_2.25vw)] [font-family:var(--font-rubik-mono-one)] [color:#49B2F8]">
                UWB Association For Computing Machinery
            </p>

            <p className="text-left absolute [width:60%] [bottom:calc(1%_+_0.75vw)] [left:40px] font-inter [font-size:calc(0.1rem_+_1vw)]">
                UWB ACM is a chapter of the Association of Computing Machinery
                at UWB dedicated to creating events and providing insight into
                academics, research, and careers related to Computer Science.
                Learn more in our Discord!
            </p>

            <div className="absolute [width:20%] [bottom:-10px] [right:calc(40px_+_0.4vw)]">
                <Link href="https://discord.gg/DzWEhESsZw" target="_blank">
                    <Image
                        src={DiscordFancyBlueImage}
                        alt="Discord"
                        className="hover:[transform:scale(110%)] active:[transform:scale(80%)] transition-transform"
                    />
                </Link>
            </div>
        </PolygonArea>
    </div>
);

const AboutSectionMobile: React.FC = () => (
    <div
        className={
            'grow [min-height:160vw] px-[3px] pt-10 gap-2 grid [grid-template-columns:1fr_1fr] [grid-template-rows:1fr_1fr_1fr_1fr_1fr_1fr] [grid-template-areas:"top_top"_"husky_husky"_"husky_husky"_"stats_prizes"_"acm_acm"_"acm_acm"]'
        }
        // TODO: How to represent this with tailwind?
    >
        <PolygonArea
            area="top"
            path="M1 1H322V54.7625L1 91.8777V1Z"
            clipPath="0.311% 1.088%,100% 1.088%,100% 59.604%,0.311% 100%,0.311% 1.088%"
            viewBox="0 0 323 93"
            height="120%"
        >
            <div className="absolute [top:15%] [left:30px]">
                <h2 className="[color:#49B2F8] [font-family:san-marino-beach] [font-size:calc(1rem_+_5vw)]">
                    About
                </h2>
            </div>
        </PolygonArea>

        <PolygonArea
            area="husky"
            path="M1 180.5V38.8909L323 1.62241V180.5H183H1Z"
            clipPath="0.31% 100%,0.31% 21.546%,100% 0.899%,100% 100%,56.656% 100%,0.31% 100%"
            viewBox="0 0 324 182"
            height="110%"
            style={{ bottom: "10%" }}
        >
            <div className="absolute [width:35%] [bottom:-20px] [left:-20px] [transform:rotate(180deg)]">
                <Image src={AccentImage} alt="" />
            </div>

            <div className="absolute [width:50%] [bottom:-10%] [left:10px]">
                <Image src={HuskyImage} alt="Husky Mascot" />
            </div>

            <p className="text-right absolute [width:35%] [height:60%] [top:10%] [right:20px] [font-family:h2-font] [font-size:calc(0.5rem_+_0.4vw)] [padding-top:5px]">
                UWB: Saves the World! is an annual hackathon teaching students
                computer science while preparing them for tech and business
                careers through hands-on learning and professional networking.
                Learn more here!
            </p>

            <div className="absolute [width:30%] [bottom:10px] [right:10px]">
                <Link href="https://discord.gg/6AapzPNvRy" target="_blank">
                    <Image
                        src={DiscordYellowImage}
                        alt="Discord"
                        className="hover:[transform:scale(110%)] active:[transform:scale(80%)] transition-transform"
                    />
                </Link>
            </div>
        </PolygonArea>

        <PolygonArea
            area="prizes"
            path="M152 1H1.00009V81H152V1Z"
            clipPath="100% 1.235%,0.658% 1.235%,0.658% 100%,100% 100%,100% 1.235%"
            viewBox="0 0 154 82"
        >
            <div className="flex flex-col [width:100%] [height:100%] [padding-left:20px] lg:[padding-left:50px] [font-size:calc(0.3rem_+_3vw)]">
                <div className="flex-grow" />
                <p>$8,800+ prizes</p>
                <div className="flex-grow" />
                <p>11 Schools</p>
                <p className="[font-size:calc(0.2rem_+_1.25vw)]">
                    (University/College/High School)
                </p>
                <div className="flex-grow" />
            </div>
        </PolygonArea>

        <PolygonArea
            area="stats"
            path="M152 1H1.00009V81H152V1Z"
            clipPath="100% 1.235%,0.658% 1.235%,0.658% 100%,100% 100%,100% 1.235%"
            viewBox="0 0 154 82"
        >
            <div className="flex flex-col [width:100%] [height:100%] [padding-left:20px] lg:[padding-left:50px] [font-size:calc(0.3rem_+_3vw)]">
                <div className="flex-grow" />
                <p>350+ Hackers</p>
                <div className="flex-grow" />
                <p>65 Projects</p>
                <div className="flex-grow" />
            </div>
        </PolygonArea>

        <PolygonArea
            area="acm"
            path="M322 168H1V1H156.058H322V168Z"
            clipPath="100% 100%,0.311% 100%,0.311% 0.595%,48.465% 0.595%,100% 0.595%,100% 100%"
            viewBox="0 0 323 169"
        >
            <div className="absolute [width:30%] [right:-20px] [top:-20px]">
                <Image src={AccentImage} alt="" />
            </div>

            <div className="absolute [width:30%] [top:5%] [right:20px]">
                <Image src={ACMLogoImage} alt="ACM at UWB Logo" />
            </div>

            <p className="absolute [left:10px] [top:10px] [width:40%] [min-width:min-content] text-left [line-height:85%] [font-size:calc(0.8rem_+_0.4vw)] [font-family:var(--font-rubik-mono-one)] [color:#49B2F8]">
                UWB Association For Computing Machinery
            </p>

            <p className="text-left absolute [width:60%] [bottom:calc(1%_+_0.75vw)] [left:10px] [font-family:h2-font] [font-size:calc(0.2rem_+_2vw)]">
                UWB ACM is a chapter of the Association of Computing Machinery
                at UWB dedicated to creating events and providing insight into
                academics, research, and careers related to Computer Science.
                Learn more here.
            </p>

            <div className="absolute [width:25%] [bottom:5px] [right:20px]">
                <Link href="https://discord.gg/DzWEhESsZw" target="_blank">
                    <Image
                        src={DiscordYellowImage}
                        alt="Discord"
                        className="hover:[transform:scale(110%)] active:[transform:scale(80%)] transition-transform"
                    />
                </Link>
            </div>
        </PolygonArea>
    </div>
);

export default AboutSection;
