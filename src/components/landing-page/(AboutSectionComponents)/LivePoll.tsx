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
    <div className="flex h-[100vh] border-2 border-black overflow-hidden">
      <div
        className="strawpoll-embed"
        id="strawpoll_wAg3QPRKdy8"
        style={{
          height: "544px",
          maxWidth: "640px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <iframe
          title="StrawPoll Embed"
          id="strawpoll_iframe_wAg3QPRKdy8"
          src="https://strawpoll.com/embed/wAg3QPRKdy8"
          style={{
            position: "static",
            visibility: "visible",
            display: "block",
            width: "100%",
            flexGrow: 1,
          }}
          frameBorder="0"
          allowFullScreen
          allowTransparency
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
};

export default LivePoll;
