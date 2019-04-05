import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "@angular/fire";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "@angular/fire/database";

export const firebaseConfig = {
  apiKey: "AIzaSyA1MD7GI2SE5MVQCLj405nDfMkIYKRNjYQ",
  authDomain: "ionic4-1bae0.firebaseapp.com",
  databaseURL: "https://ionic4-1bae0.firebaseio.com",
  projectId: "ionic4-1bae0",
  storageBucket: "ionic4-1bae0.appspot.com",
  messagingSenderId: "606347469661"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
