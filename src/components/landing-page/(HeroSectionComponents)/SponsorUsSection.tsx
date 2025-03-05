import { useRouter } from "next/navigation";

const Page = () => {
    
    const router = useRouter();

    const onClick = () => {
        router.push("/sponsor");
    }

    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
                Be the power behind the superpowers!
            </h2>
            <button onClick={onClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Sponsor Us
            </button>
        </div>
    );
};

export default Page;
