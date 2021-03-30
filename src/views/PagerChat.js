import React from "react";
//components
import MainCard from "../components/Cards/MainCard";
import Message from "../components/Message/Message";
import ChatMessageForm from "../components/Forms/ChatMessageForm";

export default function PagerRegister() {

    return (
        <section>
            <div className="justify-content-middle">
                <MainCard classNames={"card round-border-8 shadow px-24"}>
                    <Message name={"JP"} time={"9:30"} messages={["This is a message"]}/>
                    <ChatMessageForm/>
                </MainCard>
            </div>
        </section>
    )
};