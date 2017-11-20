import { Component } from '@angular/core';
import { NavController, Tabs, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-online-store',
  templateUrl: 'online-store.html'
})
export class OnlineStorePage {

  constructor(public navCtrl: NavController, public platform: Platform, private iab: InAppBrowser) {

  }

  ngOnInit() {
    var browser = this.iab.create('http://mobilevetclinicofnorthtexas.vetsfirstchoice.com/', '_blank', 'fullscreen=no');
    browser.show();
    browser.on('exit').subscribe(event => {
      console.log("loadstart -->",event);
        this.platform.ready().then(() => {
          setTimeout(() => {
            var t: Tabs = this.navCtrl.parent;
            t.select(t.previousTab());
          }, 2000);
        });
    }, err => {
      console.log("InAppBrowser loadstart Event Error: " + err);
    });
  }

  ionViewDidLeave() {
    // var t: Tabs = this.navCtrl.parent;
    // t.select(t.previousTab());
  }
}
