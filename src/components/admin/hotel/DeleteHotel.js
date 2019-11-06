import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../../Wrapper";
import {deleteHotels, setHotels} from "../../../store/actions/hotelRecuestFunction";
import Select from "react-select";


class DeleteHotel extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			id: ''
		}
	}

	deleteHotelData = (ev) => {
		ev.preventDefault();
		const {id} = this.state;
		this.props.deleteHotels(id);
		console.log(this.state.id)
	}

	componentDidMount() {
		this.props.setHotels();
	}
	handleSelectHotelsChange=async selectHotelName=>{
	await 	this.setState({selectHotelName, id:selectHotelName.id})
	}


	render() {
		const {hotels} = this.props;
		return (
			<Wrapper>
				<div className='card-body'>
					<form method='DELETE' onSubmit={this.deleteHotelData}>
						<Select
							getOptionLabel={(i) => i.name}
							getOptionValue={(i) => i.id}
							onChange={this.handleSelectHotelsChange}
							options={hotels.hotels}

						/>
						<div className='card-footer'>
							<button className="btn btn--radius-2 btn--blue-2" type='submit'>Delete</button>
						</div>
					</form>
				</div>
			</Wrapper>
		);
	}
}


const mapStateToProps = (state) => ({
	hotels: state.hotelRecuestFunction.hotels
});

const mapDispatchToProps = {
	setHotels,
	deleteHotels

};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(DeleteHotel);

export default Container;
