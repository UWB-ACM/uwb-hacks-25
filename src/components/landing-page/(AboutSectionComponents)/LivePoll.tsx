import React, { useEffect } from "react";

const LivePoll: React.FC = () => {
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
            className="strawpoll-embed"
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
    );
};

export default LivePoll;
