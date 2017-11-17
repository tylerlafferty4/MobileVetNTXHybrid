import { Component } from '@angular/core';
import { NavController, AlertController, Tabs } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HTTP } from '@ionic-native/http';
import { Config } from '../../../config/config';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private contact : FormGroup;
  userInfo: {name: string, phone: string, email: string, message: string} =
            {name: '', phone: '', email: '', message: ''};
  background = '#50095f';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private formBuilder: FormBuilder, 
              private http: HTTP, private config: Config, private callNumber: CallNumber) {
    this.contact = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])],   
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ionViewDidEnter() {
    var t: Tabs = this.navCtrl.parent;
    t.select(2);
  }

  send() {
    var url = "https://api.mailgun.net/v3/" + this.config.mailgunURL + "/messages";
    let body = {
      "from": this.userInfo.email,
      "to": 'tylerlafferty4@gmail.com',
      "subject": 'Mobile Veterinary Appointment Request',
      "html": "<html><body>Name: " + this.userInfo.name + "<br>Phone Number: " + this.userInfo.phone + 
               "<br>Email: " + this.userInfo.email + "<br>Message: " + this.userInfo.message + "</body></html>"
    }
    let headers = {
      "Authorization": "Basic " + this.config.mailgunAPI,
      "Content-Type": "application/x-www-form-urlencoded"

    };
    this.http.post(url, body, headers).then(data => {

      let alert = this.alertCtrl.create({
        title: 'Mobile Vet N TX',
        message: 'We have received your message. A member of our staff will be in touch shortly.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
              this.contact.reset();
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
                this.contact.reset();
                this.callNumber.callNumber("19409900862", true)
                .then(() => console.log('Launched dialer!'))
                .catch(() => console.log('Error launching dialer'));
              }
            }
          ]
        });
        alert.present();
      });
    }
}
