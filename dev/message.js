import React from "react";

export class Message extends React.Component{
	render(){
		return(
			<p>{ this.props.user } :  {this.props.mess.message}</p>
		);
	}
}