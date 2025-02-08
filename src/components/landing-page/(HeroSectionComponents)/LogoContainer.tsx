import Image from "next/image";

const LogoContainer = () => {
    return (
        <div className="w-full max-w-md">
            <Image
                src="https://placehold.co/1000x1000/webp"
                alt="UWB Hacks 2025 - Save the World"
                width={1000}
                height={900}
                className="w-full h-auto"
                priority
            />
        </div>
    );
};

export default LogoContainer;
