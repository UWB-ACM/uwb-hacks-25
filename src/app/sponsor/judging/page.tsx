import React from "react";

function Page() {
    return (
        <div className="flex flex-col w-screen items-center">
            <div className="max-w-[1000px] flex flex-col">
                <div className="text-center p-6 md:p-8 mb-2 md:mb-4 px-4 overflow-x-auto">
                    <h1 className="font-rubik-mono-one text-4xl md:text-5xl">
                        Join Us as a Judge!
                    </h1>
                    <p className="pb-3 pl-6 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        We're looking for industry professionals, academics, and
                        experts who are passionate about technology and making
                        an impact. As a judge, you'll get a chance to engage
                        with cutting-edge projects and help us identify the next
                        big innovation in saving the world.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
                <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-full h-full">
                    <h2 className="font-rubik-mono-one text-md md:text-lg">
                        Why Be a Judge?
                    </h2>
                    <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                        <li>
                            Network with fellow professionals &amp; innovators
                        </li>
                        <li>Gain insights into fresh, groundbreaking ideas</li>
                        <li>Support young talent and drive social impact</li>
                        <li>Receive recognition in the hackathon community</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-full h-full">
                    <h2 className="font-rubik-mono-one text-md md:text-lg">
                        How to Sign Up
                    </h2>
                    <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                        <li>
                            Fill out this form: [Insert Google Form / Signup
                            Link]
                        </li>
                        <li> Deadline to Apply: [Insert Deadline]</li>
                        <li> Questions? Reach out to [email/contact info]</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Page;
