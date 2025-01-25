import TestUserName from "@/src/components/TestUserName";
import TestRecords from "@/src/components/TestRecords";

export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <TestUserName />

            <TestRecords />
        </div>
    );
}
