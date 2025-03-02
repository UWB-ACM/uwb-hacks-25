import React from "react";
import Image from "next/image";

const ScheduleSection: React.FC = () => {
    return (
        <div className=" p-10 grid gap-6 [grid-template-columns:repeat(3,1fr)]">
            <div className="col-span-3 flex justify-center">
                <h2 className="[color:#49B2F8] [font-family:san-marino-beach] [font-size:calc(1rem_+_3vw)]">
                    Schedule
                </h2>
            </div>

            <ScheduleCard
                day="DAY 1"
                date="4/12 FRI"
                events={[
                    { time: "10:00AM", description: "Check-In" },
                    { time: "11:00AM", description: "Opening Ceremony" },
                ]}
                accentPosition="bottom-left"
            />
            <ScheduleCard
                day="DAY 2"
                date="4/13 SAT"
                events={[]}
                accentPosition="bottom-right"
            />
            <ScheduleCard
                day="DAY 3"
                date="4/14 SUN"
                events={[]}
                accentPosition="top-right"
            />
        </div>
    );
};

interface ScheduleCardProps {
    day: string;
    date: string;
    events: { time: string; description: string }[];
    accentPosition?: "bottom-left" | "bottom-right" | "top-right";
}

// TODO: Give the ScheduleCard its own height, then set the div around
//       the image to absolute and fill this map in with transforms
//       a left/right/top/bottom.
const positionTransforms = {
    "bottom-left": "[transform:rotate(180deg)]",
    "bottom-right": "[transform:rotate(180deg)]",
    "top-right": "[transform:rotate(180deg)]",
};

const ScheduleCard: React.FC<ScheduleCardProps> = ({
    day,
    date,
    events,
    accentPosition,
}) => {
    return (
        <div className="relative border-2 border-black bg-white p-6 flex flex-col justify-between">
            <div
                className={
                    "[width:20%] [bottom:-20px] [left:-20px] " +
                    positionTransforms[accentPosition ?? "bottom-left"]
                }
            >
                <Image src="/accent.webp" alt="" width={586} height={610} />
            </div>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{day}</h2>
                <span className="text-yellow-500 font-bold">{date}</span>
            </div>

            {events.length > 0 ? (
                events.map((event, index) => (
                    <div key={index} className="flex justify-between">
                        <span>{event.time}</span>
                        <span>{event.description}</span>
                    </div>
                ))
            ) : (
                <p className="text-gray-400 italic">No events scheduled</p>
            )}
        </div>
    );
};

export default ScheduleSection;
