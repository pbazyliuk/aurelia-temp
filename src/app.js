export class App {
	configureRouter(config, router) {
		this.router = router;
		config.title = 'Aurelia';
		config.map([
			{
				route: ['', 'home'],
				title: 'home',
				name: 'home',
				moduleId: 'home/home',
				nav: true
			},
			{
				route: 'users',
				title: 'users',
				name: 'users',
				moduleId: 'users/users',
				nav: true
			},
			{
				route: 'form1',
				title: 'form1',
				name: 'form1',
				moduleId: 'form1/form1',
				nav: true
			},
			{
				route: 'users/:id',
				title: 'userDetail',
				name: 'userDetail',
				moduleId: 'userDetail/userDetail'
			}
		]);
	}
}
