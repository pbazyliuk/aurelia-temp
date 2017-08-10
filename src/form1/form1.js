import {ValidationController, ValidationRules, validateTrigger} from 'aurelia-validation';
import { EventAggregator } from 'aurelia-event-aggregator';
import { NotificationPayload } from '../notification-payload';
import { inject } from 'aurelia-framework';

import { getAllUsersService } from 'service/getAllUsersService'

@inject(ValidationController, EventAggregator, getAllUsersService)
export class Form1 {
  constructor(controller, eventAggregator, getAllUsersService) {
    this.job = { email: ''};
    this.getAllUsersService = getAllUsersService;


    this.eventAggregator = eventAggregator;
    this.eventAggregator.subscribe(NotificationPayload, payload => {
      this.notification = payload.time;
    })
    
    this.controller = controller;
    this.controller.validateTrigger = validateTrigger.change;
    
  ValidationRules
    .ensure(j => j.email)
    .required()
    .minLength(3)
    .on(this.job)
  }


	activate(params, router) {
		  // console.log(this.getAllUsersService.backgroundNotificationReceived(this.eventAggregator));
		}


  clearNotification() {
    this.notification = null;
  }


}
