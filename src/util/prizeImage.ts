import { StaticImageData } from "next/image";
import WirelessBankCharger from "@/public/hackeroonShop/powerBank.jpeg";
import LapDesk from "@/public/hackeroonShop/lapDesk.jpeg";
import Pickleball from "@/public/hackeroonShop/pickleballSet.png";
import DualLunchBag from "@/public/hackeroonShop/lunchBag.png";
import AdidasFleeceHoodie from "@/public/hackeroonShop/adidasFleeceHoodie.png";
import Backpack from "@/public/hackeroonShop/backpack.jpeg";
import DefaultImage from "@/public/bg.jpg";
import FidgetSpinner from "@/public/hackeroonShop/fidgetSpinner.png";
import KeyChain from "@/public/hackeroonShop/keychain.jpg";
import CableWinder from "@/public/hackeroonShop/cableWinder.png";
import TShirt from "@/public/hackeroonShop/tshirt.png";
import OwalaBlack from "@/public/hackeroonShop/owalas-black.png";
import OwalaWhite from "@/public/hackeroonShop/owalas-white.png";
import CherryBlossoms from "@/public/hackeroonShop/cherry-blossoms.png";

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
        case "fidgetSpinner":
            return FidgetSpinner;
        case "keyChain":
            return KeyChain;
        case "cableWinder":
            return CableWinder;
        case "tShirt":
            return TShirt;
        case "owalaBlack":
            return OwalaBlack;
        case "owalaWhite":
            return OwalaWhite;
        case "cherryBlossoms":
            return CherryBlossoms;
        case "stressPaw":
            return StressPaw;
        case "notebook":
            return Notebook;
        case "uwbMagnet":
            return UWBMagnet;
        case "uwbBracelet":
            return UWBBracelet;
        case "uwbCoaster":
            return UWBCoaster;
        case "uwbShirt":
            return UWBShirt;
        case "uwbToteBag":
            return UWBToteBag;
        case "huskySticker":
            return HuskySticker;
        case "uwbPenantKeychain":
            return UWBPenantKeychain;
        case "uwSticker":
            return UWSticker;
        case "uwbPenant":
            return UWBPenant;
        case "purpleWaterBottle":
            return PurpleWaterBottle
        default:
            return DefaultImage;
    }
};
