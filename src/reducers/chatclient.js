const chatClient = (state=[], action) => {
    switch(action.type){
        case 'SET_CHAT_STATE':
            return {...state, 
                chatClientState:action.payload
            }
        default:
            return state
        }
}

export default chatClient;