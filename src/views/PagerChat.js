import React, {useContext, useEffect, useState} from 'react';
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
                            <Messages/>
                            <ChatMessageForm/>
                        </MainCard>
                    </div>
                </section>
            </SocketContext.Provider>
        );
    else return <Redirect from="*" to="/"/>
};

const Messages = () => {

    const socket = useContext(SocketContext);

    const [connectedUsers, setConnectedUsers] = useState('');
    const [disconnectedUsers, setDisonnectedUsers] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("user-connected", ({username}) => {
            setConnectedUsers(username);
        });

        socket.on('user-disconnected', username => {
            setDisonnectedUsers(username);
        });

        return () => socket.disconnect();
    }, [socket]);

    return (
        <div>
            {
                messages.map((message, i) =>
                    <Message key={i}
                             type={message.type}
                             name={message.username}
                             time={message.time}
                             message={message.text}
                             img={message.url}
                             alt={message.alt}/>
                    )
            }
        </div>
    )
};
