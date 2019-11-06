import React, {Component} from 'react';
import Header from "./admin/Header";

import Maine from "./admin/Maine";

class Wrapper extends Component {
	render() {
		return (
			<>
				<div className="header__filter">
					<Header/>
				</div>
				<div className='main'>
					<Maine/>

				</div>
				{this.props.children}
			</>

		);
	}
}

export default Wrapper;
