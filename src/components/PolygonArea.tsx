import { CSSProperties, PropsWithChildren } from "react";

const PolygonArea: React.FC<
    PropsWithChildren<{
        area: string;
        path: string;
        clipPath: string;
        viewBox: string;
        width?: string;
        height?: string;
        style?: CSSProperties;
    }>
> = ({ area, path, clipPath, viewBox, width, height, style, children }) => {
    return (
        <div
            className={`relative`}
            style={{
                gridArea: area,
                width: width ?? "100%",
                height: height ?? "100%",
                ...(style ?? {}),
            }}
        >
            <svg
                className="absolute z-10"
                viewBox={viewBox}
                preserveAspectRatio="none"
                width="100%"
                height="100%"
            >
                <path d={path} fill="white" />
            </svg>

            <div
                className={`absolute z-20 [width:100%] [height:100%]`}
                style={{ clipPath: `polygon(${clipPath})` }}
            >
                {children}
            </div>

            <svg
                className="absolute z-30 pointer-events-none"
                viewBox={viewBox}
                preserveAspectRatio="none"
                width="100%"
                height="100%"
            >
                <path
                    d={path}
                    fill="#00000000"
                    stroke="black"
                    strokeWidth="3"
                />
            </svg>
        </div>
    );
};

export default PolygonArea;