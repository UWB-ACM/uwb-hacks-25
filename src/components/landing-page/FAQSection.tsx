import React, { useState } from "react";

const faqItems = [
    {
        question: "1. How will UWB Hacks 2025 be run?",
        answer: "The hackathon will take place over a weekend, where participants will form teams, brainstorm ideas, and build projects that align with this year’s theme: Save the World You will have access to mentors, workshops, and networking opportunities to help bring your ideas to life.",
    },
    {
        question: "2. Do I have to be a UWB student to participate?",
        answer: "No! UWB Hacks 2025 is open to all students aged 18 and over, including those from any university or high school seniors who are 18+.",
    },
    {
        question: "3. Does it cost money to enter the hackathon?",
        answer: "No! Participation is completely free.",
    },
    {
        question: "4. Do I need programming experience to participate?",
        answer: `No prior programming experience is required! We have provided options for "No Code" and "Low Code" projects. We welcome participants of all skill levels and will also provide mentorship, and other learning opportunities. Although, we have adjusted judging criteria to balance the playing field for all participants.`,
    },
    {
        question:
            "5. Do I need a team to register, and how many people can be on a team?",
        answer: "Yes. If you don’t have a team, we will provide opportunities to form teams before the hackathon begins. Each team must have 3 to 5 members—no exceptions. Teams that don’t meet this requirementwill be disqualified.",
    },
    {
        question:
            "6. How do you sign up as a team on Devpost once you have found a team?",
        answer: [
            "Create a Devpost account and register individually – This not only allows you to participate in UWB Hacks 2025, but also makes it easier to join future hackathons. Plus, it helps us plan ahead to ensure we have enough food, seating, and resources for everyone.",
            "Wait until hacking officially begins on April 25th – Following the Opening Ceremony, you’ll be able to start working on your project.",
            "Begin your project submission on Devpost – Once submissions open, you can list your teammates and save your project as a draft while you continue building.",
        ],
    },
    {
        question: "7. What activities will take place aside from hacking?",
        answer: "In addition to the hackathon, participants will have the opportunity to attend interactive workshops, networking sessions, and engaging activities. These will includeinsightful talks from industry professionals and hands-on learning experiences designed to align with this year's Save the World theme.",
    },
    {
        question:
            "8. Is UWB Hacks 2025 open to students from non-technical or non-CS backgrounds?",
        answer: "Yes! UWB Hacks 2025 welcomes students from all academic backgrounds — not just computer science. Whether you're studying business, design, engineering, biology, or anything else, your perspective is valuable. You’re also encouraged to explore no-code or low-code solutions, create mockups, or pitch well-developed concepts — creativity, collaboration, and innovation are what matter most!",
    },
];

const PlusIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4"
    >
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
);

const MinusIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4"
    >
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="bg-white border-black border-2 p-10 sm:mt-[10rem]">
            <h1 className="font-h1 text-5xl md:text-7xl text-[#49B2F8] text-center mb-[2rem]">
                FAQ
            </h1>
            <div className="w-full mx-auto">
                {faqItems.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center py-5 font-rubik-mono-one text-xl"
                            >
                                <span className="text-left">
                                    {item.question}
                                </span>
                                <span className="transition-transform duration-300">
                                    {isOpen ? MinusIcon : PlusIcon}
                                </span>
                            </button>

                            {/* https://stackoverflow.com/a/76944290 */}
                            <div
                                className={`grid transition-[grid-template_rows_300ms] ease-in-out overflow-hidden ${
                                    isOpen
                                        ? "[grid-template-rows:1fr]"
                                        : "[grid-template-rows:0fr]"
                                }`}
                            >
                                <div className="pb-5 font-h3 px-1 ml-12 overflow-hidden">
                                    {Array.isArray(item.answer) ? (
                                        <ul className="list-decimal list-inside space-y-2">
                                            {item.answer.map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.answer}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQSection;
