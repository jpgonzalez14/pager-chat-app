import React, {useContext, useEffect, useState} from "react";
import {SocketContext} from "../../context/socket";
//components
import InputAlert from "../Alert/InputAlert";

const ALERT_MESSAGES = [{message:'Typing...', isDanger: false}, {message:'Typing...', isDanger: false}, {message:'Message cannot be empty', isDanger: false}];
export default function ChatMessageForm() {
    const socket = useContext(SocketContext);
    const [isTyping, setIsTyping] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [alert, setAlert] = useState(null);

    const handleChange = (e) => {
        e.preventDefault();
        setTextMessage(e.target.value);
        setIsTyping(true);
        setAlert(null)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (textMessage.trim().length === 0){
            setAlert(ALERT_MESSAGES[2])
        } else {
            socket.emit('text-message', {text: textMessage});
            setTextMessage('');
            setIsTyping(false);
        }
    };

    const onKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            onSubmit(e);
        }
    };

    useEffect(() => {
        socket.emit('typing', {status: isTyping});
    }, [isTyping, socket]);

    useEffect(() => {
        socket.on('is-typing', typers => {
            console.log(typers)
        });
    }, [socket]);


    return (
        <div className="mb-8">
            <input className="px-4 mb-8 round-border-8"
                   type="text"
                   placeholder="Message"
                   onChange={handleChange}
                   value={textMessage}
                   onBlur={() => setIsTyping(false)}
                   onKeyPress={onKeyPressHandler}/>
            <input className="message-input-button" type="submit" value="Send" onClick={onSubmit}/>
            {
                alert && <InputAlert alertMessage={alert.message} isDanger={alert.isDanger}/>
            }
            {
                alert && <InputAlert alertMessage={alert.message} isDanger={alert.isDanger}/>
            }
        </div>
    )
};