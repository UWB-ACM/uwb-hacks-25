"use client";

import {
    createContext,
    ReactNode,
    useState,
    RefObject,
    Dispatch,
    SetStateAction,
} from "react";

type NavLink = {
    label?: string;
    id: string;
    url: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
    dropDownLinks?: NavLink[];
};

type NavLinksContextType = {
    navLinks: NavLink[];
    setNavLinks: Dispatch<SetStateAction<NavLink[]>>;
};
const NavLinksContext = createContext<NavLinksContextType>({
    navLinks: [],
    setNavLinks: () => {},
});

const NavLinksProvider = ({ children }: { children: ReactNode }) => {
    const [navLinks, setNavLinks] = useState<NavLink[]>([]);

    return (
        <NavLinksContext.Provider value={{ navLinks, setNavLinks }}>
            {children}
        </NavLinksContext.Provider>
    );
};

export { NavLinksContext, NavLinksProvider };
