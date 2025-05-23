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
import StressPaw from "@/public/hackeroonShop/stressPaw.jpg";
import Notebook from "@/public/hackeroonShop/notebook.jpg";
import UWBMagnet from "@/public/hackeroonShop/uwbMagnet.jpg";
import UWBBracelet from "@/public/hackeroonShop/uwbBracelet.jpg";
import UWBCoaster from "@/public/hackeroonShop/uwbCoaster.jpg";
import UWBShirt from "@/public/hackeroonShop/uwbShirt.jpg";
import UWBToteBag from "@/public/hackeroonShop/uwbToteBag.jpg";
import HuskySticker from "@/public/hackeroonShop/huskySticker.jpg";
import UWBPenantKeychain from "@/public/hackeroonShop/uwbPenantKeychain.jpg";
import UWSticker from "@/public/hackeroonShop/uwSticker.jpg";
import UWBPenant from "@/public/hackeroonShop/uwbPenant.jpg";
import USBDock from "@/public/hackeroonShop/usbDock.png";
import LegoDinosaur from "@/public/hackeroonShop/legoDinosaur.png";
import PurpleWaterBottle from "@/public/hackeroonShop/purpleWaterBottle.png";
import AvanadeBeanie from "@/public/hackeroonShop/avanadeBeanie.png";
import AvanadeDrawstringBag from "@/public/hackeroonShop/avanadeDrawstringBag.png";

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
        case "usbDock":
            return USBDock;
        case "legoDinosaur":
            return LegoDinosaur;
        case "purpleWaterBottle":
            return PurpleWaterBottle;
        case "avanadeBeanie":
            return AvanadeBeanie;
        case "avanadeDrawstringBag":
            return AvanadeDrawstringBag;
        default:
            return DefaultImage;
    }
};
