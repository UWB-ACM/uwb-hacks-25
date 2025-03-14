import Button from "@/src/components/Button";
import Link from "next/link";

const RegisterSection = () => {
    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
                Assemble Your Squad & Answer the Call!
            </h2>
            <Link href="https://uwb-hacks-save-the-world.devpost.com/" target="_blank">
                <Button onClick={() => {}} className="text-[23px]">
                    Register Here
                </Button>
            </Link>
        </div>
    );
};

export default RegisterSection;
