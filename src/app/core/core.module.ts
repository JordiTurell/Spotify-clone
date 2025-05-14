import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@core/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '@core/core.component';
import { AuthGuard } from '@infrastructure/guard/auth.guard';

const routes: Routes = [
  { path: '', component:CoreComponent, children:[
      { path: '', component:HomeComponent}
    ], canActivate: [AuthGuard]},
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
