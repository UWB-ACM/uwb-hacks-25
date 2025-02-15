import Image from "next/image";
import UwbHacksLogo from "@/public/heroSection/logo.png";

const LogoContainer = () => {
    return (
        <div className="w-full">
            <Image
                src={UwbHacksLogo}
                alt="UWB Hacks 2025 - Save the World"
                width={500}
                height={500}
                layout="responsive"
                priority
                className="rounded-lg"
            />
        </div>
    );
};

export default LogoContainer;
