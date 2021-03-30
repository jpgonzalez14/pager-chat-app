import React from "react";

export default function Message({name, time, message}) {

    return (
        <div>

            <img src={`https://ui-avatars.com/api/?name=${name}`} alt={`${name} avatar`}/>
            {name}
        </div>
    )
};