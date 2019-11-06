import React, {Component} from 'react';
import {connect} from "react-redux";

import {Link, withRouter} from "react-router-dom";



const Styles = {
	textDecoration: 'none',
	marginBottom: 10,
	marginTop: 10,
	color: 'white',
	background: "rgba(38, 35, 39, 0.49)",
	outline: "none",
	border: 1,
	borderColor: `rgba(38, 35, 39, 0.49)`,
	cursor: "pointer",
	fontFamily: "sans-serif",
	fontSize: 20,
	paddingTop: 10,
	paddingBottom: 10,
	paddingLeft: 15,
	paddingRight: 15,
	borderRadius: 8,
};


class Maine extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const path = this.props.match.path.replace(/\/(.+)\/.+$/, '/$1');
		return (
			<div className="main__menu_filter">
				<div className='main__content'>
					<div className="config__block">
						<div className="main__content_menu">
							<nav>
								<ul className="main__content_ul">
									<li className="main__content_config">
										<button className="main__content_buttons">
											<Link
												style={Styles}
												to={path + '/create'}>CREATE</Link>
										</button>
									</li>
									<li className="main__content_config">
										<button className="main__content_buttons"><Link
											style={Styles}
											to={path + '/update'}>UPDATE</Link>
										</button>
									</li>
									<li className="main__content_config">
										<button className="main__content_buttons"><Link
											style={Styles}
											to={path + '/delete'}>DELETE</Link>
										</button>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

			</div>

		);
	}
}

const mapStateToProps = (state) => ({
	usersData: state.ualfunction.usersData
});

const mapDispatchToProps = {};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Maine);
export default withRouter(Container);






