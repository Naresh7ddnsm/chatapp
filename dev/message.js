import React from "react";

export class Message extends React.Component{
	render(){
		let _currentUser = "";
		if(this.props.mess.user == this.props.user){
			_currentUser = "current"
		}
		return(
			<p className={_currentUser}>{ this.props.mess.user } : {this.props.mess.message}</p>
		);
	}
}