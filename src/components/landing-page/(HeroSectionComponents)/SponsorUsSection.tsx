import Button from "@/src/components/Button";

const Page = () => {
    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Become a Sponsor!</h2>
            <div className="flex justify-start">
                <Button href={"/sponsor"} color="yellow" fontSize={15}>
                    Sponsor Us!
                </Button>
            </div>
        </div>
    );
};

export default Page;
