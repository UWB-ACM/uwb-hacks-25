import React, { useRef } from "react";
import { gsap } from "gsap";

type ButtonProps = {
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
};

const Button = ({ onClick, className, children }: ButtonProps) => {
    const flatShadow = useRef<SVGSVGElement>(null);

    const handleMouseEnter = () => {
        gsap.to(flatShadow.current, {
            x: 0.5,
            y: 0.5,
            duration: 0.2,
            ease: "none",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(flatShadow.current, {
            x: 0,
            y: 0,
            duration: 0.2,
            ease: "none",
        });
    };

    const handleMouseDown = () => {
        gsap.to(flatShadow.current, {
            x: 0.1,
            y: 0.1,
            duration: 0.2,
            ease: "none",
        });
    };

    const handleMouseUp = () => {
        gsap.to(flatShadow.current, {
            x: 0.5,
            y: 0.5,
            duration: 0.2,
            ease: "none",
        });
    };

    const handleTouchStart = () => {
        gsap.to(flatShadow.current, {
            x: 0.1,
            y: 0.1,
            duration: 0.1,
            ease: "none",
        });
    };

    return (
        <button
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            // onTouchEnd={handleMouseUp}
            className="relative hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 transform duration-200"
        >
            <svg
                width="200"
                height="72"
                viewBox="0 1 648 229"
                preserveAspectRatio="xMidYMid meet"
                fill="#48B2F8"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.5 26.5V185C0.5 187 35.6667 211.667 49 221C56 226.5 67.5 228.667 72 229C246.333 229 599.2 229.5 620 229.5C640.8 229.5 647 214.167 647.5 206.5V57.5C645.5 44.5 638.5 39.5 636 37L599.5 10C588.5 2.5 574.722 0.999994 566.5 1C397.5 1 49.8 1.5 29 1.5C8.2 1.5 1.33333 18.1667 0.5 26.5Z"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
            <svg
                ref={flatShadow}
                width="200"
                height="72"
                viewBox="0 1 648 229"
                preserveAspectRatio="xMidYMid meet"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
                className="-z-10 absolute inset-0"
            >
                <path
                    d="M0.5 26.5V185C0.5 187 35.6667 211.667 49 221C56 226.5 67.5 228.667 72 229C246.333 229 599.2 229.5 620 229.5C640.8 229.5 647 214.167 647.5 206.5V57.5C645.5 44.5 638.5 39.5 636 37L599.5 10C588.5 2.5 574.722 0.999994 566.5 1C397.5 1 49.8 1.5 29 1.5C8.2 1.5 1.33333 18.1667 0.5 26.5Z"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
            <div className={(className ? className + " " : "text-3xl ") + "absolute w-[85%] top-2 left-2 font-bold bg-white px-2 py-[2px] border-2 border-black"}>
                {children}
            </div>
        </button>
    );
};

export default Button;
