import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'user', component: UserComponent },
];

@NgModule({})
export class AppaRoutingModule {}
