import React, { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    color?: "blue" | "yellow" | "red";
    fontSize?: number;
} & (
    | {
          href: string;
          target?: "_blank";
      }
    | {
          onClick: () => void;
      }
);

export default function Button({
    children,
    color = "blue",
    fontSize = 13,
    ...rest
}: ButtonProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    const buttonBlueRef = useRef<SVGSVGElement>(null);
    const buttonShadowRef = useRef<SVGSVGElement>(null);
    const buttonBodyRef = useRef<SVGSVGElement>(null);
    const buttonFrontRef = useRef<SVGSVGElement>(null);
    const textContentRef = useRef<SVGPathElement>(null);

    const handleMouseEnter = () => {
        gsap.to(buttonBodyRef.current, {
            x: -2,
            y: -2,
            duration: 0.15,
            ease: "power2.out",
        });
    };

    const handleMouseLeaveAndUp = () => {
        gsap.to(buttonBodyRef.current, {
            x: 0,
            y: 0,
            duration: 0.15,
            ease: "power2.out",
        });
    };

    const handleMouseDown = () => {
        gsap.to(buttonBodyRef.current, {
            x: 4,
            y: 4,
            duration: 0.15,
            ease: "power2.out",
        });
    };

    const shadowColors = {
        blue: "#3393D1",
        yellow: "#E48E57",
        red: "#e45151",
    };

    const baseColors = {
        blue: "#48B2F8",
        yellow: "#FFCA3A",
        red: "#e22e2e",
    };

    const innerButton = (
        <svg
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveAndUp}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeaveAndUp}
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="76"
            viewBox="0 0 205 76"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            overflow="visible"
        >
            <g id="buttonBlue" ref={buttonBlueRef}>
                <g id="buttonShadow" ref={buttonShadowRef}>
                    <path
                        d="M5.5 61.5V10C5.5 8 7.9 4.5 11.5 4.5H184.5C190 5 203 8.5 204.5 20V70.5C204.5 72.5 203 75.5 199 75.5H26.5C17 75.5 5.5 72.5 5.5 61.5Z"
                        fill={`${shadowColors[color]}`}
                    />
                    <path
                        d="M11.5 4.5C7.9 4.5 5.5 8 5.5 10V61.5C5.5 72.5 17 75.5 26.5 75.5H199C203 75.5 204.5 72.5 204.5 70.5V20C203 8.5 190 5 184.5 4.5M11.5 4.5C15.1 4.5 128.333 4.5 184.5 4.5M11.5 4.5H184.5"
                        stroke="black"
                    />
                </g>
                <g id="buttonBody" ref={buttonBodyRef}>
                    <g id="buttonFront" ref={buttonFrontRef}>
                        <path
                            d="M1 58V6.5C1 4.5 3.4 1 7 1H180C185.5 1.5 198.5 5 200 16.5V67C200 69 198.5 72 194.5 72H22C12.5 72 1 69 1 58Z"
                            fill={`${baseColors[color]}`}
                        />
                        <path
                            d="M7 1C3.4 1 1 4.5 1 6.5V58C1 69 12.5 72 22 72H194.5C198.5 72 200 69 200 67V16.5C198.5 5 185.5 1.5 180 1M7 1C10.6 1 123.833 1 180 1M7 1H180"
                            stroke="black"
                        />
                    </g>
                    <path
                        id="textContent"
                        ref={textContentRef}
                        d="M14 55V15H182V55H14Z"
                        fill="white"
                        stroke="black"
                    />
                    <text
                        x="98"
                        y="37"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={fontSize}
                        fontFamily="Arial"
                        fill="black"
                        className="font-bold"
                    >
                        {children}
                    </text>
                </g>
            </g>
        </svg>
    );

    if ("href" in rest) {
        return (
            <Link href={rest.href} target={rest.target}>
                {innerButton}
            </Link>
        );
    }

    return <button onClick={rest.onClick}>{innerButton}</button>;
}
