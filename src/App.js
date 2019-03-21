import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatClient from './components/chatClient'
import { connect } from 'react-redux'
import { setChatState } from '../src/actions/index'


class App extends Component {
  
  componentDidMount() {
    this.props.setChatState('unEngaged');
    console.log("action");
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        </header>
        <p className="App-intro">
         
        </p>
        <ChatClient clientstate={this.props.clientstate.chatClientState}/>
      </div>
    );
  }



}



const mapStateToProps = state => ({
 clientstate: state.chatClient
});


const mapDispatchToProps = dispatch => ({
  setChatState: (chatState) => {
    dispatch(setChatState(chatState))
  }
})

export default App = connect(mapStateToProps, mapDispatchToProps)(App)

