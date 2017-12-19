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
			user : ""
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
		// const _Messages = firebase.database().ref('chatMessages'),
		const Messages = this.state.messages,
			_message = {
				user : this.state.user,
				message : mess,
				time : new Date().getTime()
			};
		this._Messages.push(_message);
		
	}
	render(){

		// let _comp;
		// if(this.state.user !== ""){
		// 	_comp = <Chat updateMess={this.updateMessage} messages={this.state.messages} user={this.state.user} />;
		// } else {
		// 	_comp = <User update={this.updateUser}/>
		// }
		return(
			<div>
				<h1>Welcome to Char Box 01</h1>
				
				<Authen />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));