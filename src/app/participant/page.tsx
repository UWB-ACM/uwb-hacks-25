import React from "react";
import data from "./mockuser.json";
import QRCode from "react-qr-code";

export default function page() {
    const user = data.user;

    return (
        <div className="pt-20 px-[5%]">
            <div className="flex pb-10">
                {/* Profile heading */}
                <div className="rounded-full w-20 h-20 bg-[lightgray] text-center">
                    pfp
                </div>
                <div className="ml-4 pr-24">
                    <div className="mb-1">{user.name}</div>
                    <div>Hackeroons: {user.hackeroons}</div>
                </div>
                {/* QR code */}
                <div>
                    <QRCode size={64} value={user.id} viewBox={`0 0 256 256`} />
                </div>
            </div>

            {/* Hackeroon history */}
            <div>
                <div>Transaction History</div>
                {user.history.map((event, index) => (
                    <div key={index}>
                        {event[0]} {event[1]} {event[2]}
                    </div>
                ))}
            </div>
        </div>
    );
}
