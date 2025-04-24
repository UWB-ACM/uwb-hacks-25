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
            id="strawpoll_BJnXVRlxPZv"
            style={{
                height: "544px",
                maxWidth: "640px",
                width: "95%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <iframe
                title="StrawPoll Embed"
                id="strawpoll_iframe_BJnXVRlxPZv"
                src="https://strawpoll.com/embed/BJnXVRlxPZv"
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
