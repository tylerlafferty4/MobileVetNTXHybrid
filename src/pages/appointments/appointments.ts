import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html'
})
export class AppointmentPage {

  private appointment : FormGroup;
  userInfo: {name: string, phone: string, address: string, address2: string, city: string, zip: string, email: string, date: string, petName: string, nature: string} =
            {name: '', phone: '', address: '', address2: '', city: '', zip: '', email: '', date: '', petName: '', nature: ''};
  background = '#50095f';

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.appointment = this.formBuilder.group({
      name: [''],
      phone: ['', Validators.required, this.phoneValidator.bind(this)],
      address: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required],
      petName: [''],
      nature: ['']
    });
  }

  phoneValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value !== '') {
      if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
        return {invalidPhone: true};
      }
    }
  }

  logForm() {
    var toast = this.toastCtrl.create({
      message: this.userInfo.address
    });
    toast.present();
  }
}
