import Button from "../../Button";

const VolunteerSection = () => {
    const onClick = () => {
        //go to the volunteer page
    };

    return (
        <div className="bg-white/40 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
                Be the power behind the superpowers!
            </h2>
            <Button onClick={onClick}>Volunteer</Button>
        </div>
    );
};

export default VolunteerSection;
