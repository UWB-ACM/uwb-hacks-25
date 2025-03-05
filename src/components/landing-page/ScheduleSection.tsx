import React from "react";
import Image from "next/image";

const ScheduleSection: React.FC = () => {
    return (
        <>
            <div className="self-center col-span-1 md:col-span-3 mb-4 md:mb-6">
                <Image
                    src="/scheduleSection/sched-text.svg"
                    width={439}
                    height={75}
                    alt="Schedule"
                    className="drop-shadow-md w-[250px] md:w-[400px] mx-auto md:mx-auto lg:ml-0 lg:text-left"
                />
            </div>
            <div className="bg-[#FBE4A6] p-6 md:p-10 grid gap-y-6 gap-x-6 [grid-template-columns:repeat(1,1fr)] md:[grid-template-columns:repeat(3,1fr)] mb-20">
                <ScheduleCard
                    day="DAY 1"
                    date="4/12 FRI"
                    events={[
                        { time: "10:00 AM", description: "Check-In" },
                        { time: "11:00 AM", description: "Opening Ceremony" },
                        { time: "12:00 PM", description: "Event" },
                        { time: "1:00 PM", description: "Event" },
                        { time: "2:30 PM", description: "Event" },
                        { time: "4:00 PM", description: "Event" },
                        { time: "5:00 PM", description: "Event" },
                    ]}
                    accentPosition="bottom-left"
                />
                <ScheduleCard
                    day="DAY 2"
                    date="4/13 SAT"
                    events={[
                        { time: "10:00 AM", description: "Check-In" },
                        { time: "12:00 PM", description: "Event" },
                        { time: "1:00 PM", description: "Event" },
                        { time: "4:30 PM", description: "Event" },
                        { time: "5:00 PM", description: "Event" },
                    ]}
                    accentPosition="bottom-left"
                />
                <ScheduleCard
                    day="DAY 3"
                    date="4/14 SUN"
                    events={[
                        { time: "10:00 AM", description: "Check-In" },
                        { time: "11:45 AM", description: "Event" },
                        { time: "12:30 PM", description: "Event" },
                        { time: "3:00 PM", description: "Event" },
                        { time: "4:30 PM", description: "Event" },
                        { time: "5:00 PM", description: "Event" },
                    ]}
                    accentPosition="bottom-left"
                />
            </div>
        </>
    );
};

interface ScheduleCardProps {
    day: string;
    date: string;
    events: { time: string; description: string }[];
    accentPosition?: "bottom-left" | "bottom-right" | "top-right";
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
    day,
    date,
    events,
    accentPosition,
}) => {
    return (
        <div className="relative border-2 border-black bg-white p-4 md:p-6 flex flex-col min-h-[300px] md:min-h-[400px] overflow-hidden schedule-card transition-transform hover:scale-105 hover:border-yellow-500 hover:bg-[#fdf4c5]">
            <Image
                src="/scheduleSection/sched-accent.svg"
                width={191}
                height={166}
                alt="Accent Graphic"
                className={`w-[80px] h-[70px] absolute ${
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
                <div className="flex-grow">
                    {events.map((event, index) => (
                        <div key={index} className="flex justify-between">
                            <span className="text-sm md:text-base text-black">
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
        </div>
    );
};

export default ScheduleSection;
