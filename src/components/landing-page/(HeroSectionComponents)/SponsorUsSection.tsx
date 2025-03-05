import Button from "@/src/components/Button";
import Link from "next/link";

const Page = () => {
    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Become a Sponsor!</h2>
            <Link href="/sponsor">
                <Button className="text-[23px]">Sponsor Us</Button>
            </Link>
        </div>
    );
};

export default Page;
