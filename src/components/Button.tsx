import React from "react";

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="relative hover:scale-105 hover:shadow-[20px_20px_0px_rgba(0,0,0,1)] active:shadow-[10px_10px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transform duration-300"
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
            <div className="absolute w-[85%] top-2 left-2 text-3xl font-bold bg-white px-2 py-[2px] border-2 border-black">
                {children}
            </div>
        </button>
    );
};

export default Button;
