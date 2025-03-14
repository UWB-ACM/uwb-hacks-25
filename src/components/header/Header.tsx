"use client";

import React, { RefObject } from "react";
import "../../styles/header.css";

import { useContext } from "react";
import { NavLinksContext } from "@/src/context/NavLinkContext";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

type NavLink = {
    label?: string;
    id: string;
    url: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
    dropDownLinks?: NavLink[];
};

export default function Header() {
    const { navLinks }: { navLinks: NavLink[] } = useContext(NavLinksContext);
    if (navLinks.length == 0) return;

    return (
        <>
            <HeaderDesktop navLinks={navLinks} />
            <HeaderMobile navLinks={navLinks} />
        </>
    );
}
