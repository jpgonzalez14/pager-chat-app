import React from "react";

const IMAGE_CONFIG = {
    background: 'EEEEEE',
    color: '000000',
    uppercase: true
};
export default function Message({name, time, messages}) {

    return (
        <div className="py-24">
            <img
                src={`${process.env.REACT_APP_AVATAR}/api/?name=${name}&background=${IMAGE_CONFIG.background}&color=${IMAGE_CONFIG.color}&uppercase=${IMAGE_CONFIG.uppercase}`}
                alt={`${name} avatar`} className="avatar mr-20" height={40}/>
            <p className="username m-0 mb-4">{name} <span className="timestamp">{time}</span></p>
            {
                messages.map((message, i) => <p key={i} className="message m-0 mb-4">{message}</p>)
            }
        </div>
    )
};