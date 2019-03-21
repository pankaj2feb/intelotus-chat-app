import React, { Component } from 'react'
import ChatClinetUnengaged from './components/chatClinetUnengaged'
import ChatRegistration from './components/chatRegistration'
import ChatConversation from './components/chatConversation'
import "./styles.css"


class ChatClient extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { clientstate } = this.props;
        
        switch (clientstate) {
            case 'unEngaged':
                return(<ChatClinetUnengaged/>);
                   
            case 'registration':
                return(<ChatRegistration/>);
            
            case 'conversation':
                return(<ChatConversation/>);
                    
            default:
                return("Unstable state");
               
        }
       
    }
}

export default ChatClient;

