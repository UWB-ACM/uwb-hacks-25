import { FaGift } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-screen py-4 px-8 grid place-content-center">
            <h1 className="text-4xl text-center">Staff Dashboard</h1>
            {/* Container for Buttons */}
            <div className="w-[95vw] flex flex-col items-center md:flex-row gap-y-4 md:gap-x-4 justify-between mt-6">
                <Link href="/staff/buy-prizes">
                    <button className="h-[20vh] w-[70vw] md:h-[50vh] md:w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center place-items-center gap-y-2 hover:bg-neutral-200 duration-300">
                        <FaGift className="h-[30px] w-[30px]" />
                        Buy Prizes
                    </button>
                </Link>
                <Link href="/staff/transfer-hackeroons">
                    <button className="h-[20vh] w-[70vw] md:h-[50vh] md:w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center place-items-center gap-y-2 hover:bg-neutral-200 duration-300">
                        <BiTransferAlt className="h-[40px] w-[40px]" />
                        Transfer Hackeroons
                    </button>
                </Link>
                <Link href="/staff/modify-user">
                    <button className="h-[20vh] w-[70vw] md:h-[50vh] md:w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center place-items-center gap-y-2 hover:bg-neutral-200 duration-300">
                        <FaUserEdit className="h-[30px] w-[30px]" />
                        Modify User Account
                    </button>
                </Link>
            </div>
        </div>
    );
}
