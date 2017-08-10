import { EventAggregator } from 'aurelia-event-aggregator';
import { NotificationPayload } from '../notification-payload';
import { inject } from 'aurelia-framework';

@inject(EventAggregator)
export class getAllUsersService {
	constructor(eventAggregator) {
		this.users = [];
		this.eventAggregator = eventAggregator;
		console.log('constructor service')
		setTimeout(() => {this.backgroundNotificationReceived(this.eventAggregator)}, 3000);
	}

	backgroundNotificationReceived(ea) {
		console.log('publish')
		ea.publish(new NotificationPayload('123'))
	}

	getAllUsers() {
		var promise = new Promise((resolve, reject) => {
			fetch('https://api.github.com/users')
				.then(response => response.json())
				.then(data => resolve((this.users = data)));
		});
		return promise;
	}
}
