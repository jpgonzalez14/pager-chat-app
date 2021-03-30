import React from "react";

export default function ChatMessageForm() {
    return (
        <div className="mb-8">
            <input className="px-4 mb-8 round-border-8" type="text" placeholder="Message"/>
            <input className="message-input-button" type="submit" value="Send"/>
            <span className="small-text">Typing...</span>
        </div>
    )
};