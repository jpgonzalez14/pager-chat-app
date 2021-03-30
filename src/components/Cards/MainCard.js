import React from "react";

export default function MainCard({title, classNames, children}) {
    return (
        <div className={classNames}>
            {title && <h1 className="title mt-0 mb-40">{title}</h1>}
            {children}
        </div>
    )
};