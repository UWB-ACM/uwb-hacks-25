import StaffQRScanner from "@/src/components/staff/StaffQRScanner";

export default function Page() {
    // TODO: Improve the styling.
    // TODO: Add a user directory that's searchable.

    return (
        <div className="w-screen py-4 px-8">
            <h1 className="text-4xl text-center">Staff Dashboard</h1>

            <div className="px-[5%]">
                <div>
                    <h2 className="text-2xl text-center">Scan QR Code</h2>

                    <StaffQRScanner />
                </div>
            </div>
        </div>
    );
}
