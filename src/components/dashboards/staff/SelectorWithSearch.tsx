import React, { Dispatch, SetStateAction, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import Image from "next/image";
import Input from "@/src/components/ui/Input";

export interface Props<T> {
    items: T[];
    setItems?: Dispatch<SetStateAction<T[]>>;
    buttonName: string;
    dialogName: string;
    id: ((value: T) => number) | ((value: T) => string);
    email: (value: T) => string;
    title: (value: T) => string;
    description: (value: T) => string;
    imageURL?: (value: T) => string;
    onClick: (value: T) => void;
}

/**
 * This is a clone of the Selector component, but with a search bar.
 * It is used for selecting users in the staff dashboard.  
 */
export default function SelectorWithSearch<T>(props: Props<T>) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogTrigger className="bg-blue-300 border-[1px] border-black rounded-xl p-4">
                {props.buttonName}
            </DialogTrigger>
            <DialogContent className="z-[1000] max-w-[90%] sm:max-w-[425px] max-h-[80%] overflow-hidden flex flex-col">
                <DialogHeader>
                    <DialogTitle>{props.dialogName}</DialogTitle>
                </DialogHeader>

                <Input value={searchTerm} setValue={setSearchTerm} />

                <Cards
                    {...props}
                    searchTerm={searchTerm}
                    setIsOpen={setIsOpen}
                />
            </DialogContent>
        </Dialog>
    );
}

function Cards<T>(
    props: Props<T> & {
        setIsOpen: Dispatch<SetStateAction<boolean>>;
        searchTerm: string;
    },
) {
    const filteredItems = props.items.filter((item) => {
        const combinedInfo =
            props.title(item) + props.description(item) + props.email(item);
        return combinedInfo
            .toLowerCase()
            .includes(props.searchTerm.toLowerCase());
    });

    return (
        <div className="max-h-full overflow-auto flex flex-col gap-3 px-5">
            {filteredItems.map((item) => (
                <Card key={props.id(item)} {...props} item={item} />
            ))}
        </div>
    );
}

function Card<T>(
    props: Props<T> & {
        setIsOpen: Dispatch<SetStateAction<boolean>>;
        item: T;
    },
) {
    return (
        <div className="flex flex-row justify-between p-5 min-h-[150px] max-h-[150px] bg-neutral-200 rounded-lg border-2 border-neutral-400 shadow-md">
            <div className="flex flex-row gap-3">
                {props.imageURL && (
                    <div className="h-full flex flex-col justify-center">
                        <div className="rounded-full overflow-hidden w-[40px] md:w-[80px]">
                            <Image
                                src={props.imageURL(props.item)}
                                width={128}
                                height={128}
                                alt=""
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}

                <div className="flex flex-col justify-center pr-[10px]">
                    <p className="text-md md:text-xl break-all">
                        {props.title(props.item)}
                    </p>
                    <p className="text-xs md:text-sm break-all">
                        {props.description(props.item)}
                    </p>
                </div>
            </div>

            <button
                className="bg-blue-500 border-[1px] border-black rounded-xl p-4 h-min my-auto"
                onClick={() => {
                    props.onClick(props.item);
                    props.setIsOpen(false);
                }}
            >
                Select
            </button>
        </div>
    );
}
