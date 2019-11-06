import React, {Component} from 'react';
import {connect} from "react-redux";
import {registrationRequest} from "../store/actions/users";

class Registration extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {}
	}

	getUserData = (ev) => {
		ev.preventDefault();
		this.props.registrationRequest(this.state)
	};
	hendelChange = (ev) => {
		this.setState({[ev.target.name]: ev.target.value});
	};


	render() {
		const {email, password, r_password, f_name, name} = this.state;
		return (
			<div>
				<form method='POST' onSubmit={this.getUserData}>
					<input
						placeholder="name" type='name' name='name'
						value={name || ''} onChange={this.hendelChange}
					/>
					<input
						placeholder='f_name' type="f_name" name='f_name'
						value={f_name || ''} onChange={this.hendelChange}
					/>
					<input
						placeholder="email" type='email' name='email'
						value={email || ''} onChange={this.hendelChange}
					/>
					<input
						type="password" name='password'
						value={password || ''} onChange={this.hendelChange}
					/>
					<input
						type="r_password" name='r_password'
						value={r_password || ''} onChange={this.hendelChange}
					/>


					<button>Registration</button>
				</form>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	registrationRequest
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Registration);

export default Container;
