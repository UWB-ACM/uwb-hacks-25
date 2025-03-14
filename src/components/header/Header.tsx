"use client";

import React from "react";
import "../../styles/header.css";

import { useContext } from "react";
import { NavItemsContext } from "@/src/context/NavItemsContext";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { NavItem } from "@/src/components/header/NavLink";

export default function Header() {
    const { navItems }: { navItems: NavItem[] } = useContext(NavItemsContext);
    if (navItems.length == 0) return;

    return (
        <>
            <HeaderDesktop navItems={navItems} />
            <HeaderMobile navItems={navItems} />
        </>
    );
}
