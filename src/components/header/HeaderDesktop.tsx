import React, { RefObject } from "react";
import NavLink from "./NavLink";

type NavLink = {
    label?: string;
    id: string;
    url: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
    dropDownLinks?: NavLink[];
};

export default function HeaderDesktop({ navLinks }: { navLinks: NavLink[] }) {
    // These navLinks will go on left, positioned next to one another
    const logoAndSponsorUsNavLinks: NavLink[] = navLinks.filter(
        (link) => link.id === "main" || link.id === "sponsor-us",
    );

    // The remainder of the navLinks will go on right, positioned next to one another
    const restOfNavLinks: NavLink[] = navLinks.filter(
        (link) => link.id !== "main" && link.id !== "sponsor-us",
    );

    return (
        <nav className="hidden z-[100] fixed w-full md:flex justify-between items-center px-[4vw] py-[4vh]">
            <ul className="flex items-center gap-x-6 lg:gap-x-10">
                {logoAndSponsorUsNavLinks.map((link) => (
                    <NavLink key={link.id} link={link} />
                ))}
            </ul>
            <ul className="flex items-center gap-x-4 lg:gap-x-8">
                {restOfNavLinks.map((link) => (
                    <NavLink key={link.id} link={link} />
                ))}
            </ul>
        </nav>
    );
}
