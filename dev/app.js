import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from './db';
import { Chat } from "./chat";
import { User } from "./User";

class App extends Component {
	constructor(props){
		super()
		this.state = {
			messages : [],
			user : ""
		}
		this.updateUser = this.updateUser.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
	}
	
	componentWillMount(){
		//setInterval(() => {
			this.setState({ messages: [] });
			const _MessagesAll = firebase.database().ref('chatMessages/').orderByKey();
			_MessagesAll.on("child_added", (snapshot) => {
				let _all = {user : snapshot.val().user, time : snapshot.val().time, message : snapshot.val().message}
				this.setState({ messages: [...this.state.messages, _all] });
			});	

		//},2000)
	}
	
	updateUser(User){
		this.setState({
			user : User 
		})
	}
	updateMessage(mess){
		const _Messages = firebase.database().ref('chatMessages'),
			Messages = this.state.messages,
			_message = {
				user : this.state.user,
				message : mess,
				time : new Date().getTime()
			};
		_Messages.push(_message);
		
	}
	render(){

		let _comp;
		if(this.state.user !== ""){
			_comp = <Chat updateMess={this.updateMessage} messages={this.state.messages} user={this.state.user} />;
		} else {
			_comp = <User update={this.updateUser}/>
		}
		return(
			<div>
				<h1>Welcome to Char Box 01</h1>
				{ _comp }
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));