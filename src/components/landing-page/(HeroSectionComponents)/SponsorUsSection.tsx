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
                Be the power behind the superpowers!
            </h2>
            <Button onClick={onClick}>Discord</Button>
        </div>
    );
};


export default Page;
