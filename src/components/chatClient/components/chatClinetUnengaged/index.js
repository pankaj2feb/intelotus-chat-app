import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setChatState } from '../../../../actions'
import "./styles.css"

class ChatClientUnengaged extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        
        return(
        <div className="chat-client">
            <div className="chat-initial">
                <div className="intro">How May I Help You?</div>
                <button className="btn--raised btn--yellow" 
                    onClick={(e)=>{this.props.setChatState("registration")}}
                 >Chat Me</button>
            </div>
        </div>);
    }
}

const mapDispatchToProps = dispatch => ({
    setChatState: (chatState) => {
      dispatch(setChatState(chatState))
    }
  })
  
  export default ChatClientUnengaged = connect(() => ({}), mapDispatchToProps)(ChatClientUnengaged)

//export default ChatClientUnengaged;

