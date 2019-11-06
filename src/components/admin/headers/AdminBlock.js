import React, {Component} from 'react';
import {connect} from "react-redux";
import photo from '../../../assets/img/avatar.jpg'

class AdminBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className='admin__section'>
				<div className='avatar__block'>
					<div className='avatar__section'>
						<img
							className='avatar__image'
							src={photo} alt='Admin Photo'
						/>
					</div>
				</div>
				<div className='admin__information'>
					<h2 className="profile__name">
						Vzgen
					</h2>
					<button className="logout__button">
						Log Out
					</button>
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(AdminBlock);
export default Container;

