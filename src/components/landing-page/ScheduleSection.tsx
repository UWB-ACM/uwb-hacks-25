import React from "react";
import Image from "next/image";
import AccentImage from "@/public/accent.webp";
import Panel from "./(AboutSectionComponents)/Panel/Panel";
import PanelHeader from "./(AboutSectionComponents)/Panel/Header";
import PanelContent from "./(AboutSectionComponents)/Panel/Content";

const ScheduleSection: React.FC = () => {
    const panelMargin = "mt-12 md:mt-16";

    return (
        <Panel id="schedulePanel" panelColor="white" className={panelMargin}>
            <PanelHeader
                parentPanelId="schedulePanel"
                className="text-[#49B2F8] border-none lg:w-full pb-0 bg-transparent"
                isSectionHeader
                long
            >
                Schedule
            </PanelHeader>
            <PanelContent
                parentPanelId="schedulePanel"
                className="grid gap-y-6 gap-x-6 md:grid-cols-3"
                long
            >
                <ScheduleCard
                    day="DAY 1"
                    date="4/25 FRI"
                    spirit="Fandom Day"
                    events={[
                        {
                            time: "10:00 AM - 11:45 AM",
                            name: "Check-In and Team Formation",
                            description:
                                "Participants check in, enjoy coffee and snacks, and can join an optional team formation session.",
                            location: "ARC Overlook",
                        },
                        {
                            time: "12:00 PM - 1:30 PM",
                            name: "Opening Ceremony",
                            description:
                                "Kick-off the event with an exciting opening ceremony.",
                            location: "ARC Overlook",
                        },
                        {
                            time: "1:30 PM - 4:00 PM",
                            name: "ARC Closes for Setup",
                            description:
                                "The ARC will be closed for event setup.",
                            location: "Relocate to NCEC or other locations",
                        },
                        {
                            time: "1:30 PM - 2:30 PM",
                            name: "Lunch",
                            description:
                                "Enjoy lunch in the NCEC with fellow participants.",
                            location: "North Creek Event Center (NCEC)",
                        },
                        {
                            time: "2:30 PM - 4:00 PM",
                            name: "In-Person Work Time",
                            description:
                                "Teams may continue working on their projects anywhere outside the ARC",
                            location: "Anywhere on Campus",
                        },
                        {
                            time: "4:30 PM - 5:00 PM",
                            name: "Fireside Chat w/ Cameron Bielstein",
                            description:
                                "Join Cameron Bielstein, Engineering Manager at Allen Institute, for an engaging fireside chat.",
                            location: "North Creek Event Center (NCEC)",
                        },
                        {
                            time: "4:00 PM - 8:00 PM",
                            name: "ARC Reopens, In-Person Work Time",
                            description:
                                "The ARC reopens for continued in-person work. Food and drinks will be provided.",
                            location: "ARC Overlook",
                        },
                    ]}
                    accentPosition="bottom-left"
                />
                <ScheduleCard
                    day="DAY 2"
                    date="4/26 SAT"
                    spirit="Husky Spirit Day"
                    events={[
                        {
                            time: "10:00 AM - 11:30 AM",
                            name: "Check-In",
                            description:
                                "Participants check in for the second day of the event.",
                            location: "ARC Overlook",
                        },
                        {
                            time: "12:00 PM - 12:30 PM",
                            name: "Guest Speaker",
                            description:
                                "A guest speaker shares insights and inspiration.",
                            location: "North Creek Event Center (NCEC)",
                        },
                        {
                            time: "12:30 PM - 1:00 PM",
                            name: "Lunch",
                            description: "Lunch break for participants.",
                            location: "ARC Overlook + NCEC",
                        },
                        {
                            time: "1:00 PM - 3:00 PM",
                            name: "Optional Activity",
                            description:
                                "Cascadia Programmers: Talk with Kody the Chatbot",
                            location: "ARC Overlook",
                        },
                        {
                            time: "2:00 PM - 4:00 PM",
                            name: "Optional Activity",
                            description:
                                "Photoshoot with Holly the Husky!",
                            location: "ARC Overlook",
                        },
                        {
                            time: "4:00 PM - 6:00 PM",
                            name: "Optional Activity",
                            description: "Badminton Social Club",
                            location: "ARC Overlook",
                        },
                        {
                            time: "4:00 PM - 8:00 PM",
                            name: "In-Person Work Time + Hackeroon Shop Opens",
                            description:
                                "Teams continue working on their projects in person. The Hackeroon Shop opens for participants to redeem hackeroons for prizes.",
                            location: "ARC Overlook",
                        },
                    ]}
                    accentPosition="bottom-left"
                />
                <ScheduleCard
                    day="DAY 3"
                    date="4/27 SUN"
                    spirit="Professional Day"
                    events={[
                        {
                            time: "9:00 AM - 10:00 AM",
                            name: "Check-In",
                            description:
                                "Participants check in for the final day of the event.",
                            location: "ARC Overlook",
                        },
                        {
                            time: "9:00 AM - 2:00 PM",
                            name: "Hackeroon Shop Opens",
                            description:
                                "Participants can redeem Hackeroon tickets for prizes",
                            location: "ARC Overlook",
                        },
                        {
                            time: "10:00 AM - 10:30 AM",
                            name: "Hacking Concludes",
                            description: "All teams submit their projects",
                            location: "ARC Overlook",
                        },
                        {
                            time: "10:50 AM - 12:50 PM",
                            name: "Judging, Demo Day, and Tabling",
                            description:
                                "Teams present their projects for judging. During judging, participants can explore demo tables showcasing projects from other teams.",
                            location: "ARC Overlook",
                        },
                        {
                            time: "1:00 PM - 2:00 PM",
                            name: "Networking Luncheon",
                            description:
                                "During lunch, participants can network with judges and industry professionals.",
                            location: "Plaza",
                        },
                        {
                            time: "2:00 PM - 2:30 PM",
                            name: " Massive Group Photo",
                            description:
                                "Take a group photo to commemorate the event.",
                            location: "Field",
                        },
                        {
                            time: "2:30 PM - 4:00 PM",
                            name: "Finalist Presentations",
                            description:
                                "Finalists present their projects to the judges.",
                            location: "ARC Overlook",
                        },
                        {
                            time: "4:00 PM - 4:30 PM",
                            name: "Final Deliberations",
                            description:
                                "Judges deliberate to select the winners.",
                            location: "ARC Overlook",
                        },
                        {
                            time: "4:30 PM - 5:00 PM",
                            name: "Winners Announced",
                            description: "Winners of the event are announced.",
                            location: "ARC Overlook",
                        },
                    ]}
                    accentPosition="bottom-left"
                />
            </PanelContent>
        </Panel>
    );
};

interface ScheduleCardProps {
    day: string;
    date: string;
    spirit: string;
    events: {
        time: string;
        name: string;
        description: string;
        location: string;
    }[];
    accentPosition?: "bottom-left" | "bottom-right" | "top-right";
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
    day,
    date,
    spirit,
    events,
    accentPosition,
}) => {
    return (
        <div className="relative border-2 border-black bg-white p-4 md:p-5 flex flex-col min-h-[350px] md:min-h-[450px] overflow-hidden schedule-card transition-transform">
            <Image
                src={AccentImage || "/placeholder.svg"}
                alt=""
                className={`w-[40px] h-[30px] absolute rotate-180 ${
                    accentPosition === "bottom-left"
                        ? "bottom-0 left-0"
                        : accentPosition === "bottom-right"
                          ? "bottom-0 right-0"
                          : "top-0 right-0 rotate-180"
                }`}
            />

            <div className="flex justify-between items-start mb-2 relative">
                <h2 className="text-xl md:text-3xl font-light text-black">
                    {day}
                </h2>

                <div className="flex flex-col items-end -mt-2">
                    <span className="text-base md:text-lg font-bold text-yellow-500">
                        {date.split(" ")[0]}
                    </span>
                    <span className="text-lg md:text-xl font-bold text-yellow-500 uppercase">
                        {date.split(" ")[1]}
                    </span>
                </div>
            </div>

            <div className="border-t border-black mb-4"></div>

            {events.length > 0 ? (
                <div className="flex-grow space-y-2 mb-2">
                    <p className="text-base md:text-2xl font-san-marino-beach text-yellow-500 text-center my-2">
                        {spirit}
                    </p>

                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="border-gray-300 hover:scale-[102%] transition cursor-pointer hover:border-yellow-500 hover:bg-[#fdf4c5] bg-white border "
                        >
                            <div className="flex w-full">
                                <div className="justify-items-center w-full bg-orange-400 flex shadow-sm p-2 px-4">
                                    <span className="grow text-xs text-white font-opensans font-bold w-[45%] pr-2 flex-shrink-0">
                                        {event.time}
                                    </span>
                                    <span className="text-xs self-end font-opensans font-bold text-white ">
                                        {event.name}
                                    </span>
                                </div>
                            </div>
                            <div className="px-2 pt-2 font-bold text-sm text-gray-500">
                                Location: {event.location}
                            </div>
                            <div className="p-2 text-sm text-gray-500">
                                {event.description}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 italic">No events scheduled</p>
            )}
        </div>
    );
};

export default ScheduleSection;
