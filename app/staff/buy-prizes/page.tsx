"use client";

import React, { useState, useEffect } from "react";
import Card from "../../ui/components/Card";
import prizes_data from "../mockprizes.json";
import user_data from "../../participant/mockuser.json";

export default function Page() {
    // View Prize Availability (Simple card component), displays:
    //  - Prize name
    //  - Prize description
    //  - Stock
    //  - Price

    // Facilitate Price Purchases (implement basic buy item function, implement shopping cart in future sprint)
    // Incorporate buy component into prize Card component (include buy quantity input for eligible prizes)

    const prizes = prizes_data["prizes"];
    const { hackeroons } = user_data["user"];
    const [hackeroonAmount, setHackeroonAmount] = useState(hackeroons);

    useEffect(() => {
        console.log(hackeroonAmount);
    }, [hackeroonAmount]);

    return (
        <div className="">
            {/* Prize Catalog */}
            <section>
                <h1 className="text-center text-3xl p-4">Prizes</h1>
                {/* Prize Card Components Container */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 px-8 pb-4 gap-6">
                    {prizes.map((prize, index) => (
                        <Card
                            key={index}
                            prize={prize}
                            hackeroonAmount={hackeroonAmount}
                            setHackeroonAmount={setHackeroonAmount}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
