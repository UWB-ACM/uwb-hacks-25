"use client";

import {
    createContext,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import { NavItem } from "../components/header/NavLink";

type NavItemsContextType = {
    navItems: NavItem[];
    setNavItems: Dispatch<SetStateAction<NavItem[]>>;
};
const NavItemsContext = createContext<NavItemsContextType>({
    navItems: [],
    setNavItems: () => {},
});

const NavItemsProvider = ({ children }: { children: ReactNode }) => {
    const [navItems, setNavItems] = useState<NavItem[]>([]);

    return (
        <NavItemsContext.Provider value={{ navItems, setNavItems }}>
            {children}
        </NavItemsContext.Provider>
    );
};

export { NavItemsContext, NavItemsProvider };
