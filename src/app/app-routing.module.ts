import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdataComponent } from './getdata/getdata.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:GetdataComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
