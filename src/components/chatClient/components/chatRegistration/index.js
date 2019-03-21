import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./styles.css"
import { setChatState, userRegistration } from '../../../../actions'


class ChatRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"",email:"" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    handleSubmit(event) {
      this.props.userRegistration(this.state.name, this.state.email);
      this.props.setChatState('conversation');
       event.preventDefault();
    }

    render() {
       return(
            <div className="chat-client">
                <div className="chat-registration">
                   
                    <input type="text" name="name" required="required" placeholder="Name" 
                                    value={this.state.name} onChange={this.handleChange}/>
                    <input type="email" name="email" required="required" placeholder="Email"
                                    value={this.state.email} onChange={this.handleChange}/>
                    <button className="btn--raised btn--yellow" 
                        onClick={this.handleSubmit}
                    >Register</button>
                </div>
            
            </div>);
        
        
       
    }
}

const mapDispatchToProps = dispatch => ({
    setChatState: (chatState) => {
      dispatch(setChatState(chatState))
    },
    userRegistration: (name, email) => {
        dispatch(userRegistration(name, email))
    },
  })
  
export default ChatRegistration = connect(() => ({}), mapDispatchToProps)(ChatRegistration)


