import axios from 'axios';
import _ from 'lodash';

export const API_URL = 'http://localhost:4000/'
axios.defaults.baseURL = API_URL;

class Api {
	static registration(data) {
		return axios.post('adminLogIn/admin-sing-up', data)
	}

	static loginAdmin(email, password) {
		return axios.post('adminLogIn/admin-sing-in', {email, password})
	}

	static updateAdminData() {
		return axios.post('adminLogIn/admin-update-data')
	}

	static addHotels(data) {
		const formData = new FormData();
		_.forEach(data, (val, name) => {
			if (name === 'images') {
				_.forEach(val, (v) => {
					formData.append('images', v);
				})
			} else {
				formData.append(name, val);
			}
		});
		return axios.post('admin/add-hotel', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}

	static updateHotels(data, id) {
		const formData = new FormData();
		_.forEach(data, (val, name) => {
			if (name === 'images') {
				_.forEach(val, (v) => {
					formData.append('images', v);
				})
			} else {
				if (val) {
					formData.append(name, val);
				}
			}
		});
		formData.append('id', id.id);
		return axios.post('admin/update-hotel', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}

	static setHotels(data) {
		return axios.get('admin/set-hotel', data)
	}

	static deleteHotel(id) {
		return axios.delete('admin/delete-hotel', {data: {id}})
	}

	static addRooms(data) {
		const formData = new FormData();
		_.forEach(data, (val, name) => {
			if (name === 'images') {
				_.forEach(val, (v) => {
					formData.append('images', v);
				})
			} else {
				formData.append(name, val);
			}
		});
		return axios.post('admin/add-apartments', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}

	static destroyRoom(id) {
		return axios.delete('admin/delete-apartment', {data: {id}})
	}

	static updateRoom(data, id) {
		const formData = new FormData();
		_.forEach(data, (val, name) => {
			if (name === 'images') {
				_.forEach(val, (v) => {
					formData.append('images', v);
				})
			} else {
				if (val) {
					formData.append(name, val);
				}
			}
		});
		formData.append('id', id.id);
		return axios.post('admin/update-room', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}

	static setRooms(data) {
		return axios.get('admin/set-room', data)
	}

	static addService(name) {
		return axios.post('admin/add-service', name)
	}

	static updateService(name, id) {
		return axios.post('admin/update-service', {name, id})
	}

	static deleteService(name) {
		console.log(name, 154878);
		return axios.delete('admin/delete-service', {data: name})
	}

	static setService(data) {
		return axios.get('admin/set-service', data)
	}
}

export default Api
