"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import "../../styles/header.css";
import Image from "next/image";

export type HeaderLinkData = { id: string; name: string } & (
    | { url: string }
    | { url: string; scrollRef: React.RefObject<HTMLDivElement | null> }
);

/**
 * The main header, consisting of a big "UWB HACKS" as well
 * as navigation links.
 * On mobile, this contains a sidebar.
 * @param links - is a list of links to show on the header.
 * @param wrapH1 - should the big "UWB HACKS" be wrapped in an h1?
 *                 This should only really be used on the main page.
 */
export default function Header({
    links,
    wrapH1,
}: {
    links: HeaderLinkData[];
    wrapH1?: boolean;
}) {
    const [sideNav, setSideNav] = useState(false);

    return (
        <>
            <div className="hidden md:block">
                <HeaderDesktop links={links} wrapH1={wrapH1} />
            </div>
            <div className="block md:hidden">
                <HeaderMobile wrapH1={wrapH1} setSideNav={setSideNav} />
            </div>

            <HeaderSidebar
                links={links}
                sideNav={sideNav}
                setSideNav={setSideNav}
            />
        </>
    );
}

function UWBHacksButton({
    wrapH1,
    mobile,
}: {
    wrapH1?: boolean;
    mobile?: boolean;
}) {
    const inner = (
        <>
            {/* Using spans so the text stays inline when compressed */}
            <span>UWB</span>
            <span className="ml-3">Hacks</span>
        </>
    );

    return (
        <Link href="/">
            <button
                className={
                    mobile
                        ? "font-h1 text-3xl tilt-animation scale-up-animation"
                        : "font-h1 text-5xl scale-up-animation"
                }
            >
                {wrapH1 ? <h1>{inner}</h1> : inner}
            </button>
        </Link>
    );
}

function HeaderLink({ link }: { link: HeaderLinkData }) {
    const linkClassName = "font-h3 font-medium text-lg scale-up-animation";

    if ("scrollRef" in link) {
        return (
            <Link href={link.url} scroll={false}>
                <button
                    className={linkClassName}
                    onClick={() => {
                        // Scroll to the relevant section.
                        if (link.scrollRef.current) {
                            link.scrollRef.current.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}
                >
                    {link.name}
                </button>
            </Link>
        );
    }

    return (
        <Link href={link.url}>
            <button className={linkClassName}>{link.name}</button>
        </Link>
    );
}

function HeaderDesktop({
    links,
    wrapH1,
}: {
    links: HeaderLinkData[];
    wrapH1?: boolean;
}) {
    return (
        <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full ">
            <UWBHacksButton wrapH1={wrapH1} />

            <div className="hidden md:flex gap-x-10 ">
                {links.map((link) => (
                    <HeaderLink key={link.id} link={link} />
                ))}
            </div>
        </nav>
    );
}

function HeaderMobile({
    wrapH1,
    setSideNav,
}: {
    wrapH1?: boolean;
    setSideNav: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full min-w-72">
            <UWBHacksButton wrapH1={wrapH1} mobile />
            <HeaderSidebarButton setSideNav={setSideNav} />
        </nav>
    );
}

function HeaderSidebarButton({
    setSideNav,
}: {
    setSideNav: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <>
            <button
                className="w-12 h-12 flex justify-center items-center hover:scale-[1.1] transiton duration-300"
                onClick={() => {
                    setSideNav(true);
                }}
            >
                <Image
                    src="/header/menu-icon.svg"
                    width={35}
                    height={35}
                    alt="Side Nav"
                />
            </button>
        </>
    );
}

function HeaderSidebarLink({
    link,
    setSideNav,
}: {
    link: HeaderLinkData;
    setSideNav: Dispatch<SetStateAction<boolean>>;
}) {
    const linkClassName = "text-white font-h1 text-3xl";

    if ("scrollRef" in link) {
        return (
            <Link href={link.url} scroll={false} className="text-center">
                <button
                    className={linkClassName}
                    onClick={() => {
                        setSideNav(false);

                        // Scroll down to the relevant section.
                        if (link.scrollRef.current) {
                            link.scrollRef.current.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}
                >
                    {link.name}
                </button>
            </Link>
        );
    }

    return (
        <Link href={link.url} className="text-center">
            <button
                className={linkClassName}
                onClick={() => {
                    setSideNav(false);
                }}
            >
                {link.name}
            </button>
        </Link>
    );
}

function HeaderSidebar({
    links,
    sideNav,
    setSideNav,
}: {
    links: HeaderLinkData[];
    sideNav: boolean;
    setSideNav: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div
            className={`bg-orange-300 fixed top-0 w-screen h-screen p-5 font-h1 text-3xl transition-transform [z-index:1000]`}
            style={{
                transform: sideNav ? undefined : "translate(100%, 0)",
            }}
        >
            <button
                className="hover:scale-[1.1] transiton duration-300"
                onClick={() => setSideNav(false)}
            >
                X
            </button>
            <div className="flex flex-col gap-y-5 justify-around h-1/2 pt-[5rem]">
                {links.map((link) => (
                    <HeaderSidebarLink
                        key={link.id}
                        link={link}
                        setSideNav={setSideNav}
                    />
                ))}
            </div>
        </div>
    );
}
