import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-online-store',
  templateUrl: 'online-store.html'
})
export class OnlineStorePage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {

    // window.open('http://mobilevetclinicofnorthtexas.vetsfirstchoice.com/', '_blank', 'location=no,toolbar=yes');
  }

}
