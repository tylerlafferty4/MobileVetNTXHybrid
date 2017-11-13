import { Component } from '@angular/core';
import { NavController, Tabs, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApplicationRef } from '@angular/core/src/application_ref';

@Component({
  selector: 'page-online-store',
  templateUrl: 'online-store.html'
})
export class OnlineStorePage {

  constructor(public navCtrl: NavController, private ref: ApplicationRef, public platform: Platform, private iab: InAppBrowser) {

  }

  ionViewDidEnter() {
    const browser = this.iab.create('http://mobilevetclinicofnorthtexas.vetsfirstchoice.com/', '_blank', 'fullscreen=no');
    browser.show();
    browser.on('exit').subscribe(event => {
      console.log("loadstart -->",event);
        this.platform.ready().then(() => {
          var t: Tabs = this.navCtrl.parent;
          t.select(t.previousTab());
          this.ref.tick();
        });
    }, err => {
      console.log("InAppBrowser loadstart Event Error: " + err);
    });
  }

}
