import { useRouter } from "next/navigation";
import Button from "../../Button";

const Page = () => {
    const router = useRouter();

    const onClick = () => {
        router.push("/sponsor");
    };

    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
                Become a Sponsor!
            </h2>
            <Button className="text-[23px]" onClick={onClick}>Sponsor Us</Button>
        </div>
    );
};

export default Page;
