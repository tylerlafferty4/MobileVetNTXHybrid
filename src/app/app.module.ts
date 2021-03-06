import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AppointmentPage } from '../pages/appointments/appointments';
import { ServicesPage } from '../pages/services/services';
import { OnlineStorePage } from '../pages/online-store/online-store';
import { TabsPage } from '../pages/tabs/tabs';
import { Config } from '../../config/config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AppointmentPage,
    ServicesPage,
    OnlineStorePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AppointmentPage,
    ServicesPage,
    OnlineStorePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SafariViewController,
    Config,
    HTTP,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
