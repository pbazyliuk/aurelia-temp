import { inject } from 'aurelia-framework';
import { getAllUsersService } from 'service/getAllUsersService'

@inject(getAllUsersService)

export class home {
	constructor(getAllUsersService) {
		this.users = [];
		this.getAllUsersService = getAllUsersService
		console.log('home contan', this.getAllUsersService);
	}

	activate(params, router) {
		return this.getAllUsersService.getAllUsers()
			.then(data => this.users = data);
		}

}