"use client";

import { useRouter } from "next/navigation";
import { FaGift } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";

export default function Page() {
  const router = useRouter();

  return (
    <div className="w-screen py-4 px-8 grid place-content-center">
      <h1 className="text-4xl text-center">Staff Dashboard</h1>
      {/* Container for Buttons */}
      <div className="w-[95vw] flex flex-col items-center md:flex-row gap-y-4 md:gap-x-4 justify-between mt-6">
        <button
          className="h-[20vh] w-[70vw] md:h-[50vh] md:w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center place-items-center gap-y-2 hover:bg-neutral-200 duration-300"
          onClick={() => {
            router.push("staff/buy-prizes");
          }}
        >
          <FaGift className="h-[30px] w-[30px]" />
          Buy Prizes
        </button>
        <button
          className="h-[20vh] w-[70vw] md:h-[50vh] md:w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center place-items-center gap-y-2 hover:bg-neutral-200 duration-300"
          onClick={() => {
            router.push("staff/transfer-hackeroons");
          }}
        >
          <BiTransferAlt className="h-[40px] w-[40px]" />
          Transfer Hackeroons
        </button>
        <button
          className="h-[20vh] w-[70vw] md:h-[50vh] md:w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center place-items-center gap-y-2 hover:bg-neutral-200 duration-300"
          onClick={() => {
            router.push("staff/modify-user");
          }}
        >
          <FaUserEdit className="h-[30px] w-[30px]" />
          Modify User Account
        </button>
      </div>
    </div>
  );
}
