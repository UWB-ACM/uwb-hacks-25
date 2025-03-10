import Button from "@/src/components/Button";

const RegisterSection = () => {
    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
                Assemble Your Squad & Answer the Call.
            </h2>
            {/* TODO: Add a link here. */}
            <Button onClick={() => {}} className="text-[23px]">
                <a href="https://uwb-hacks-save-the-world.devpost.com/">
                    Register Here
                </a>
            </Button>
        </div>
    );
};

export default RegisterSection;
