import Button from "@/src/components/Button";

const Page = () => {
    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Join the Community!</h2>
            <div className="flex justify-start">
                <Button
                    href={"https://discord.gg/6AapzPNvRy"}
                    target="_blank"
                    color="yellow"
                    fontSize={15}
                >
                    Open Discord
                </Button>
            </div>
        </div>
    );
};

export default Page;
