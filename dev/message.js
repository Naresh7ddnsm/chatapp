import React from "react";

export class Message extends React.Component{
	render(){
		return(
			<p>{ this.props.mess.user } : {this.props.mess.message}</p>
		);
	}
}