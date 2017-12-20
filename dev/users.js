import React, {Component} from "react";

export class Users extends React.Component{
	render(){
		return(
				<div>
				{ this.props.users.map((user, i) => {
					return <li>user.email</li>
				}) }
			</div>
			)
		
	}
}