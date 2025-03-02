import React from "react";
import { useRouter } from "next/navigation";

function SideNav({
  setSideNavState,
}: {
  setSideNavState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();

  return (
    <div
      className={`bg-orange-300 absolute w-screen h-screen p-5 font-h1 text-3xl`}
      style={{ zIndex: 1000 }}
    >
      <button className="" onClick={() => setSideNavState(false)}>
        X
      </button>
      <div className="flex flex-col gap-y-5 justify-around h-1/2 pt-[5rem]">
        <button
          onClick={() => {
            router.push("/");
            setSideNavState(false);
          }}
          className="text-white font-h1 text-3xl"
        >
          About
        </button>
        <button
          onClick={() => {
            router.push("/");
            setSideNavState(false);
          }}
          className="text-white font-h1 text-3xl"
        >
          Tracks
        </button>
        <button
          onClick={() => {
            router.push("/");
            setSideNavState(false);
          }}
          className="text-white font-h1 text-3xl"
        >
          Schedule
        </button>
        <button
          onClick={() => {
            router.push("/");
            setSideNavState(false);
          }}
          className="text-white font-h1 text-3xl"
        >
          FAQ
        </button>
        <button
          onClick={() => {
            router.push("/staff");
            setSideNavState(false);
          }}
          className="text-white font-h1 text-3xl"
        >
          Staff
        </button>
      </div>
    </div>
  );
}

export default SideNav;
