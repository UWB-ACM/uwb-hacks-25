import React from "react";
import { FaSearch } from "react-icons/fa";

function Input({
    value,
    setValue,
}: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                maxWidth: "300px",
                backgroundColor: "#f0f0f0",
                borderRadius: "4px",
                padding: "8px 12px",
            }}
        >
            <FaSearch style={{ marginRight: "8px", color: "#888" }} />
            <input
                type="text"
                placeholder="Search by username"
                style={{
                    flex: 1,
                    border: "none",
                    backgroundColor: "transparent",
                    outline: "none",
                    fontSize: "14px",
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default Input;
