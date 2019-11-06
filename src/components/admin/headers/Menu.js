import React, {Component} from 'react';
import {connect} from "react-redux";
import {getFunctionUrl} from "../../../store/actions/ualfunction";
import {Link} from "react-router-dom";

const Styles = {
	textDecoration: 'none',
	marginBottom:100
}

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sendHotel: [],
			sendRoom: [],
			sendService: []

		}
	}


	render() {
		return (
			<>
				<nav>
					<ul>
						<li className="header__menu_li">
							<Link to="/hotel" style={Styles} className="menu__link_active menu__links" >HOTEL
							</Link>
						</li>
						<li className="header__menu_li">
							<Link to='/room' style={Styles} className="menu__links">ROOM</Link>
						</li>

						<li className="header__menu_li">
							<Link to='/service' style={Styles} className="menu__links">SERVICE</Link>
						</li>
					</ul>
				</nav>
			</>
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
)(Menu);
export default Container;

