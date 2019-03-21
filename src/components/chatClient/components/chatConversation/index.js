import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'
import io from "socket.io-client";
import { addMessage } from '../../../../actions'
import Message from './components/Message'

class ChatConversation extends Component {
    constructor(props) {
        super(props);
       
        let self = this;
        this.state = { conversation:"",  userchat:{}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.socket = io('localhost:4000');

        this.privateId = '';

        this.socket.on('RECEIVE_MESSAGE', function(data){
            console.log(data);
            props.addMessage(data)
        });


        self.socket.on('connect', function() {
            const username = props.userDetails;
            self.socket.emit('HELLO_SERVER', {privateId:self.socket.id, username});
            //console.log('HELLO_SERVER', data);
        }); 

        self.socket.on('HELLO_CLIENT', function(data){
            console.log('HELLO_CLIENT', data);
            self.privateId = data.serverid;
            self.sendMessage(true);
        });


        

       

       

    }

    componentDidMount(){
        let self = this;
       
        this.socket.on('SERVER_ID_RECEIVE', function(data){
            console.log('SERVER_ID_RECEIVE', data);
            self.privateId = data.serverid;
        });

       



       

    }
    

    handleSubmit(){
       this.sendMessage();
    }

    sendMessage(initial=null){
        let chat = {};
        const username = this.props.userDetails;
        const privateId = this.privateId;
        if(initial){
            chat = {
                messages: "INITIAL",
                user: username
            }

        }else{
           
            chat = this.state.userchat;
        }
        
        

       setTimeout(()=>{
        chat.timestamp = new Date().getTime();
        chat.clientId = this.socket.id;
        chat.privateId = privateId;  
        this.props.addMessage(chat)
        console.log(chat);
        this.socket.emit('PRIVATE_MESSAGE_SEND', chat);

       // this.socket.emit('SEND_MESSAGE', chat);
        });
       
       

    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        

        const username = this.props.userDetails;
       // console.log(this.props);

        this.setState({
            userchat:{
                messages: value,
                user: username
            }
        })
        
        
    }

    render() {
        const messages = this.props.messages;
        const username = this.props.userDetails;
        return(
            <div className="chat-client">
                <div className="chat-conversation">
                   
                    <div className="conversation">
                        <ul>
                        {messages.map(message=>(
                          <Message key={message.timestamp} author={message.user} message={message.message} />
                        ))}
                        </ul>
                    </div> 
                    <input type="text" className="userchat" name="userchat"  
                                    onChange={this.handleChange}/>
                    <button className="btn--raised btn--yellow" 
                        onClick={this.handleSubmit}
                    >Send</button>
                </div>
            
            </div>);
        
       
    }
}



const mapDispatchToProps = dispatch => ({
    addMessage: (chatState) => {
      dispatch(addMessage(chatState))
    },
    
  })


const mapStateToProps = state => ({
    userDetails:state.user.username,
    messages:state.messages
  }) 
  
export default ChatConversation = connect(mapStateToProps, mapDispatchToProps)(ChatConversation)




