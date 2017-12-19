import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from './db';
import { Chat } from "./chat";
import { User } from "./user";
import { Authen } from "./Auth";

class App extends Component {
	constructor(props){
		super()
		this.state = {
			messages : [],
			user : null
		}
		this.updateUser = this.updateUser.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
		this._Messages = firebase.database().ref('chatMessages');
	}
	
	componentWillMount(){
		this.setState({ messages: [] });
		 const _MessagesAll = this._Messages.orderByKey();
		_MessagesAll.on("child_added", (snapshot) => {
			this.setState({ messages: [...this.state.messages, snapshot.val()] });
		});
	}
	updateUser(User){
		this.setState({
			user : User 
		})
	}
	updateMessage(mess){
		const Messages = this.state.messages,
			_message = {
				user : this.state.user.email,
				message : mess,
				time : new Date().getTime()
			};
		this._Messages.push(_message);
	}
	render(){
		return(
			<div>
				<h1>Welcome to Char Box 01</h1>
				{ this.state.user ? <Chat user={this.state.user} updateMess = {this.updateMessage} messages={this.state.messages}/> :  <Authen sendUser = {this.updateUser}/> }
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));