"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const targetDate = new Date("2025-04-25T00:00:00");

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({
                    days: days.toString().padStart(2, "0"),
                    hours: hours.toString().padStart(2, "0"),
                    minutes: minutes.toString().padStart(2, "0"),
                    seconds: seconds.toString().padStart(2, "0"),
                });
            }
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="rounded-lg p-6 flex flex-col items-center">
            <h2 className="sm:text-4xl text-xl self-center font-bold text-blue-600 mb-4">
                READY TO LAUNCH IN...
            </h2>
            <div className="flex justify-between w-full max-w-[400px]">
                <div>
                    <div className="text-xs sm:text-sm text-gray-600">DAYS</div>
                    <div className="text-lg sm:text-4xl font-mono font-bold">
                        {timeLeft.days}
                    </div>
                </div>
                <div>
                    <div className="text-xs sm:text-sm text-gray-600">
                        HOURS
                    </div>
                    <div className="text-lg sm:text-4xl font-mono font-bold">
                        {timeLeft.hours}
                    </div>
                </div>
                <div>
                    <div className="text-xs sm:text-sm text-gray-600">
                        MINUTES
                    </div>
                    <div className="text-lg sm:text-4xl font-mono font-bold">
                        {timeLeft.minutes}
                    </div>
                </div>
                <div>
                    <div className="text-xs sm:text-sm text-gray-600">
                        SECONDS
                    </div>
                    <div className="text-lg sm:text-4xl font-mono font-bold">
                        {timeLeft.seconds}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
