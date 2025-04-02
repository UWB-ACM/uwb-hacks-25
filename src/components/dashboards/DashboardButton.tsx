import React, { PropsWithChildren } from "react";
import Link from "next/link";

const DashboardButton: React.FC<PropsWithChildren<{ href: string }>> = ({
    href,
    children,
}) => {
    return (
        <Link href={href}>
            <button className="h-[20vh] w-[70vw] md:h-[50vh] md:w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center place-items-center gap-y-2 hover:bg-neutral-200 duration-300">
                {children}
            </button>
        </Link>
    );
};

export default DashboardButton;
