import React from "react";
import {io} from "socket.io-client";

const SOCKET_BASE_URL = process.env.REACT_APP_API;

export const socket = (username) => io.connect(`${SOCKET_BASE_URL}/?username=${username}`);
export const SocketContext = React.createContext();