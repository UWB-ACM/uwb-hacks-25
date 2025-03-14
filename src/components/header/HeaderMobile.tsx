"use client";

import React, { useState, RefObject } from "react";
import NavLink from "./NavLink";

import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

type NavLink = {
    label?: string;
    id: string;
    url: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
    dropDownLinks?: NavLink[];
};

export default function HeaderMobile({ navLinks }: { navLinks: NavLink[] }) {
    // This navLink will go on left, positioned next to one another
    const logoNavLink: NavLink = navLinks.filter(
        (link) => link.id === "main",
    )[0];

    // The remainder of the navLinks will go in togglable sidebar
    const restOfNavLinks: NavLink[] = navLinks.filter(
        (link) => link.id !== "main",
    );

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Togglable Sidebar */}
            <div
                className={`md:hidden transform duration-300 ${sidebarOpen ? "translate-y-0" : "-translate-y-full"} z-[100] fixed top-0 left-0 w-full h-screen bg-orange-400 flex flex-col justify-center items-center text-white text-2xl`}
            >
                {restOfNavLinks.map((link, index) => (
                    <div
                        key={`nav-item-${link.id}`}
                        className={`${index === 0 ? "border-t-2" : ""} w-[80%] p-4 border-b-2 border-white`}
                    >
                        <NavLink
                            key={link.id}
                            link={link}
                            setSidebarOpen={setSidebarOpen}
                        />
                        {link.dropDownLinks && (
                            <div
                                key={`dropdown-container-${link.id}`}
                                className="flex flex-col gap-y-2 pt-2"
                            >
                                {link.dropDownLinks.map((dropDownLink) => (
                                    <NavLink
                                        key={dropDownLink.id + "-dropDown"}
                                        link={dropDownLink}
                                        setSidebarOpen={setSidebarOpen}
                                        isDropDownLink
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Navbar */}
            <nav
                className={`md:hidden flex z-[101] fixed top-0 w-full justify-between items-center px-[4vw] py-[4vh] duration-100 ${sidebarOpen ? "text-white" : ""}`}
            >
                <NavLink
                    key={logoNavLink.id}
                    link={logoNavLink}
                    setSidebarOpen={setSidebarOpen}
                />
                <button onClick={() => setSidebarOpen((prev) => !prev)}>
                    {!sidebarOpen && (
                        <CiMenuBurger className="w-[25px] h-[25px]" />
                    )}
                    {sidebarOpen && (
                        <IoIosClose className="w-[35px] h-[35px]" />
                    )}
                </button>
            </nav>
        </>
    );
}
