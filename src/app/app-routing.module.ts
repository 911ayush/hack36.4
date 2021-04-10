import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelpComponent } from './welp/welp.component';
import { HeaderComponent } from './header/header.component';
import { InfopComponent } from './infop/infop.component';
import { VotepComponent } from './votep/votep.component';


const routes: Routes = [
  { path: '' , component: WelpComponent},
  { path: 'info' , component: InfopComponent},
  { path: 'vote' , component: VotepComponent},
  { path: '**', redirectTo:'/', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
