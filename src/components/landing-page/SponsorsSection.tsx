import Image from "next/image";
import UWBStemImage from "@/public/sponsorsSection/uwb-stem.png";
import UWBBusinessImage from "@/public/sponsorsSection/uwb-business.png";
import AvanadeImage from "@/public/sponsorsSection/avanade-logo.svg";
import FutureForceImage from "@/public/sponsorsSection/futureforce.jpg";
import IEEESeattleImage from "@/public/sponsorsSection/ieee-seattle.png";
import MaddKitchenImage from "@/public/sponsorsSection/madkitchen.png";
import ITServeImage from "@/public/sponsorsSection/itserve.png";
import Link from "next/link";
import Panel from "./(AboutSectionComponents)/Panel/Panel";
import PanelHeader from "./(AboutSectionComponents)/Panel/Header";
import PanelContent from "./(AboutSectionComponents)/Panel/Content";

const SponsorsSection = () => {
    const panelMargin = "mt-12 md:mt-16";

    return (
        <Panel id="sponsorsPanel" className={panelMargin} panelColor="white">
            <PanelHeader
                parentPanelId="sponsorsPanel"
                className="text-[#49B2F8] border-none lg:w-full pb-0 bg-transparent"
                isSectionHeader
            >
                UWB HACKS 2025 SPONSORS
            </PanelHeader>

            <PanelContent
                parentPanelId="sponsorsPanel"
                className="w-full flex flex-col items-center"
            >
                {/* Main sponsors row */}
                <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    <div className="flex justify-center items-center">
                        <Link href="https://www.uwb.edu/stem/" target="_blank">
                            <Image
                                src={UWBStemImage}
                                width={300}
                                height={100}
                                alt="UW Bothell School of STEM"
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link href="https://www.avanade.com" target="_blank">
                            <Image
                                src={AvanadeImage}
                                width={370}
                                height={100}
                                alt="Avanade"
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link
                            href="https://www.uwb.edu/business/"
                            target="_blank"
                        >
                            <Image
                                src={UWBBusinessImage}
                                width={300}
                                height={100}
                                alt="UW Bothell School of Business"
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>

                {/* Secondary sponsors row */}
                <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-20">
                    <div className="flex justify-center items-center">
                        <Link href="https://ieee-seattle.org/" target="_blank">
                            <Image
                                src={IEEESeattleImage}
                                width={200}
                                height={80}
                                alt="Future Force"
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link
                            href="https://www.maddkitchen.com/"
                            target="_blank"
                        >
                            <Image
                                src={MaddKitchenImage}
                                width={255}
                                height={80}
                                alt="Madd Kitchen"
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link
                            href="https://www.future-force.org/"
                            target="_blank"
                        >
                            <Image
                                src={FutureForceImage}
                                width={175}
                                height={80}
                                alt="Future Force"
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>

                {/* Third sponsors row */}
                <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-20">
                    <div className="flex justify-center items-center">
                        <Link href="https://itserve.org/" target="_blank">
                            <Image
                                src={ITServeImage}
                                width={200}
                                height={80}
                                alt="ITServe"
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>
            </PanelContent>
        </Panel>
    );
};

export default SponsorsSection;
