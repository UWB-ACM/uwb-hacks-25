import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transaction Complete | UWB Hacks 25",
};

export default function Page() {
  return (
    <div className="h-screen w-full grid place-content-center">
      <div className="h-[50vh] w-[50vw] rounded-xl border-2 border-black p-4">
        <h1 className="grid place-content-center h-[70%] text-center text-4xl">
          Transaction Complete!
        </h1>
        <div className="h-[30%] text-2xl text-white grid place-content-center">
          <Link href="/staff">
            <button className="bg-green-500 border-[1px] border-black rounded-xl p-4">
              Return to Staff Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
