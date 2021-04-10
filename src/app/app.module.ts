import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelpComponent } from './welp/welp.component';
import { HeaderComponent } from './header/header.component';
import { InfopComponent } from './infop/infop.component';
import { VotepComponent } from './votep/votep.component';
import { StateComponent } from './state/state.component';
import { VerifypComponent } from './verifyp/verifyp.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    WelpComponent,
    HeaderComponent,
    InfopComponent,
    VotepComponent,
    StateComponent,
    VerifypComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
