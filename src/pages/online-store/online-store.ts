import { Component } from '@angular/core';
import { NavController, Tabs, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SafariViewController } from '@ionic-native/safari-view-controller';

@Component({
  selector: 'page-online-store',
  templateUrl: 'online-store.html'
})
export class OnlineStorePage {

  constructor(public navCtrl: NavController, public platform: Platform, private iab: InAppBrowser, private safariViewController: SafariViewController) {

  }

  ionViewDidEnter() {
    // this.safariViewController.isAvailable().then((available: boolean) => {
    //   if (available) {
    //     this.safariViewController.show({
    //       url: 'http://mobilevetclinicofnorthtexas.vetsfirstchoice.com/',
    //       hidden: false,
    //       animated: false,
    //       transition: 'curl',
    //       enterReaderModeIfAvailable: true,
    //       tintColor: '#ff0000'
    //     })
    //     .subscribe((result: any) => {
    //       if(result.event === 'opened') console.log('Opened');
    //       else if(result.event === 'loaded') console.log('Loaded');
    //       else if(result.event === 'closed') {
    //         console.log('Closed');
    //         var t: Tabs = this.navCtrl.parent;
    //         t.select(0);
    //       }
    //     },
    //     (error: any) => console.error(error)
    //     );
    //   }
    // })
    // var t: Tabs = this.navCtrl.parent;
    // const browser = this.iab.create('http://mobilevetclinicofnorthtexas.vetsfirstchoice.com/', '_blank', 'presentationstyle=formsheet');
    // browser.show();
    // t.select(0);
    // browser.on('exit').subscribe(event => {
    //   console.log('Exiting web view');
    //   setTimeout(() => {
    //     console.log('selecting tab');
    //     t.select(0);
    //   }, 1500);
    //     // this.platform.ready().then(() => {
          
    //     // });
    // }, err => {
    //   console.log("InAppBrowser loadstart Event Error: " + err);
    // });
  }

  ionViewDidLeave() {
    
  }
}
