const user = (state=[], action) => {
    switch(action.type){
        case 'USER_REGISTRATION':
            return {...state, 
                username:action.payload.username,
                useremail:action.payload.useremail
            }
       
        default:
            return state
        }
}

export default user;