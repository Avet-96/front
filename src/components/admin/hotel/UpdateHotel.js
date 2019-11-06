import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../../Wrapper";
import {setHotels, updateHotelData} from "../../../store/actions/hotelRecuestFunction";
import Select from "react-select";

import {API_URL} from "../../../Api";


class UpdateHotel extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			selectHotelName: null,
			images:[],
			id:''
		}
	}

	componentDidMount() {
		this.props.setHotels()
	}

	handleChange = (ev) => {
		this.setState({[ev.target.name]: ev.target.value});
	}

	handleFileChange = async (ev) => {
		await this.setState({images: ev.target.files});
	}
	handleSelectHotelsChange = async selectHotelName => {
		await this.setState({
			selectHotelName,
			id: selectHotelName.id,
		})
		console.log(this.props.match)
		console.log(selectHotelName)
	};

	updateHotelData = async (ev) => {
		const {name, lat, lng, description, phone, info,images, star,id} = this.state;
		ev.preventDefault();
		this.props.updateHotelData({name, lat, lng, description, phone,images, info, star},{id})

	}

	render() {
		const {hotels} = this.props;
		const {name, lat, lng, description, phone, info, star, selectHotelName} = this.state;
		return (
			<Wrapper>
				<div className='card-body'>
					<form method='POST' onSubmit={this.updateHotelData}>
						<div className='create_hotel'>
							<Select
								getOptionLabel={(i) => i.name}
								getOptionValue={(i) => i.id}
								onChange={this.handleSelectHotelsChange}
								options={hotels.hotels}
							/>
						</div>
						{selectHotelName ? <div>
							<div className='form-row'>
								<div className='name'>Hotel Name</div>
								<div className='value'>
									<input
										placeholder={selectHotelName.name} type='name' name='name'
										value={name} onChange={this.handleChange}
										className="input--style-6"
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='name'>Star NUmber</div>
								<div className='value'>
									<input
										className="input--style-6"
										type='number' name='star' value={star}
										placeholder={selectHotelName.star} onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='name'> Enter Hotel Phone</div>
								<div className='value'>
									<input
										className="input--style-6"
										type='number' name='phone' value={phone}
										placeholder={selectHotelName.phone} onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='name'>Enter geolocation latitude</div>
								<input
									className="input--style-6"
									placeholder={selectHotelName.lat} type="number" name='lat'
									value={lat} onChange={this.handleChange}
								/>
							</div>
							<div className='form-row'>
								<div className='name'>Enter geolocation longitude</div>
								<div className='value'>

									<input
										className="input--style-6"
										placeholder={selectHotelName.lng} type="number" name='lng'
										value={lng} onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='name'>Enter hotel description...</div>
								<div className='value'>
									<div className='input-group'>
									<textarea
										className="textarea--style-6"
										name="description" placeholder={selectHotelName.description}
										value={description} onChange={this.handleChange}/>
									</div>
								</div>
							</div>
							<div className='form-row'>
								<div className='name'>Enter hotel information</div>
								<div className='value'>
									<div className='input-group'>
										<textarea
											className="textarea--style-6"
											name='info'
											placeholde={selectHotelName.info}
											value={info} onChange={this.handleChange}
										/>
									</div>
								</div>
							</div>
							<div className='form-row'>
								<div className='name'>Upload Photo</div>
								<div className='input-group js-input-file'>
									<input className='input-file' id='file'
									       type="file" multiple onChange={this.handleFileChange}/>
									<label className="label--file" htmlFor="file">Choose file</label>
								</div>

								<div className='hotel__update_image_block'>
									{selectHotelName.images ? JSON.parse(selectHotelName.images).map((i) => (
										<img key={i.id} className='images_style'
										     src={`${API_URL}uploadsHotels/${i}`} alt=""/>
									)) : null}
								</div>
							</div>
							<div className='card-footer'>
								<button className="btn btn--radius-2 btn--blue-2" type='submit'>Create</button>
							</div>
						</div> : null}

					</form>
				</div>


			</Wrapper>
		);
	}
}


const mapStateToProps = (state) => ({
	hotels: state.hotelRecuestFunction.hotels,
});

const mapDispatchToProps = {
	setHotels,
	updateHotelData
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UpdateHotel);

export default Container;
