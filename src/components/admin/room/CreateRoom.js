import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../../Wrapper";
import {setHotels} from "../../../store/actions/hotelRecuestFunction";
import Select from "react-select";
import {setService} from "../../../store/actions/serviceRecuestFunction";
import {addApartment} from "../../../store/actions/aportamentRecuestFunctions";


class CreateRoom extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			selectHotelName: null,
			selectServiceName: null,
			hotel_id: '',
			services: [],
			images: [],
		}
	}


	componentDidMount() {
		this.props.setHotels();
		this.props.setService();
	}

	getApartmentData = async (ev) => {
		const {
			hotel_id, services, number, name,
			beds, price, description, guest,
			l_beds, sole_price, images
		} = this.state;
		ev.preventDefault();
		await this.props.addApartment({
			hotel_id, services, number,
			name, beds, price, description,
			l_beds, sole_price, guest,images
		})
	}


	handleChange = async (ev) => {
		this.setState({[ev.target.name]: ev.target.value})
	};

	handleSelectServiceChange = async selectServiceName => {
		this.setState({services: selectServiceName.map(d => d.id)});

	};
	handleSelectHotelsChange = async selectHotelName => {
		await this.setState({selectHotelName, hotel_id: selectHotelName.id});
		console.log(this.state.hotel_id, ' id')
	};

	handleFileChange = async (ev) => {
		await this.setState({images: ev.target.files});
		console.log(this.state.images, 456456)
	};

	render() {

		const {hotels, service} = this.props;
		const {number, name, beds, price, description, guest, l_beds, sole_price,} = this.state;

		return (
			<Wrapper>

				<div className='card-body'>


					<form method='POST' onSubmit={this.getApartmentData}>
						<Select
							getOptionLabel={(i) => i.name}
							getOptionValue={(i) => i.id}
							onChange={this.handleSelectHotelsChange}
							options={hotels.hotels}

						/>
						<Select
							getOptionLabel={(i) => i.name}
							getOptionValue={(i) => i.id}
							onChange={this.handleSelectServiceChange}
							options={service.service}
							isMulti
						/>

						<div className='form-row'>
							<div className='name'>Room Number</div>
							<div className='value'>
								<input
									placeholder="room number" type='number' name='number'
									value={number} onChange={this.handleChange}
									className="input--style-6"
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='name'>Room Name</div>
							<div className='value'>
								<input
									placeholder="name" type='name' name='name'
									value={name} onChange={this.handleChange}
									className="input--style-6"
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='name'>Beds Number</div>
							<div className='value'>
								<input
									placeholder="beds number" type='number' name='beds'
									value={beds} onChange={this.handleChange}
									className="input--style-6"
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='name'>Room Price</div>
							<div className='value'>
								<input
									placeholder="room price" type='number' name='price'
									value={price} onChange={this.handleChange}
									className="input--style-6"
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='name'>Room description</div>
							<div className='value'>
								<input
									placeholder="room description" type='text' name='description'
									value={description} onChange={this.handleChange}
									className="input--style-6"
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='name'>Last Beds</div>
							<div className='value'>
								<input
									placeholder="Last Beds" type='number' name='l_beds'
									value={l_beds} onChange={this.handleChange}
									className="input--style-6"
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='name'>Soled Price</div>
							<div className='value'>
								<input
									placeholder="Soled price" type='number' name='sole_price'
									value={sole_price} onChange={this.handleChange}
									className="input--style-6"
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='name'>Guest Number</div>
							<div className='value'>
								<input
									placeholder="beds number" type='number' name='guest'
									value={guest} onChange={this.handleChange}
									className="input--style-6"
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
							<div className="label--desc">Upload your Photo/Resume or any other relevant file. Max
								file
								size
								50 MB
							</div>
						</div>
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
	hotels: state.hotelRecuestFunction.hotels,
	service: state.serviceRecuestFunction.service,

});

const mapDispatchToProps = {
	setHotels,
	setService,
	addApartment
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateRoom);

export default Container;
