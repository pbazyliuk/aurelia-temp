

export class getAllUsersService {
	contructor() {
		
		this.users = [];
	}

	getAllUsers() {
		var promise = new Promise((resolve, reject) => {
			fetch('https://api.github.com/users')
				.then(response => response.json())
				.then(data => resolve(this.users = data));
		});
		return promise;
	}
}