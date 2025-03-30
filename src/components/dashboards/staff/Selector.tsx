import React, { Suspense, use, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";

export interface SelectorProps<T> {
    items: Promise<T[]>;
    buttonName: string;
    id: ((value: T) => number) | ((value: T) => string);
    title: (value: T) => string;
    description: (value: T) => string;
    onClick: (value: T) => void;
}

export default function Selector<T>(props: SelectorProps<T>) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogTrigger className="bg-blue-300 border-[1px] border-black rounded-xl p-4">
                {props.buttonName}
            </DialogTrigger>
            <DialogContent className="max-h-[80%] overflow-hidden flex flex-col">
                <DialogHeader>
                    <DialogTitle>{props.buttonName}</DialogTitle>
                </DialogHeader>

                <Suspense fallback={<div>Please wait.</div>}>
                    <Cards {...props} />
                </Suspense>
            </DialogContent>
        </Dialog>
    );
}

function Cards<T>(props: SelectorProps<T>) {
    const itemList = use(props.items);

    return (
        <div className="max-h-full overflow-auto flex flex-col gap-3 px-5">
            {itemList.map((item) => (
                <Card key={props.id(item)} {...props} item={item} />
            ))}
        </div>
    );
}

function Card<T>(props: SelectorProps<T> & { item: T }) {
    return (
        <div className="flex flex-row justify-between p-5 h-min-[200px] bg-neutral-200 rounded-lg border-2 border-neutral-400 shadow-md">
            <div className="flex flex-col">
                <p className="text-xl">{props.title(props.item)}</p>
                <p className="text-sm">{props.description(props.item)}</p>
            </div>

            <button
                className="bg-blue-500 border-[1px] border-black rounded-xl p-4"
                onClick={() => props.onClick(props.item)}
            >
                Select
            </button>
        </div>
    );
}
