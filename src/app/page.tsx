import HomePage from "@/src/app/HomePage";
import { getPrizes } from "@/src/util/db/prize";

export default async function Page() {
    // The catch is to let this work in builds without databases.
    const hackeroonPrizes = getPrizes().catch((e) => {
        console.error(e);
        return [];
    });

    return <HomePage hackeroonPrizes={hackeroonPrizes} />;
}
