import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from '../profile/profile.component';
import{RepoComponent} from '../repo/repo.component'
import {NotFoundComponent} from '../not-found/not-found.component'


const routes: Routes = [
  {path: 'user', component:ProfileComponent},
  { path: 'repo', component:RepoComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},

  { path:'**', component:NotFoundComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }
