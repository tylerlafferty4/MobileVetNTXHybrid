import { Component } from '@angular/core';
import { NavController, AlertController, Tabs } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HTTP } from '@ionic-native/http';
import { Config } from '../../../config/config';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
  providers: [Config]
})
export class AppointmentPage {
  mailgunUrl: string;
  mailgunApiKey: string;

  private appointment : FormGroup;
  userInfo: {name: string, phone: string, address: string, address2: string, city: string, zip: string, email: string, date: string, petName: string, nature: string} =
            {name: '', phone: '', address: '', address2: '', city: '', zip: '', email: '', date: '', petName: '', nature: ''};
  background = '#50095f';
  today = new Date().toISOString();



  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public alertCtrl: AlertController, 
              private http: HTTP, private config: Config, private callNumber: CallNumber) {
    this.appointment = this.formBuilder.group({
      name: ['', Validators.pattern('[a-zA-Z ]*')],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])],      
      address: ['', Validators.required],
      address2: [''],
      city: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      zip: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      date: ['', Validators.required],
      petName: [''],
      nature: ['']
    });
    this.mailgunUrl = this.config.mailgunURL;
    this.mailgunApiKey = this.config.mailgunAPI;
  }

  ionViewDidEnter() {
    var t: Tabs = this.navCtrl.parent;
    t.select(1);
  }

  phoneChanged() {
    if(this.userInfo.phone.length == 3) {
      this.userInfo.phone = this.userInfo.phone + '-';
    } else if(this.userInfo.phone.length == 7) {
      this.userInfo.phone = this.userInfo.phone + '-';
    }
  }

  validPhoneNumber() {
    if (this.userInfo.phone.length != 12) {
      return false;
    }
    return true;
  }

  send() {
    var url = "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages";
    let body = {
      "from": this.userInfo.email,
      "to": 'tylerlafferty4@gmail.com',
      "subject": 'Mobile Veterinary Appointment Request',
      "html": "<html><body>Name: " + this.userInfo.name + "<br>Phone Number: " + this.userInfo.phone + "<br>Address: " + this.userInfo.address + 
              "<br>Address Line 2: " + this.userInfo.address2 + "<br>City: " + this.userInfo.city + "<br>Zip Code: " + this.userInfo.zip +
               "<br>Email: " + this.userInfo.email + "<br>Date: " + this.userInfo.date + "<br>Pet Name: " + this.userInfo.petName + 
               "<br>Nature of visit: " + this.userInfo.nature + "</body></html>"
    }
    let headers = {
      "Authorization": "Basic " + this.config.mailgunAPI,
      "Content-Type": "application/x-www-form-urlencoded"

    };
    this.http.post(url, body, headers).then(data => {

      let alert = this.alertCtrl.create({
        title: 'Mobile Vet N TX',
        message: 'We have received your appointment request. A member of our staff will be in touch shortly.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
              this.appointment.reset();
            }
          }
        ]
      });
      alert.present();
    })
      .catch(error => {

        let alert = this.alertCtrl.create({
          title: 'Mobile Vet N TX',
          message: 'An error occurred when sending your request. Please try again later or give us a call at (940) 990-0862',
          buttons: [
            {
              text: 'Close',
              handler: () => {
                console.log('Close clicked');
              }
            }, 
            {
              text: 'Call Now',
              handler: () => {
                console.log('Call now clicked');
                this.appointment.reset();
                this.callNumber.callNumber("19409900862", true)
                .then(() => console.log('Launched dialer!'))
                .catch(() => console.log('Error launching dialer'));
              }
            }
          ]
        });
        alert.present();
      });
    // var requestHeaders = new Headers();
    // requestHeaders.append("Authorization", "Basic " + this.config.mailgunAPI);
    // requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    // this.http.request(new Request({
    //     method: RequestMethod.Post,
    //     url: "https://api.mailgun.net/v3/sandbox5382cd03b7b7464885dcb3c7e2a911e0.mailgun.org/messages",
    //     body: "from=test@example.com&to=tylerlafferty4@gmail.com&subject=This is a test&text=Just testing this message",
    //     headers: requestHeaders
    // }))
    // .subscribe(success => {
    //     console.log("SUCCESS -> " + JSON.stringify(success));
    //     var toast = this.toastCtrl.create({
    //       message: "SUCCESS -> " + JSON.stringify(success)
    //     });
    //     toast.present();
    // }, error => {
    //     console.log("ERROR -> " + JSON.stringify(error));
    //     var toast = this.toastCtrl.create({
    //       message: "ERROR -> " + JSON.stringify(error)
    //     });
    //     toast.present();
    // });
}
}
