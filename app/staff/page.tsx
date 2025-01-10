import React from "react";
import Image from 'next/image';

export default function page() {
  // View Prize Availability (Simple card component), displays:
  //  - Prize name
  //  - Prize description
  //  - Stock
  //  - Price

  // Facilitate Price Purchases (implement basic buy item function, implement shopping cart in future sprint)
  // Incorporate buy component into prize Card component (include buy quantity input for eligible prizes)

  return <div className="w-screen">
    {/* Prize Catalog */}
    <section className="m-6">
      <h1 className="text-center text-3xl">Prizes</h1>

      {/*
        Prize Card Components Container
        Refactor card component later
      */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 m-4">

        {/* Card Component */}
        <div className="justify-center p-4">
          {/*
            - Prize Image
            - Prize Name
            - Prize Description
            - Prize Stock
            - Prize Price
          */}
          <div className="flex justify-center p-6">
            <Image src={"/next.svg"} height={200} width={200} alt="Image of Prize" />
          </div>
          <div className="flex justify-around pb-4">
            <p>36 left!</p>
            <p>500 Hackeroons</p>
          </div>
          <h2 className="text-center text-2xl">Prize Name</h2>
          <h3>Description of Prize</h3>
        </div>

      </div>
    </section>
  </div>;
}
