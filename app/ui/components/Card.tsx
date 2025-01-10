import React from 'react'

export default function Card() {
  return (
    <div className="justify-center p-4 bg-neutral-200">
        {/* Image */}
        <div className="flex justify-center p-6">
            <Image src={"/next.svg"} height={200} width={200} alt="Image of Prize" />
        </div>
        {/* Stock and Price */}
        <div className="flex justify-around pb-4">
            <p>36 left!</p>
            <p>500 Hackeroons</p>
          </div>
        {/* Name */}
        <h2 className="text-center text-2xl">Prize Name</h2>
        {/* Description */}
        <h3>Description of Prize</h3>
    </div>
  )
}
