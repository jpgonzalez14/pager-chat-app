import React, {useContext, useEffect, useState} from "react";
import {SocketContext} from "../../context/socket";
import axios from "axios";

//components
import InputAlert from "../Alert/InputAlert";

const ALERT_MESSAGES = {message: 'Message cannot be empty', isDanger: false};
const GIF_APP_KEY = process.env.REACT_APP_GIFHY_KEY_APP;
export default function ChatMessageForm({username}) {
    const socket = useContext(SocketContext);
    const [isTyping, setIsTyping] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [usersTyping, setUsersTyping] = useState('');
    const [alert, setAlert] = useState(null);

    const handleChange = (e) => {
        e.preventDefault();
        setTextMessage(e.target.value);
        setIsTyping(true);
        if (e.target.value.trim().length > 0)
            setAlert(null)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (textMessage.trim().length === 0) {
            setAlert(ALERT_MESSAGES)
        } else {
            if (textMessage.startsWith("/gif ")) {
                const query = textMessage.replace("/gif ", "");
                axios
                    .get(
                        `https://api.giphy.com/v1/gifs/search?api_key=${GIF_APP_KEY}&q=${query}&limit=1&offset=0&rating=g&lang=en`
                    )
                    .then(({ data }) => {
                        socket.emit("image-message", {
                            url: data.data[0].images.downsized_medium.url,
                            alt: query,
                        });
                    })
                    .catch((error) => console.log(error));
            } else {
                socket.emit('text-message', {text: textMessage});
                setTextMessage('');
                setIsTyping(false);
            }
        }
    };

    const onKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            onSubmit(e);
        }
    };

    const usersTypingList = (typers, username) => {
        let usersThatAreTyping = [];
        for (const [key, value] of Object.entries(typers)) {
            if (value && key !== username)
                usersThatAreTyping.push(key)
        }
        if (usersThatAreTyping.length === 1) {
            return `${usersThatAreTyping[0]} is typing`
        } else if (usersThatAreTyping.length > 1) {
            return "People are typing..."
        } else return ''
    };

    useEffect(() => {
        socket.emit('typing', {status: isTyping});
    }, [isTyping, socket]);

    useEffect(() => {
        socket.on('is-typing', typers => {
            setUsersTyping(usersTypingList(typers, username))
        });
    }, [socket, username]);


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
            <InputAlert alertMessage={usersTyping} isDanger={false}/>
        </div>
    )
};