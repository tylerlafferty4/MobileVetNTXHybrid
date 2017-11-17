import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  background = '#50095f';

  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    var t: Tabs = this.navCtrl.parent;
    t.select(0);
  }
}

