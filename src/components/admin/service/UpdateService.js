import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../../Wrapper";
import {setService, updateServiceData} from "../../../store/actions/serviceRecuestFunction";
import Select from "react-select";


class UpdateService extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			selectServiceName:null,
			name: '',
			labelNAme: '',
			id: ''
		}
	}

	updateService = async (ev) => {
		const {name, id} = this.state;
		ev.preventDefault();
		console.log(name, id);
		await this.props.updateServiceData(name, id);
	}
	handelChange = async (ev) => {
		await this.setState({name: ev.target.value});
		console.log(this.state.name);
		console.log(this.state.id)
	}

	handleSelectServiceChange = async selectServiceName => {
		await this.setState({
			selectServiceName,
			labelNAme: selectServiceName.name,
			id: selectServiceName.id
		});

	};

	componentDidMount() {
		this.props.setService()
	}

	render() {
		const {service} = this.props;
		return (
			<Wrapper>
				<div className='card-body'>
					<form method='POST' onSubmit={this.updateService}>
						<Select
							getOptionLabel={(i) => i.name}
							getOptionValue={(i) => i.id}
							onChange={this.handleSelectServiceChange}
							options={service.service}
						/>

						<div className='form-row'>
							<label className='name'>{this.state.labelNAme}</label>
							<div className='value'>

								<input type="name" placeholder={this.state.name} name='name' value={this.state.name}
								       onChange={this.handelChange} className="input--style-6"
								/>
							</div>
						</div>
						<div>
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
	service: state.serviceRecuestFunction.service,
});

const mapDispatchToProps = {
	setService,
	updateServiceData
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UpdateService);

export default Container;
