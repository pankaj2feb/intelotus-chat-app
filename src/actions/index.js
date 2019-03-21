import * as types from '../constants/ActionTypes';

export const userRegistration = (username, useremail) => ({
    type: types.USER_REGISTRATION,
    payload: {
        username, useremail
    }
})

export const userRegistered = (message) => ({
    type: types.USER_REGISTERED,
    payload: {
        clientstate:'conversation'
    }
})

export const addMessage = (message) => ({
    type: types.ADD_MESSAGE,
    payload: message
})

export const messageReceived = (message) => ({
    type: types.MESSAGE_RECEIVED,
    payload: message
})

export const setChatState = (chatState) => ({
    type: types.SET_CHAT_STATE,
    payload: chatState
})





