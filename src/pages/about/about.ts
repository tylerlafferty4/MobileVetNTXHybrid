import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  background = '#50095f';

  constructor(public navCtrl: NavController) {

  }

}
