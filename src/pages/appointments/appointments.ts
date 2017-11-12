import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, Request, RequestMethod, Headers } from "@angular/http";
import { Config } from '../../../config/config';

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
  providers: [Config]
})
export class AppointmentPage {

  http: Http;
  mailgunUrl: string;
  mailgunApiKey: string;

  private appointment : FormGroup;
  userInfo: {name: string, phone: string, address: string, address2: string, city: string, zip: string, email: string, date: string, petName: string, nature: string} =
            {name: '', phone: '', address: '', address2: '', city: '', zip: '', email: '', date: '', petName: '', nature: ''};
  background = '#50095f';



  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public toastCtrl: ToastController, http: Http, private config: Config) {
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
    this.mailgunUrl = this.config.mailgunURL;
    this.mailgunApiKey = window.btoa(this.config.mailgunAPI);
  }

  send() {
    var requestHeaders = new Headers();
    requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
    requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    this.http.request(new Request({
        method: RequestMethod.Post,
        url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
        body: "from=test@example.com&to=tylerlafferty4@gmail.com&subject=This is a test&text=Just testing this message",
        headers: requestHeaders
    }))
    .subscribe(success => {
        console.log("SUCCESS -> " + JSON.stringify(success));
        var toast = this.toastCtrl.create({
          message: "SUCCESS -> " + JSON.stringify(success)
        });
        toast.present();
    }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
        var toast = this.toastCtrl.create({
          message: "ERROR -> " + JSON.stringify(error)
        });
        toast.present();
    });
}
}
