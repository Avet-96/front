import React, {Component} from 'react';
import {connect} from "react-redux";
import _ from "lodash";
import Wrapper from "../../Wrapper";
import {setApartmentFunction, updateRoomFunction} from "../../../store/actions/aportamentRecuestFunctions";
import {setHotels} from "../../../store/actions/hotelRecuestFunction";
import Select from "react-select";
import {API_URL} from "../../../Api";
import {setService} from "../../../store/actions/serviceRecuestFunction";



let option;

class UpdateRoom extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			selectHotelName: null,
			selectedOption: null,
			h_id: '',
			rooms: [],
			id: '',
		}
	}

	handleSelectHotelsChange = async selectHotelName => {
		await this.setState({
			selectHotelName,
			h_id: selectHotelName.id
		})
	}
	;
	roomDataChange = async selectedOption => {
		await this.setState({selectedOption, id: selectedOption.id,});
		option = _.split(selectedOption.services, ',').map((val) => this.props.service.service.filter((i) => i.id === _.toNumber(val)));
		console.log(_.split(selectedOption.services, ','));
		console.log(option);
		console.log(this.props.service.service)
	};

	componentDidMount() {
		this.props.setApartmentFunction();
		this.props.setHotels();
		this.props.setService();

	}

	updateRoom = (ev) => {
		const {
			id, number, name, beds, price,
			description, guest, l_beds,
			sole_price, images
		} = this.state;
		ev.preventDefault();
		this.props.updateRoomFunction(
			{
				number, name, beds, price,
				description, guest, l_beds,
				images, sole_price
			}, {id}
		);
	};
	handelChange = (ev) => {
		this.setState({[ev.target.name]: ev.target.value})
	};
	handleFileChange = async (ev) => {
		await this.setState({images: ev.target.files});
		console.log(this.state.images)
	};


	render() {
		const {
			selectedOption, h_id,
			number, name, beds, price, description, guest, l_beds, sole_price,
		} = this.state;
		const {rooms, hotels} = this.props;
		const apartment = !_.isEmpty(rooms) ? this.props.rooms.apartment.filter((i) => i.hotel_id === h_id) : [];

		return (
			<Wrapper>
				<div className='card-body'>
					<form method='POST' onSubmit={this.updateRoom}>
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
						<div>
							{selectedOption ?
								<div>
									<div className='form-row'>
										<div className='name'>{selectedOption.number}</div>
										<div className='value'>
											<input
												placeholder="room number" type='number' name='number'
												className="input--style-6" value={number} onChange={this.handelChange}
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>{selectedOption.name}</div>
										<div className='value'>
											<input
												placeholder="name" type='name' name='name'
												className="input--style-6" value={name} onChange={this.handelChange}
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>{selectedOption.beds}</div>
										<div className='value'>
											<input
												placeholder="beds number" type='number' name='beds'
												className="input--style-6" value={beds} onChange={this.handelChange}
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>{selectedOption.price}</div>
										<div className='value'>
											<input
												placeholder="room price" type='number' name='price'
												className="input--style-6" value={price} onChange={this.handelChange}
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>{selectedOption.description}</div>
										<div className='value'>
											<input
												placeholder="room description" type='text' name='description'
												className="input--style-6" value={description}
												onChange={this.handelChange}
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>{selectedOption.l_beds}</div>
										<div className='value'>
											<input
												placeholder="Last Beds" type='number' name='l_beds'
												className="input--style-6" value={l_beds} onChange={this.handelChange}
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>{selectedOption.sole_price}</div>
										<div className='value'>
											<input
												placeholder="Soled price" type='number' name='sole_price'
												className="input--style-6" value={sole_price}
												onChange={this.handelChange}
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>{selectedOption.guest}</div>
										<div className='value'>
											<input
												placeholder="beds number" type='number' name='guest'
												className="input--style-6" value={guest} onChange={this.handelChange}
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>Service</div>
										<div className='value'>
											<Select
												getOptionLabel={(i) => i.name}
												getOptionValue={option => option.id}
												onChange={this.handleSelectServiceChange}
											//	options={}
												isMulti
											/>
										</div>
									</div>
									<div className='form-row'>
										<div className='name'>Upload Photo</div>
										<div className='input-group js-input-file'>
											<input className='input-file' id='file'
											       type="file" multiple onChange={this.handleFileChange}/>
											<label className="label--file" htmlFor="file">Choose file</label>
										</div>
										<div className="label--desc">Upload your Photo/Resume or any other relevant
										</div>
										<div className='hotel__update_image_block'>
											{selectedOption.images ? JSON.parse(selectedOption.images).map((i) => (
												<img className='images_style'
												     src={`${API_URL}uploadsApartments/${i}`} alt=""/>
											)) : null}
										</div>
									</div>
								</div>
								: null}

							<div className='card-footer'>
								<button className="btn btn--radius-2 btn--blue-2" type='submit'>Update</button>
							</div>
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
	service: state.serviceRecuestFunction.service,
});

const mapDispatchToProps = {
	setApartmentFunction,
	setHotels,
	updateRoomFunction,
	setService,
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UpdateRoom);

export default Container;
