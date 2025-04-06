import React, {
    Dispatch,
    SetStateAction,
    Suspense,
    use,
    useState,
} from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import Image from "next/image";

export interface SelectorProps<T> {
    items: Promise<T[]>;
    buttonName: string;
    dialogName: string;
    id: ((value: T) => number) | ((value: T) => string);
    title: (value: T) => string;
    description: (value: T) => string;
    imageURL?: (value: T) => string;
    onClick: (value: T) => void;
}

export default function Selector<T>(props: SelectorProps<T>) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogTrigger className="bg-blue-300 border-[1px] border-black rounded-xl p-4">
                {props.buttonName}
            </DialogTrigger>
            <DialogContent className="max-w-[90%] sm:max-w-[425px] max-h-[80%] z-[1000] overflow-hidden flex flex-col">
                <DialogHeader>
                    <DialogTitle>{props.dialogName}</DialogTitle>
                </DialogHeader>

                <Suspense fallback={<div>Please wait.</div>}>
                    <Cards {...props} setIsOpen={setIsOpen} />
                </Suspense>
            </DialogContent>
        </Dialog>
    );
}

function Cards<T>(
    props: SelectorProps<T> & { setIsOpen: Dispatch<SetStateAction<boolean>> },
) {
    const itemList = use(props.items);

    return (
        <div className="max-h-full overflow-auto flex flex-col gap-3 px-5">
            {itemList.map((item) => (
                <Card key={props.id(item)} {...props} item={item} />
            ))}
        </div>
    );
}

function Card<T>(
    props: SelectorProps<T> & {
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
