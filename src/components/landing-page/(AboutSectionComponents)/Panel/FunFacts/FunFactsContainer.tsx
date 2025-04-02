import React, { useEffect, useState } from "react";
import clsx from "clsx";

type FunFactsContainerProps = {
    children: React.ReactNode;
};

export default function FunFactsContainer({
    children,
}: FunFactsContainerProps) {
    const [cols, setCols] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setCols(4);
            } else if (window.innerWidth >= 500) {
                setCols(2);
            } else {
                setCols(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            id="funFactsContainer"
            className={clsx(
                `mt-4 md:m-4 grid gap-4 items-center ${cols === 4 && "grid-cols-4"} ${cols === 2 && "grid-cols-2"}`,
            )}
        >
            {children}
        </div>
    );
}
