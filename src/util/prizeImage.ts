import { StaticImageData } from "next/image";
import WirelessBankCharger from "@/public/hackeroonShop/powerBank.jpeg";
import LapDesk from "@/public/hackeroonShop/lapDesk.jpeg";
import Pickleball from "@/public/hackeroonShop/pickleballSet.png";
import DualLunchBag from "@/public/hackeroonShop/lunchBag.png";
import AdidasFleeceHoodie from "@/public/hackeroonShop/adidasFleeceHoodie.png";
import Backpack from "@/public/hackeroonShop/backpack.jpeg";
import DefaultImage from "@/public/bg.jpg";

export const retrievePrizeImage = (
    prizeName: string | null,
): StaticImageData => {
    switch (prizeName) {
        case "wirelessBankCharger":
            return WirelessBankCharger;
        case "lapDesk":
            return LapDesk;
        case "pickleball":
            return Pickleball;
        case "dualLunchBag":
            return DualLunchBag;
        case "adidasAvanadeHoodie":
            return AdidasFleeceHoodie;
        case "backpack":
            return Backpack;
        default:
            return DefaultImage;
    }
};
