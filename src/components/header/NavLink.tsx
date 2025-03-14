import React, { RefObject, Dispatch, SetStateAction } from "react";
import Link from "next/link";

type NavLink = {
    label?: string;
    id: string;
    url: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
    dropDownLinks?: NavLink[];
};

export default function NavLink({
    link,
    setSidebarOpen,
    isDropDownLink,
}: {
    link: NavLink;
    setSidebarOpen?: Dispatch<SetStateAction<boolean>>;
    isDropDownLink?: boolean;
}) {
    const handleClick = () => {
        if (setSidebarOpen) setSidebarOpen(false);

        if (!link.scrollRef || !link.scrollRef.current) return;
        link.scrollRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Desktop NavLinks */}
            <li
                className={`${link.id === "main" ? "font-h1 text-2xl lg:text-3xl xl:text-4xl " : "font-h3 lg:text-lg xl:text-xl hover:text-blue-700"} hidden md:block whitespace-nowrap list-none duration-300 hover:scale-[1.07]`}
            >
                <Link href={link.url} scroll={false} onClick={handleClick}>
                    {link.id === "main" && <h1>{link.label}</h1>}
                    {link.id !== "main" && <>{link.label}</>}
                </Link>
            </li>

            {/* Mobile NavLinks */}
            <li
                className={`${link.id === "main" ? "font-h1 text-2xl lg:text-3xl xl:text-4xl" : "font-h3 lg:text-lg xl:text-xl"} ${isDropDownLink ? "pl-8" : ""} block md:hidden whitespace-nowrap list-none`}
            >
                <Link href={link.url} scroll={false} onClick={handleClick}>
                    {link.id === "main" && <h1>{link.label}</h1>}
                    {link.id !== "main" && <>{link.label}</>}
                </Link>
            </li>
        </>
    );
}
