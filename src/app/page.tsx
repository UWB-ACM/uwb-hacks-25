import HomePage from "@/src/app/HomePage";
import { getPrizes } from "@/src/util/db/prize";

export default async function Page() {
    const hackeroonPrizes = getPrizes();

    return <HomePage hackeroonPrizes={hackeroonPrizes} />;
}
