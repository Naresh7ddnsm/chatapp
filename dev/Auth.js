import React, {Component} from "react";
import firebase from "./db";

export class Authen extends React.Component {
	signin(e){
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		const auth = firebase.auth();

		const promise = auth.signInWithEmailAndPassword(email, password);

		promise.then(user => {
			let lOut = document.getElementById('logout'),
				lIn = document.getElementById('signin'),
				err = "Welcome " + user.email;
			this.setState({
				_error : err
			})
			lOut.classList.remove('hide');
			lIn.classList.add('hide');
		})

		promise.catch(e => {
			let err = e.message;
			console.log(err);
			this.setState({
				_error : err
			})
		})

	}

	signup(e){
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		const auth = firebase.auth();

		const promise = auth.createUserWithEmailAndPassword(email, password);

		promise
		.then(user => {
			let err = "Welcome " + user.email;
			const users = firebase.database().ref('users/'+user.uid);
			const _user = {
				email : user.email,
				timestamp : new Date().getTime()
			};
			users.push(_user);
			this.setState({
				_error : err
			})
			console.log(user)
		});
		promise
		.catch(e => {
			let err = e.message;
			this.setState({
				_error : err
			})
		})
	}
	logout(){
		firebase.auth().signOut();
		let lOut = document.getElementById('logout'),
			lIn = document.getElementById('signin'),
			err = "Thanks, Keep in touch to chatBox";
			this.setState({
				_error : err
			})
			lOut.classList.add('hide');
			lIn.classList.remove('hide');

	}
	google(){
		console.log('in google provider')
		let provider = new firebase.auth.GoogleAuthProvider();
		const promise = firebase.auth().signInWithPopup(provider);

		promise.then(result => {
			console.log(result);
			let user = result.user;
			firebase.database().ref('users/'+user.uid).set({
				email : user.email,
				name : user.displayName
			});
		})
	}
	constructor(props){
		super(props)

		this.state = {
			_error : ''
		}
		this.signin = this.signin.bind(this);
		this.signup = this.signup.bind(this);
		this.logout = this.logout.bind(this);
		this.google = this.google.bind(this);
	}
	render(){
		return(
			<div>
				<input type='email' name='email' ref='email' id='email' /><br /> <br />
				<input type='password' name='password' ref='password' id='password' /> <br /> <br />
				<p>{this.state._error}</p>
				<br/><br/>
				<button id='signin' onClick={this.signin}>Log In</button>
				<button onClick={this.signup}>Sign Up</button>
				<button id="logout" className='hide' onClick={this.logout}>Log Out</button><br /><br />
				<button id="google" className='' onClick={this.google}>Sign In with Google</button>
			</div>
		)
	}
}