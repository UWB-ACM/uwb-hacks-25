import React from "react";

const SponsorsSection = () => {
    return (
        <div className="border-black border-[0.25rem] p-[10rem] mb-[1rem] mt-[1rem] justify-center grid sm:grid-cols-2 sm:gap-x-[5rem] sm:flex">
            {/* Sponsors Section */}
            {/* sponsor grid */}
            <div className="grid gap-3 md:grid-cols-5 justify-items-center items-center">
                {/* sponsor logo container, place logo w/ img tag inside of each of these divs */}
                <div className="flex justify-center items-center p-6 transition">
                    sponsor1
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor2
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor3
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor4
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor5
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor6
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor3
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor4
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor5
                </div>

                <div className="flex justify-center items-center p-6 transition">
                    sponsor6
                </div>
            </div>
        </div>
    );
};

export default SponsorsSection;
