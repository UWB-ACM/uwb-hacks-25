import TestUserName from "@/src/components/TestUserName";
import TestRecords from "@/src/components/TestRecords";
import HeroSection from "@/src/components/(landing-page)/HeroSection";

export default function Home() {
    return (
        <div className="max-w-[80vw] h-screen flex flex-col justify-center items-center mx-auto">
            {/* <TestUserName />
            <TestRecords /> */}
            <HeroSection/>
            
        </div>
    );
}
