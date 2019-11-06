import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../../Wrapper";
import Select from "react-select";
import {destroyRoomFunction, setApartmentFunction} from "../../../store/actions/aportamentRecuestFunctions";
import {setHotels} from "../../../store/actions/hotelRecuestFunction";
import _ from "lodash";

class DeleteRoom extends Component {
	static propTypes = {};
	apartment;

	constructor(props) {
		super(props);
		this.state = {
			selectHotelName: null,
			selectRoomNumber: null,
			h_id: '',
			r_id: '',
		}
	}

	;

	deleteApartmentData = async (ev) => {
		ev.preventDefault();
		await this.props.destroyRoomFunction(this.state.r_id)

	};


	handleSelectHotelsChange = async selectHotelName => (await this.setState({
		selectHotelName,
		h_id: selectHotelName.id
	}));

	roomDataChange = async selectRoomNumber => (await this.setState({selectRoomNumber, r_id: selectRoomNumber.id}));

	componentDidMount() {
		this.props.setHotels();
		this.props.setApartmentFunction();
	}

	render() {
		const {hotels, rooms} = this.props;
		const { h_id} = this.state;
		const apartment = !_.isEmpty(rooms) ? this.props.rooms.apartment.filter((i) => i.hotel_id === h_id) : [];
		return (
			<Wrapper>

				<div className='card-body'>
					<form method='DELETE' onSubmit={this.deleteApartmentData}>

						<Select
							getOptionLabel={(i) => i.name}
							getOptionValue={(i) => i.id}
							onChange={this.handleSelectHotelsChange}
							options={hotels.hotels}

						/>
						<Select
							getOptionLabel={o => o.number}
							getOptionValue={option => option.id}
							options={apartment}
							onChange={this.roomDataChange}
						/>
						<div className='card-footer'>
							<button className="btn btn--radius-2 btn--blue-2" type='submit'>Create</button>
						</div>
					</form>
				</div>
			</Wrapper>
		);
	}
}


const mapStateToProps = (state) => ({
	rooms: state.aportamentRecuestFunctions.rooms,
	hotels: state.hotelRecuestFunction.hotels,
});

const mapDispatchToProps = {
	setApartmentFunction,
	setHotels,
	destroyRoomFunction
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(DeleteRoom);

export default Container;
