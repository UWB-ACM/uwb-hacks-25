"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SideNav from "./SideNav";

export default function Header() {
  const [sideNavState, setSideNavState] = useState(false);

  const Desktop = () => {
    return (
      <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full">
        <button
          className="font-h1 text-5xl"
          onClick={() => {
            router.push("/");
          }}
        >
          {/* Using spans so the text stays inline when compressed */}
          <span>UWB</span>
          <span className="ml-3">Hacks</span>
        </button>
        <button
          className="font-h3 font-medium text-lg"
          onClick={() => {
            router.push("/staff/buy-prizes");
          }}
        >
          Buy Prizes
        </button>
        <button
          className="font-h3 font-medium text-lg"
          onClick={() => {
            router.push("/staff/modify-user");
          }}
        >
          Modify User
        </button>
        <button
          className="font-h3 font-medium text-lg"
          onClick={() => {
            router.push("/staff/transfer-hackeroons");
          }}
        >
          Transfer Hackeroons
        </button>
        <button
          className="font-h3 font-medium text-lg"
          onClick={() => {
            router.push("/staff");
          }}
        >
          Dashboard
        </button>
      </nav>
    );
  };

  const Mobile = () => {
    return (
      <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full min-w-72">
        <button
          className="font-h1 text-3xl"
          onClick={() => {
            router.push("/");
          }}
        >
          {/* Using spans so the text stays inline when compressed */}
          <span>UWB</span>
          <span className="ml-3">Hacks</span>
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
