import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../../Wrapper";
import {setService, addSrviceNAme} from "../../../store/actions/serviceRecuestFunction";


class CreateService extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			showComponent: false,
		}
	}

	componentDidMount() {
		this.props.setService()

	}

	setService = async (ev) => {
		ev.preventDefault();
		await this.props.addSrviceNAme(this.state);
		this.setState({name: '',showComponent:true})
	}
	handleChange = async (ev) => {
		this.setState({[ev.target.name]: ev.target.value});
	}

	render() {
		const {name} = this.state;
		return (
			<Wrapper>
				<div className='card-body'>
					<form method='POST' onSubmit={this.setService}>
						<div className='form-row'>
							<div className='name'>Hotel Name</div>
							<div className='value'>
								<input
									placeholder="Service name" type='name' name='name'
									value={name} onChange={this.handleChange}
									className="input--style-6"
								/>
							</div>
						</div>
						{
							this.props.service && this.props.service.servis ? this.props.service.servis.map((i) => (
								<div className='form-row' key={i.id}>
									<div className='name'>Services</div>
									<div className="rwd-table">
										<span className='table__service'>{i.name}</span>
									</div>
								</div>
							)) : null
						}
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
	service: state.serviceRecuestFunction.service,
});

const mapDispatchToProps = {
	addSrviceNAme,
	setService
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateService);

export default Container;
