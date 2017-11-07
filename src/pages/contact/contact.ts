import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private contact : FormGroup;
  userInfo: {name: string, phone: string, email: string, message: string} =
            {name: '', phone: '', email: '', message: ''};
  background = '#50095f';

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.contact = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  send() {

  }
}
