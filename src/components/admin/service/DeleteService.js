import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../../Wrapper";
import {deletSservice, setService} from "../../../store/actions/serviceRecuestFunction";
import Select from "react-select";


class DeleteService extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			service: [],
			name: '',
			selectServiceName: null
		}
	}

	deletService = async (ev) => {
		const {name} = this.state;
		ev.preventDefault();
		await this.props.deletSservice({name});

	};
	handleSelectServiceChange = async selectServiceName => {
		await this.setState({selectServiceName, name: selectServiceName.name});
	};


	componentDidMount() {
		this.props.setService();
	}


	render() {
		const {service} = this.props;
		return (
			<Wrapper>
				<div className='card-body'>
					<form method='DELETE' onSubmit={this.deletService}>
						<Select
							getOptionLabel={(i) => i.name}
							getOptionValue={(i) => i.id}
							onChange={this.handleSelectServiceChange}
							options={service.service}
						/>
						<div className='form-row'>
							<div className='card-footer'>

								<button className="btn btn--radius-2 btn--blue-2" type='submit'>Delete</button>
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
	deletSservice
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(DeleteService);

export default Container;
