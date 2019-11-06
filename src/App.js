import React, {Component} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import CreateHotel from "./components/admin/hotel/CreateHotel";
import DeleteHotel from "./components/admin/hotel/DeleteHotel";
import UpdateHotel from "./components/admin/hotel/UpdateHotel";
import CreateRoom from "./components/admin/room/CreateRoom";
import DeleteRoom from "./components/admin/room/DeleteRoom";
import UpdateRoom from "./components/admin/room/UpdateRoom";
import CreateService from "./components/admin/service/CreateService";
import DeleteService from "./components/admin/service/DeleteService";
import UpdateService from "./components/admin/service/UpdateService";



class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/registration" component={Registration}/>
					<Route path="/login" component={Login}/>

					<Route path="/hotel/update" component={UpdateHotel}/>
					<Route path="/hotel/delete" component={DeleteHotel}/>
					<Route path="/hotel/create" component={CreateHotel}/>
					<Route path="/hotel" component={CreateHotel}/>


					<Route path="/room/create" component={CreateRoom}/>
					<Route path="/room/delete" component={DeleteRoom}/>
					<Route path="/room/update" component={UpdateRoom}/>
					<Route path="/room" component={CreateRoom}/>

					<Route path="/service/service" component={CreateService}/>
					<Route path="/service/delete" component={DeleteService}/>
					<Route path="/service/update" component={UpdateService}/>
					<Route path="/service" component={CreateService}/>

				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
