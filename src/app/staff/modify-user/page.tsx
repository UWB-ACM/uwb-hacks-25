import React from "react";
import user_data from "@/src/app/participant/mockuser.json";
import Link from "next/link";

export default function Page() {
    // get user's data, will change once using database
    const user = user_data["user"];
    const historyList = user["history"];

    // returning the card with user information
    return (
        // centering all the content on the screen
        <div className="h-screen grid place-content-center">
            {/* the actual card with all the user data */}
            <div className="h-[80vh] w-[90vw] md:w-[60vw] lg:w-[40vw] bg-neutral-100 p-5 flex flex-col justify-between rounded-md border-2 border-black shadow-lg">
                {/* main content of the user, separate from the exit button */}
                <div>
                    {/* displaying name and email of user, will have to change once database integrated*/}
                    <div className="py-2">
                        {user.name} | {user.name.toLowerCase().replace(" ", "")}
                        @uw.edu
                    </div>
                    {/* displaying number of hackeroons user has */}
                    <div className="py-2">
                        Hackeroons{" "}
                        <span className="text-2xl font-bold">
                            {user.hackeroons}
                        </span>
                    </div>
                    {/* displaying user transactions */}
                    <div className="py-2">
                        Transactions
                        <ul>
                            {/* iterating through user's transaction list */}
                            {historyList.map((listItem, idx) => (
                                <li className="mt-4" key={idx}>
                                    {" "}
                                    {/* in the array representing a user transaction, 
                                        add a gap between each element
                                    */}
                                    <div className="grid grid-cols-3">
                                        {listItem.map((item, idx1) => (
                                            <p key={idx1}>{listItem[idx1]}</p>
                                        ))}
                                    </div>{" "}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* exit button that returns user back to staff dashboard */}
                <Link
                    className="py-3 rounded-lg text-center bg-green-500 text-white"
                    href="/staff"
                >
                    Exit
                </Link>
            </div>
        </div>
    );
}
