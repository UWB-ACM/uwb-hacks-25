import Button from "@/src/components/Button";

const RegisterSection = () => {
    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
                Assemble Your Squad & Answer the Call!
            </h2>
            <div className="flex justify-start">
                <Button
                    href={"https://uwb-hacks-save-the-world.devpost.com/"}
                    target="_"
                    fontSize={15}
                >
                    Register Here!
                </Button>
            </div>
        </div>
    );
};

export default RegisterSection;
