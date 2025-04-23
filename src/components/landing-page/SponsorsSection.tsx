import Image from "next/image";
import UWBStemImage from "@/public/sponsorsSection/uwb-stem.png";
import UWBBusinessImage from "@/public/sponsorsSection/uwb-business.png";
import AvanadeImage from "@/public/sponsorsSection/avanade-logo.svg";
import FutureForceImage from "@/public/sponsorsSection/futureforce.jpg";
import MaddKitchenImage from "@/public/sponsorsSection/madkitchen.png";
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
                                width={350}
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
                <div className="w-full flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src={MaddKitchenImage}
                            width={200}
                            height={80}
                            alt="Red Bull"
                            className="object-contain md:mr-10"
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <Image
                            src={FutureForceImage}
                            width={200}
                            height={80}
                            alt="Red Bull"
                            className="object-contain md:ml-10"
                        />
                    </div>
                </div>
            </PanelContent>
        </Panel>
    );
};

export default SponsorsSection;
