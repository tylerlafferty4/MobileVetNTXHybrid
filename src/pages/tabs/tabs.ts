import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AppointmentPage } from '../appointments/appointments';
import { ServicesPage } from '../services/services';
import { OnlineStorePage } from '../online-store/online-store';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = AppointmentPage;
  tab3Root = ServicesPage;
  tab4Root = OnlineStorePage;
  tab5Root = ContactPage;

  constructor() {

  }
}
