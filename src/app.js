export class App {
 
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], title: 'home',       name: 'home',       moduleId: 'home/home', nav: true },
      { route: 'users',    title: 'users',        name: 'users',      moduleId: 'users/users',   nav: true },
      { route: 'users/:id', title: 'userDetail',  name: 'userDetail', moduleId: 'userDetail/userDetail'}      
    ]);
  }
}
