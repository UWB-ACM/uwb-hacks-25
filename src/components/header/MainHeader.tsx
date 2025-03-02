"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SideNav from "./SideNav";
import "../../styles/header.css";

type HeaderProps = {
  refs?: {
    [key: string]: React.RefObject<HTMLDivElement | null>;
  };
};

export default function Header({ refs }: HeaderProps) {
  const [sideNavState, setSideNavState] = useState(false);

  const Desktop = () => {
    return (
      <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full ">
        <button
          className="font-h1 text-5xl scale-up-animation"
          onClick={() => {
            router.push("/");
          }}
        >
          {/* Using spans so the text stays inline when compressed */}
          <h1>
            <span>UWB</span>
            <span className="ml-3">Hacks</span>
          </h1>
        </button>

        <div className="hidden md:flex gap-x-10 ">
          <button
            className="font-h3 font-medium text-lg scale-up-animation"
            onClick={() => {
              // scroll down to about section
              if (refs) {
                refs["About"].current?.scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                router.push("/#about");
              }
            }}
          >
            About
          </button>

          <button
            className="font-h3 font-medium text-lg scale-up-animation"
            onClick={() => {
              // scroll down to tracks section
              if (refs) {
                refs["Tracks"].current?.scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                router.push("/#tracks");
              }
            }}
          >
            Tracks
          </button>

          <button
            className="font-h3 font-medium text-lg scale-up-animation"
            onClick={() => {
              // scroll down to schedule section
              if (refs) {
                refs["Schedule"].current?.scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                router.push("/#schedule");
              }
            }}
          >
            Schedule
          </button>

          <button
            className="font-h3 font-medium text-lg scale-up-animation"
            onClick={() => {
              //scroll down to faq section
              if (refs) {
                refs["FAQ"].current?.scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                router.push("/#faq");
              }
            }}
          >
            FAQ
          </button>

          <button
            className="font-h3 font-medium text-lg scale-up-animation"
            onClick={() => {
              router.push("/staff");
            }}
          >
            Login
          </button>
          {/* <button
                        className="font-h3 font-medium m-0"
                        style={{fontSize: "5px"}}
                        onClick={() => {
                            router.push("/api/auth/google");
                        }}
                    >
                        Auth
                    </button> */}
        </div>
      </nav>
    );
  };

  const Mobile = () => {
    return (
      <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full min-w-72">
        <button
          className="font-h1 text-3xl tilt-animation scale-up-animation"
          onClick={() => {
            router.push("/");
          }}
        >
          {/* Using spans so the text stays inline when compressed */}
          <h1>
            <span>UWB</span>
            <span className="ml-3">Hacks</span>
          </h1>
        </button>

        <button
          className="bg-gray-200 w-12 h-12 flex justify-center items-center"
          onClick={() => {
            setSideNavState(true);
          }}
        >
          X
        </button>
      </nav>
    );
  };

  const router = useRouter();
  // sort users in descending order by their hackeroon count
  return (
    <>
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="block md:hidden">
        <Mobile />
      </div>
      {sideNavState && <SideNav setSideNavState={setSideNavState} />}
    </>
  );
}
