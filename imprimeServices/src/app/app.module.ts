import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
=======
import { FooterComponent } from './components/footer/footer.component';
>>>>>>> 40318af81156011ea019e9e0fcbad1b6cd1cf4e8

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    FooterComponent
>>>>>>> 40318af81156011ea019e9e0fcbad1b6cd1cf4e8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
