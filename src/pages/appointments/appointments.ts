import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, Request, Headers, RequestMethod} from "@angular/http";

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html'
})
export class AppointmentPage {

  private appointment : FormGroup;
  userInfo: {name: string, phone: string, address: string, address2: string, city: string, zip: string, email: string, date: string, petName: string, nature: string} =
            {name: '', phone: '', address: '', address2: '', city: '', zip: '', email: '', date: '', petName: '', nature: ''};
  background = '#50095f';
  http: Http;
  mailgunUrl: string;
  mailgunApiKey: string;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public toastCtrl: ToastController, http: Http) {
    this.appointment = this.formBuilder.group({
      name: [''],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      zip: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      email: ['', Validators.required],
      date: ['', Validators.required],
      petName: [''],
      nature: ['']
    });
  }
}
