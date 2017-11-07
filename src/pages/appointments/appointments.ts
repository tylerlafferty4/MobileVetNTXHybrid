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
    this.http = http;
    this.mailgunUrl = "sandbox5382cd03b7b7464885dcb3c7e2a911e0.mailgun.org";
    this.mailgunApiKey = window.btoa("api:key-3d45a6afc1f4cff0c3510755aa25f457");
  }

  send(recipient: string, subject: string, message: string) {
        var requestHeaders = new Headers();
        requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
        requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        this.http.request(new Request({
            method: RequestMethod.Post,
            url: "https://api.mailgun.net/v3/sandbox5382cd03b7b7464885dcb3c7e2a911e0.mailgun.org/messages",
            body: "from=test@example.com&to=tylerlafferty4@gmail.com&subject=Test&text=Testing this",
            headers: requestHeaders
        }))
        .subscribe(success => {
            console.log("SUCCESS -> " + JSON.stringify(success));
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }
}
