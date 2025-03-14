import React, { RefObject, Dispatch, SetStateAction } from "react";
import Link from "next/link";

export type NavItem = {
    label: string;
    id: string;
    url: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
    dropDownItems?: NavItem[];
};

export default function NavLink({
    navItem,
    setSidebarOpen,
    isDropDownItem,
}: {
    navItem: NavItem;
    setSidebarOpen?: Dispatch<SetStateAction<boolean>>;
    isDropDownItem?: boolean;
}) {
    const handleClick = () => {
        if (setSidebarOpen) setSidebarOpen(false);

        if (!navItem.scrollRef || !navItem.scrollRef.current) return;
        navItem.scrollRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Desktop NavLinks */}
            <li
                className={`${navItem.id === "main" ? "font-h1 text-2xl lg:text-3xl xl:text-4xl " : "font-h3 lg:text-lg xl:text-xl hover:text-blue-700"} hidden md:block whitespace-nowrap list-none duration-300 hover:scale-[1.07]`}
            >
                <Link href={navItem.url} scroll={false} onClick={handleClick}>
                    {navItem.id === "main" && <h1>{navItem.label}</h1>}
                    {navItem.id !== "main" && <>{navItem.label}</>}
                </Link>
            </li>

            {/* Mobile NavLinks */}
            <li
                className={`${navItem.id === "main" ? "font-h1 text-2xl lg:text-3xl xl:text-4xl" : "font-h3 lg:text-lg xl:text-xl"} ${isDropDownItem ? "pl-8" : ""} block md:hidden whitespace-nowrap list-none`}
            >
                <Link href={navItem.url} scroll={false} onClick={handleClick}>
                    {navItem.id === "main" && <h1>{navItem.label}</h1>}
                    {navItem.id !== "main" && <>{navItem.label}</>}
                </Link>
            </li>
        </>
    );
}
