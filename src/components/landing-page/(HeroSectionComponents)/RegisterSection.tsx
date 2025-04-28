import Button from "@/src/components/Button";

const RegisterSection = () => {
    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">See the Innovations!</h2>
            <div className="flex justify-start">
                <Button
                    href={
                        "https://uwb-hacks-save-the-world.devpost.com/project-gallery"
                    }
                    target="_blank"
                    fontSize={15}
                >
                    View Projects!
                </Button>
            </div>
        </div>
    );
};

export default RegisterSection;
