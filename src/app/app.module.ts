import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { oiwakeApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    oiwakeApp,
    AboutPage,
    ContactPage,
    HomePage,
    TestPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(oiwakeApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    oiwakeApp,
    AboutPage,
    ContactPage,
    HomePage,
    TestPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
