import React, {Component} from 'react';
import {connect} from "react-redux";
import AdminBlock from "./headers/AdminBlock";
import Menu from "./headers/Menu";
import AdminConfig from "./headers/AdminConfig";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className='header__block'>

				<AdminBlock/>
				<div className="header__menu">
					<Menu/>
				</div>
				<AdminConfig/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
export default Container;

