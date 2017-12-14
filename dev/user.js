import React from "react";

export class User extends React.Component{
	constructor(props){
		super()
		this.login = this.login.bind(this);
	}
	login(e){
		e.preventDefault();
		let newUser = this.refs.username.value;
		this.props.update(newUser)
	}
	render(){
		return(
			<div>
				<h2>Login with Id</h2>
				<form onSubmit = {this.login}>
					<label> User Name </label>
					<input type='text' name='user' ref='username' />
				</form>
			</div>
		)
	}
}