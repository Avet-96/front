import React, {Component} from 'react';
import {connect} from "react-redux";
import 'react-phone-number-input/style.css'

import Wrapper from "../../Wrapper";
import {hotelRequest} from "../../../store/actions/hotelRecuestFunction";
import {setHotelRequest} from "../../../store/saga/hotelRecuestFunction";




class CreateHotel extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			images: [],
		}
	}

	getHotelData = async (ev) => {
		ev.preventDefault();
		await this.props.hotelRequest(
			this.state
		)
	};

	handleChange = (ev) => {
		this.setState({[ev.target.name]: ev.target.value});
	}

	handleFileChange = async (ev) => {
		await this.setState({images:  ev.target.files});
	}

	render() {
		const {name, lat, lng, description, phone, info, star} = this.state;
		return (
			<Wrapper>
				<div className='card-body'>

					<form method='POST' onSubmit={this.getHotelData}>
						<div className='form-row'>
							<div className='name'>Hotel Name</div>
							<div className='value'>
								<input
									placeholder="name" type='name' name='name'
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
									placeholder='star' onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='name'> Enter Hotel Phone</div>
							<div className='value'>
								<input
									className="input--style-6"
									type='number' name='phone' value={phone}
									placeholder='phone' onChange={this.handleChange}
								/>
							</div>

						</div>
						<div className='form-row'>
							<div className='name'>Enter geolocation latitude</div>
							<input
								className="input--style-6"
								placeholder="latitude" type="number" name='lat'
								value={lat} onChange={this.handleChange}
							/>
						</div>
						<div className='form-row'>
							<div className='name'>Enter geolocation longitude</div>
							<div className='value'>

								<input
									className="input--style-6"
									placeholder="longitude" type="number" name='lng'
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
										name="description" placeholder='Enter description or hotel...'
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
											placeholder='yor Hotel Email, Director Phone, Director Address'
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


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	hotelRequest,
	setHotelRequest
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateHotel);

export default Container;
