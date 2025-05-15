import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@anonymous/login/login.component';
import { CallbackLoginComponent } from '@anonymous/callback-login/callback-login.component';
import { AnonymousComponent } from '@anonymous/anonymous.component';

const routes: Routes = [
  { path: '', component:AnonymousComponent, children:[
    { path: '', component:LoginComponent},
    { path: 'callback', component:CallbackLoginComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnonymousModule { }
