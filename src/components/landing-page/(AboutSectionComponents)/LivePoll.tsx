import React, { RefObject, useEffect } from "react";
import QuestionMark from "../(TracksSectionComponents)/QuestionMark";

type LivePollProps = {
    livePollRef: RefObject<HTMLDivElement | null>;
};

const LivePoll = ({ livePollRef }: LivePollProps) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.strawpoll.com/dist/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            ref={livePollRef}
            className="relative p-6 md:p-10 border-black border-t-4"
        >
            <QuestionMark className="z-0 w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] top-[10%] left-[8%] rotate-[19deg]" />
            <QuestionMark className="z-0 w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] top-[20%] right-[14%] -rotate-[15deg]" />
            <QuestionMark className="z-0 w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] bottom-[10%] left-[16%] rotate-[28deg]" />
            <QuestionMark className="z-0 w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] bottom-[3%] right-[20%] -rotate-[40deg]" />

            <div
                className="strawpoll-embed z-10 relative"
                id="strawpoll_e6Z2AkDBEgN"
                style={{
                    maxWidth: "640px",
                    width: "95%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <iframe
                    title="StrawPoll Embed"
                    id="strawpoll_iframe_e6Z2AkDBEgN"
                    src="https://strawpoll.com/embed/e6Z2AkDBEgN"
                    className="h-[600px] md:h-[550px]"
                    style={{
                        position: "static",
                        visibility: "visible",
                        display: "block",
                        width: "100%",
                        flexGrow: 1,
                    }}
                >
                    Loading...
                </iframe>
            </div>
        </div>
    );
};

export default LivePoll;
