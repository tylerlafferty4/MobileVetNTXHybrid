import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html'
})
export class AppointmentPage {

  private appointment : FormGroup;
  userInfo: {name: string, phone: string, address: string, address2: string, city: string, zip: string, email: string, date: string, petName: string, nature: string} =
            {name: '', phone: '', address: '', address2: '', city: '', zip: '', email: '', date: '', petName: '', nature: ''};
  background = '#50095f';

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public toastCtrl: ToastController, private emailComposer: EmailComposer) {
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

    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
        console.log("We can send an email");
      } else {
        console.log("No email setup");
      }
     });
  }

  send() {
    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [ ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
