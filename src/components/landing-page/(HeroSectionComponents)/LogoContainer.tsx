import Image from "next/image";

const LogoContainer = () => {
    return (
        <div className="w-full">
            <Image
                src="https://placehold.co/800x800/webp"
                alt="UWB Hacks 2025 - Save the World"
                width={800}
                height={800}
                layout="responsive"
                priority
            />
        </div>
    );
};

export default LogoContainer;
