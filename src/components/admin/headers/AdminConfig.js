import React, {Component} from 'react';
import {connect} from "react-redux";

class AdminConfig extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<>
				<div className="admin__config">
					<button className="configuration">CONFIG</button>
					<h2 className="support__style">Support admin@mail.ru</h2>
					<h3 className="support__style">+344 56135 351</h3>
				</div>

			</>
		);
	}
}

const mapStateToProps = (state) => ({


});

const mapDispatchToProps = {

};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(AdminConfig);
export default Container;

