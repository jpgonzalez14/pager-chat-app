import React from "react";
import {Redirect} from "react-router-dom";
//socket context
import {socket, SocketContext} from './../context/socket';
//components
import MainCard from "../components/Cards/MainCard";
import Message from "../components/Message/Message";
import ChatMessageForm from "../components/Forms/ChatMessageForm";

export default function PagerRegister({username}) {

    if (username)
        return (
            <SocketContext.Provider value={socket(username)}>
                <section>
                    <div className="justify-content-middle">
                        <MainCard classNames={"card round-border-8 shadow px-24"}>
                            <Message name={"JP"} time={"9:30"} messages={["This is a message"]}/>
                            <ChatMessageForm/>
                        </MainCard>
                    </div>
                </section>
            </SocketContext.Provider>
        );
    else return <Redirect from="*" to="/"/>
};