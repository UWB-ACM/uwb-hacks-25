"use client";
import { useEffect, useState } from "react";
import { TestRecord } from "../util/dataTypes";

export default function TestRecords() {
    const [testData, setData] = useState<TestRecord[]>([]);

    useEffect(() => {
        fetch("/api/test")
            .then((response) => response.json())
            .then((remote_data) => {
                setData(remote_data.data);
            })
            .catch((error) => console.error("Failed to load data:", error));
    }, []);

    return (
        <>
            {testData.map((data, i) => (
                <div className="flex" key={i}>
                    <h1 className="mr-4 font-extrabold">{data.id}</h1>
                    <h1>{data.created_at}</h1>
                </div>
            ))}
        </>
    );
}
