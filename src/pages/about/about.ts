import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  background = '#50095f';
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  visitStore() {
    const browser = this.iab.create('http://mobilevetclinicofnorthtexas.vetsfirstchoice.com/', '_blank', 'presentationstyle=formsheet');
    browser.show();
  }
}

