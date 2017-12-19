import React from "react";
import { Message } from "./message";
import firebase from './db';


export class Chat extends React.Component {
	constructor(props){
		super();
		this.postMessage = this.postMessage.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
		this.state = {
			lastMessage : ""
		}
	}
	updateMessage(e){
		this.setState({lastMessage : e.target.value});
	}
	postMessage(e){
		e.preventDefault();
		let message = this.state.lastMessage;
		this.props.updateMess(message);
		this.setState({lastMessage : ""});
	}
	render(){
		console.log(this.props.user);
		return(
			<div>
				<h2>Chat Comp</h2>
				<p>Welcome {this.props.user.email}</p>
				{
					this.props.messages.map((message, i) => {
						 return <Message key={i} user ={this.props.user} mess={message}/>
					})
				}
				<form onSubmit={this.postMessage}>
					<input id='message' type='text' name="message" placeholder='Enter message' onChange={this.updateMessage} value={this.state.lastMessage} ref="message"/>
					<button name='submit' type='submit'>Leave a message</button>
				</form>
			</div>
		);
	}
}

