import React, {Component} from 'react';
import {connect} from "react-redux";

import Wrapper from "./Wrapper";
import {getFunctionUrl} from "../store/actions/ualfunction";


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}



	render() {

		return (
			<Wrapper/>

		);
	}
}

const mapStateToProps = (state) => ({
	usersData: state.ualfunction.usersData
});

const mapDispatchToProps = {
	getFunctionUrl
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
export default Container;

