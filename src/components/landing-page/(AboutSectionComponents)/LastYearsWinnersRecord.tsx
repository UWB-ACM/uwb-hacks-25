import React from "react";
import Button from "../../Button";

type LastYearsWinnersRecordProps = {
    name: string;
    linkedInPost: string;
    buttonColor?: "blue" | "yellow";
};

export default function LastYearsWinnersRecord({
    name,
    linkedInPost,
    buttonColor = "blue",
}: LastYearsWinnersRecordProps) {
    return (
        <div className="flex flex-col lg:flex-row justify-around items-center">
            <p className="text-center text-lg lg:text-xl font-h1">{name}</p>
            <div className="flex justify-center lg:justify-end">
                <Button
                    href={linkedInPost}
                    target="_blank"
                    color={buttonColor}
                    fontSize={18}
                >
                    Learn more!
                </Button>
            </div>
        </div>
    );
}
