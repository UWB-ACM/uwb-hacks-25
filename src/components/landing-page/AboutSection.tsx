import React, { CSSProperties, PropsWithChildren } from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
    return (
        <div
            className={
                'grow [min-height:60vw] p-10 gap-2 grid [grid-template-columns:1fr_1fr_1fr] [grid-template-rows:2fr_1fr_1fr_1fr_2fr_1fr_2fr] [grid-template-areas:"top_top_top"_"husky_husky_prizes"_"husky_husky_prizes"_"husky_husky_."_"._acm_acm"_"stats_acm_acm"_"stats_acm_acm"]'
            }
            // TODO: How to represent this with tailwind?
            style={{
                background:
                    "linear-gradient(180deg, rgba(198,61,23,1) 0%, rgba(255,230,162,1) 100%)",
            }}
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
                    <Image src="/accent.webp" alt="" width={586} height={610} />
                </div>

                <div className="absolute [width:50%] [bottom:-10%] [left:10px]">
                    <Image
                        src="/about/husky.png"
                        alt="Husky Mascot"
                        width={964}
                        height={902}
                    />
                </div>

                <p className="text-right absolute [width:35%] [top:10%] [right:20px] [font-family:h2-font] [font-size:calc(0.1rem_+_1vw)]">
                    UWB: Saves the World! is an annual hackathon teaching
                    students computer science while preparing them for tech and
                    business careers through hands-on learning and professional
                    networking. Learn more here!
                </p>

                <div className="absolute [width:20%] [bottom:calc(10%_+_1.5vw)] [right:20%]">
                    <Image
                        src="/about/discord-fancy-yellow.svg"
                        alt="Discord"
                        width={168}
                        height={122}
                    />
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
                    <p>$8,800+ prizes</p>
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
                    <Image src="/accent.webp" alt="" width={586} height={610} />
                </div>

                <div className="absolute [width:30%] [top:5%] [right:20px]">
                    <Image
                        src="/about/uwb-acm-logo.png"
                        alt="ACM at UWB Logo"
                        width={750}
                        height={750}
                    />
                </div>

                <p className="absolute [right:35%] [top:20%] [width:40%] [min-width:min-content] text-right [line-height:85%] [font-size:calc(0.2rem_+_2.5vw)] [font-family:var(--font-rubik-mono-one)] [color:#49B2F8]">
                    UWB Association For Computing Machinery
                </p>

                <p className="text-left absolute [width:60%] [bottom:calc(1%_+_0.75vw)] [left:40px] [font-family:h2-font] [font-size:calc(0.1rem_+_1vw)]">
                    UWB ACM is a chapter of the Association of Computing
                    Machinery at UWB dedicated to creating events and providing
                    insight into academics, research, and careers related to
                    Computer Science. Learn more here.
                </p>

                <div className="absolute [width:20%] [bottom:-10px] [right:calc(40px_+_0.4vw)]">
                    <Image
                        src="/about/discord-fancy-blue.svg"
                        alt="Discord"
                        width={168}
                        height={122}
                    />
                </div>
            </PolygonArea>
        </div>
    );
};

const PolygonArea: React.FC<
    PropsWithChildren<{
        area: string;
        path: string;
        clipPath: string;
        viewBox: string;
        width?: string;
        height?: string;
        style?: CSSProperties;
    }>
> = ({ area, path, clipPath, viewBox, width, height, style, children }) => {
    return (
        <div
            className={`relative`}
            style={{
                gridArea: area,
                width: width ?? "100%",
                height: height ?? "100%",
                ...(style ?? {}),
            }}
        >
            <svg
                className="absolute z-10"
                viewBox={viewBox}
                preserveAspectRatio="none"
                width="100%"
                height="100%"
            >
                <path d={path} fill="white" />
            </svg>

            <div
                className={`absolute z-20 [width:100%] [height:100%]`}
                style={{ clipPath: `polygon(${clipPath})` }}
            >
                {children}
            </div>

            <svg
                className="absolute z-30"
                viewBox={viewBox}
                preserveAspectRatio="none"
                width="100%"
                height="100%"
            >
                <path
                    d={path}
                    fill="#00000000"
                    stroke="black"
                    strokeWidth="3"
                />
            </svg>
        </div>
    );
};

export default AboutSection;
