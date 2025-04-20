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
            >
                Schedule
            </PanelHeader>
            <PanelContent
                parentPanelId="schedulePanel"
                className="grid gap-y-6 gap-x-6 md:grid-cols-3"
            >
                <ScheduleCard
                    day="DAY 1"
                    date="4/25 FRI"
                    spirit="Fandom Day"
                    events={[
                        {
                            time: "10:00 AM - 11:45 AM",
                            description: "Check-In",
                        },
                        {
                            time: "10:00 AM - 11:45 AM",
                            description:
                                "(Optional) GDG Team Formation Activity",
                        },
                        {
                            time: "12:00 PM - 1:00 PM",
                            description: "Opening Ceremony",
                        },
                        {
                            time: "1:00 PM - 1:30 PM",
                            description: "Opening Ceremony",
                        },
                        {
                            time: "1:30 PM - 4:00 PM",
                            description: "ARC is Closed",
                        },
                        {
                            time: "1:30 PM - 2:30 PM",
                            description: "Lunch",
                        },
                        {
                            time: "2:30 PM - 4:00 PM",
                            description: "In-Person Work Time",
                        },
                        {
                            time: "4:00 PM - 8:00 PM",
                            description: "ARC is Open",
                        },
                        {
                            time: "4:00 PM - 5:00 PM",
                            description: "Activity",
                        },
                        {
                            time: "5:00 PM - 8:00 PM",
                            description: "In-Person Work Time",
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
                            description: "Check-In",
                        },
                        {
                            time: "12:00 PM - 12:30 PM",
                            description: "Guest Speaker",
                        },
                        {
                            time: "12:30 PM - 1:00 PM",
                            description: "Lunch",
                        },
                        {
                            time: "1:00 PM - 3:00 PM",
                            description: "Activity",
                        },
                        {
                            time: "4:00 PM - 8:00 PM",
                            description: "In-Person Work Time",
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
                            description: "Check-In",
                        },
                        {
                            time: "10:00 AM - 10:30 AM",
                            description: "Closing Ceremony",
                        },
                        {
                            time: "10:50 AM - 12:50 PM",
                            description: "Judging, Demo Day, and Tabling",
                        },
                        {
                            time: "1:00 PM - 2:00 PM",
                            description: "Networking Luncheon",
                        },
                        {
                            time: "2:00 PM - 2:30 PM",
                            description: "Group Photo",
                        },
                        {
                            time: "2:30 PM - 4:00 PM",
                            description: "Finalist Presentations",
                        },
                        {
                            time: "4:00 PM - 4:30 PM",
                            description: "Final Deliberations",
                        },
                        {
                            time: "4:30 PM - 5:00 PM",
                            description: "Winners Announced",
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
    events: { time: string; description: string }[];
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
        <div className="relative border-2 border-black bg-white p-4 md:p-5 flex flex-col min-h-[350px] md:min-h-[450px] overflow-hidden schedule-card transition-transform hover:scale-105 hover:border-yellow-500 hover:bg-[#fdf4c5]">
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
                    {events.map((event, index) => (
                        <div key={index} className="flex">
                            <span className="text-sm md:text-base text-black w-[45%] pr-2 flex-shrink-0">
                                {event.time}
                            </span>
                            <span className="text-sm md:text-base text-black">
                                {event.description}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 italic">No events scheduled</p>
            )}

            <p className="text-base md:text-lg font-bold text-yellow-500 text-center my-2">
                {spirit}
            </p>
        </div>
    );
};

export default ScheduleSection;
