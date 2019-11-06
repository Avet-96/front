import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginUser} from "../store/actions/users";


class Login extends Component {
	static propTypes = {};
	constructor(props) {
		super(props);
		this.state = {

		}
	}



	handleChange = (ev) => {
	//	this.setState({[ev.target.name]: ev.target.value})
	};



	render() {
		return (
			<>

			</>
		);
	}
}


const mapStateToProps = (state) => ({
	data: state.users.usersData
});

const mapDispatchToProps = {
	loginUser
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);

export default Container;
