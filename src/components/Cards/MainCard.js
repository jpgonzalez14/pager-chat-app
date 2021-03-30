import React from "react";

export default function MainCard({title, children}) {
    return (
        <div className="card round-border-8 shadow p-40">
            {title && <h1 className="title mt-0 mb-40">{title}</h1>}
            {children}
        </div>
    )
};