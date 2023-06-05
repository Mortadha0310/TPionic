import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { TestPipe } from './test.pipe';
 

const firebaseConfig = {
  apiKey: "AIzaSyBGMuSi_IVbJP8Xm-DLudpSJodLZZQg0T8",
  authDomain: "daly-1c343.firebaseapp.com",
  projectId: "daly-1c343",
  storageBucket: "daly-1c343.appspot.com",
  messagingSenderId: "515001676515",
  appId: "1:515001676515:web:8bc48586acea65b3f20bd6"
};

@NgModule({
  declarations: [AppComponent, TestPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
