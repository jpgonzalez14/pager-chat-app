import React from "react";

export default function InputAlert({alertMessage, isDanger}) {

    return (
        <span className={"small-text " + isDanger ? "text-danger" : ""}>{alertMessage}</span>
    )
};