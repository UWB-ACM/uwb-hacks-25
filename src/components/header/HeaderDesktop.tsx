import React from "react";
import NavLink, { NavItem } from "./NavLink";

export default function HeaderDesktop({ navItems }: { navItems: NavItem[] }) {
    // These navItems will go on left, positioned next to one another
    const logoAndSponsorUsNavItems: NavItem[] = navItems.filter(
        (navItem) => navItem.id === "main" || navItem.id === "sponsor-us",
    );

    // The remainder of the navItems will go on right, positioned next to one another
    const restOfNavItems: NavItem[] = navItems.filter(
        (navItem) => navItem.id !== "main" && navItem.id !== "sponsor-us",
    );

    return (
        <nav className="hidden z-[100] fixed w-full md:flex justify-between items-center px-[4vw] py-[4vh]">
            <ul className="flex items-center gap-x-6 lg:gap-x-10">
                {logoAndSponsorUsNavItems.map((navItem) => (
                    <NavLink key={navItem.id} navItem={navItem} />
                ))}
            </ul>
            <ul className="flex items-center gap-x-4 lg:gap-x-8">
                {restOfNavItems.map((navItem) => (
                    <NavLink key={navItem.id} navItem={navItem} />
                ))}
            </ul>
        </nav>
    );
}
