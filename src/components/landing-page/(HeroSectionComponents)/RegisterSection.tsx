import Button from "@/src/components/Button";
import { useRouter } from "next/navigation";

const RegisterSection = () => {
    const router = useRouter();
    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
                Assemble Your Squad & Answer the Call!
            </h2>
            <Button
                onClick={() =>
                    window.open(
                        "https://uwb-hacks-save-the-world.devpost.com/",
                        "_blank",
                    )
                }
                className="text-[23px]"
            >
                Register Here
            </Button>
        </div>
    );
};

export default RegisterSection;
