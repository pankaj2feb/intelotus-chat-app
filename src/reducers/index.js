import {combineReducers} from "redux";
import messages from "./messages";
import chatClient from "./chatclient";
import user from "./user";

const chat = combineReducers({messages, chatClient, user});

export default chat;